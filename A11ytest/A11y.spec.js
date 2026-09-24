const { test } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const fs = require ('fs');
const reportId = `A11y-${Date.now()}`;
const applicationName = 'Apple Accessibility Scan';
const scanDate =
    new Date().toLocaleString();
function getWcagInfo(tags) {

    const wcagTag = tags.find(tag => /^wcag\d+$/.test(tag));
    
    let successCriteria = 'N/A';

    if (wcagTag) {
        const numbers = wcagTag.replace('wcag', '');
        if (numbers.length >=3) {
            successCriteria = `${numbers[0]}.${numbers[1]}.${numbers.substring(2)}`;
        }
    }
    let level = 'Unknown';

    if (tags.includes('wcag2aaa')) {level = 'AAA';}
    
    else if (tags.includes('wcag2aa')) {level = 'AA';}

    else if (tags.includes('wcag2a')) {level = 'A';}

    return {
        successCriteria,
        level
    };

}

test('Scan Multiple Pages', async ({page}) => {
    const pages = ['http://127.0.0.1:5500/',
    ];

    let criticalCount = 0;
    let seriousCount = 0;
    let moderateCount = 0;
    let minorCount = 0;

    let allResults = [];
    let totalCriticalOrSeriousIssues = 0;
    for (const url of pages) {
        console.log(`Scanning: ${url}`);
        await page.goto(url);
        const filename = 
        url.replace(/https?:\/\//, "")
        .replace(/[\/:\.?&=]/g, "_");

        await page.screenshot({
            path: `screenshots/${filename}.png`,
            fullPage: true
        });
        const results =
        await new AxeBuilder({page}).analyze();
        results.violations.forEach(v => {
            const wcagInfo = getWcagInfo(v.tags);
            if (v.impact === 'critical')
                criticalCount++;
            if (v.impact === 'serious')
                seriousCount++;
            if (v.impact === 'moderate')
                moderateCount++;
            if (v.impact === 'minor')
                minorCount++;
        });

        const criticalOrSeriousIssues = 
        results.violations.filter(
            violation =>
                violation.impact === 'critical' ||
                violation.impact === 'serious'
        );
        totalCriticalOrSeriousIssues += criticalOrSeriousIssues.length;

        allResults.push({
            page: url,
            violationCount: results.violations.length,
            violations: results.violations
        });
    }
fs.writeFileSync(
    'multi-page-report.json',
    JSON.stringify(allResults, null, 2)
);
let htmlContent = `
<html>
<head>
<title>A11y Reports</title>
</head>
<body>
<h1>Accessibility Report</h1>
`;

allResults.forEach(result => {

    htmlContent += `
    <h2>Page: ${result.page}</h2>
    <p>
       <strong>Total Violations: </strong>
         ${result.violationsCount}
    </p>

    <p><strong>Page Status:</strong>
       ${
        result.violationsCount > 0
        ? 'FAILED'
        : 'PASSED'
       }
    </p>   

    `;

    if (result.violationsCount === 0) {
        htmlContent += `
        <p>No Accessibility Violations Found</p>
        `;
    } 
    else {
        result.violations.forEach((v, index) => {
            const wcagInfo = getWcagInfo(v.tags);
            htmlContent += `
            <h3>Issue ${index +1} - ${v.id}</h3>
            <p>
            <strong>Impact: </strong>
            ${v.impact}
            </p>
            <p>
            <strong>Success Criteria:</strong>
            ${wcagInfo.successCriteria}
            </p>
            <p>
            <strong>WCAG Level: </strong>
            ${wcagInfo.level}
            </p>
            <p>
            <strong>Description:</strong>
            ${v.description}
            </p>
            <p>
            <strong>Expected Result:</strong>
            ${v.help}.
            </p>
            <p>
            <strong>Help:</strong>
            ${v.help}
            </p>
            <p>
            <strong>Help URL:</strong>
            ${v.helpUrl}
            ${v.helpUrl}
            </a>
            </p>
            <p>
            <strong> Affected Element:</strong></p>
            ${v.nodes.map((node, nodeIndex) => `
                
                <p>
                <strong>Target:</strong>
                ${node.target.join(', ')}
                </p>
                <p>
                <strong>HTML Snippet:</strong>
                </p>
                <pre>
                ${node.html
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                }
                </pre>
                <p>
                <strong>Failure Summary:</strong>
                </p>
                <pre>
                ${node.failureSummary || 'N/A'}
                </pre>
                <p>
                <strong>Actual Result:</strong>
                </p>
                <pre>
                ${node.failureSummary || 'N/A'}
                </pre>
                <p>
                <strong>Fix Recommendation:</strong>
                </p>
                <p>Review and follow the remediation guidance:</p>
                <p>
                ${v.helpURL}
                </p>
                `).join('')
            }
            <hr>            
            `;
        });
    }

});
htmlContent += `
</body>
</html>
`;

const totalViolations =
criticalCount +
seriousCount +
moderateCount +
minorCount;

let accessibilityScore =
 100 - (
    criticalCount * 10 +
    seriousCount * 5 +
    moderateCount * 2 +
    minorCount * 1
   );
    
    accessibilityScore =
    Math.max(accessibilityScore, 0);

const summarySection = `
   <h2>Accessibility Summary</h2>
    <p><strong>Report ID:</strong> ${reportId}</p>
    <p><strong>Application:</strong> ${applicationName}</p>
    <p><strong>Scan Date:</strong> ${scanDate}</p>
    <p><strong>Pages Scanned:</strong> ${pages.length}</p>
    <p><strong>Total Violations:</strong> ${totalViolations}</p>
    <p><strong>Critical:</strong> ${criticalCount}</p>
    <p><strong>Serious:</strong> ${seriousCount}</p>
    <p><strong>Moderate:</strong> ${moderateCount}</p>
    <p><strong>Minor:</strong> ${minorCount}</p>

    <p>
    <strong>Accessibility Score:</strong>
      ${accessibilityScore}%
    </p>

    <p>
      <strong>Status:</strong>
        ${
            criticalCount > 0 ||
            seriousCount > 0
            ? 'FAIL'
            : 'PASS'
        }
        </p>
        <hr>
    `;
      htmlContent = summarySection + htmlContent;
      fs.writeFileSync('a11y-report.html', htmlContent);
      if (totalCriticalOrSeriousIssues > 0) {
        throw new Error(
            `Accessibility Quality Gate Failed. Critical/Serious Issues Found: ${totalCriticalOrSeriousIssues}`
        );
      }

    console.log("Accessibility Scan Started");
    console.log("Report Created Successfully");

}
);