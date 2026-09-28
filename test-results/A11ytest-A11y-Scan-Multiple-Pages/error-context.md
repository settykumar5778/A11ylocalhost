# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: A11ytest\A11y.spec.js >> Scan Multiple Pages
- Location: A11ytest\A11y.spec.js:35:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5500/
Call log:
  - navigating to "http://127.0.0.1:5500/", waiting until "load"

```

# Test source

```ts
  1   | const { test } = require('@playwright/test');
  2   | const AxeBuilder = require('@axe-core/playwright').default;
  3   | const fs = require ('fs');
  4   | const reportId = `A11y-${Date.now()}`;
  5   | const applicationName = 'Apple Accessibility Scan';
  6   | const scanDate =
  7   |     new Date().toLocaleString();
  8   | function getWcagInfo(tags) {
  9   | 
  10  |     const wcagTag = tags.find(tag => /^wcag\d+$/.test(tag));
  11  |     
  12  |     let successCriteria = 'N/A';
  13  | 
  14  |     if (wcagTag) {
  15  |         const numbers = wcagTag.replace('wcag', '');
  16  |         if (numbers.length >=3) {
  17  |             successCriteria = `${numbers[0]}.${numbers[1]}.${numbers.substring(2)}`;
  18  |         }
  19  |     }
  20  |     let level = 'Unknown';
  21  | 
  22  |     if (tags.includes('wcag2aaa')) {level = 'AAA';}
  23  |     
  24  |     else if (tags.includes('wcag2aa')) {level = 'AA';}
  25  | 
  26  |     else if (tags.includes('wcag2a')) {level = 'A';}
  27  | 
  28  |     return {
  29  |         successCriteria,
  30  |         level
  31  |     };
  32  | 
  33  | }
  34  | 
  35  | test('Scan Multiple Pages', async ({page}) => {
  36  |     const pages = ['http://127.0.0.1:5500/',
  37  |     ];
  38  | 
  39  |     let criticalCount = 0;
  40  |     let seriousCount = 0;
  41  |     let moderateCount = 0;
  42  |     let minorCount = 0;
  43  | 
  44  |     let allResults = [];
  45  |     let totalCriticalOrSeriousIssues = 0;
  46  |     for (const url of pages) {
  47  |         console.log(`Scanning: ${url}`);
> 48  |         await page.goto(url);
      |                    ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://127.0.0.1:5500/
  49  |         const filename = 
  50  |         url.replace(/https?:\/\//, "")
  51  |         .replace(/[\/:\.?&=]/g, "_");
  52  | 
  53  |         await page.screenshot({
  54  |             path: `screenshots/${filename}.png`,
  55  |             fullPage: true
  56  |         });
  57  |         const results =
  58  |         await new AxeBuilder({page}).analyze();
  59  |         results.violations.forEach(v => {
  60  |             const wcagInfo = getWcagInfo(v.tags);
  61  |             if (v.impact === 'critical')
  62  |                 criticalCount++;
  63  |             if (v.impact === 'serious')
  64  |                 seriousCount++;
  65  |             if (v.impact === 'moderate')
  66  |                 moderateCount++;
  67  |             if (v.impact === 'minor')
  68  |                 minorCount++;
  69  |         });
  70  | 
  71  |         const criticalOrSeriousIssues = 
  72  |         results.violations.filter(
  73  |             violation =>
  74  |                 violation.impact === 'critical' ||
  75  |                 violation.impact === 'serious'
  76  |         );
  77  |         totalCriticalOrSeriousIssues += criticalOrSeriousIssues.length;
  78  | 
  79  |         allResults.push({
  80  |             page: url,
  81  |             violationCount: results.violations.length,
  82  |             violations: results.violations
  83  |         });
  84  |     }
  85  | fs.writeFileSync(
  86  |     'multi-page-report.json',
  87  |     JSON.stringify(allResults, null, 2)
  88  | );
  89  | let htmlContent = `
  90  | <html>
  91  | <head>
  92  | <title>A11y Reports</title>
  93  | </head>
  94  | <body>
  95  | <h1>Accessibility Report</h1>
  96  | `;
  97  | 
  98  | allResults.forEach(result => {
  99  | 
  100 |     htmlContent += `
  101 |     <h2>Page: ${result.page}</h2>
  102 |     <p>
  103 |        <strong>Total Violations: </strong>
  104 |          ${result.violationsCount}
  105 |     </p>
  106 | 
  107 |     <p><strong>Page Status:</strong>
  108 |        ${
  109 |         result.violationsCount > 0
  110 |         ? 'FAILED'
  111 |         : 'PASSED'
  112 |        }
  113 |     </p>   
  114 | 
  115 |     `;
  116 | 
  117 |     if (result.violationsCount === 0) {
  118 |         htmlContent += `
  119 |         <p>No Accessibility Violations Found</p>
  120 |         `;
  121 |     } 
  122 |     else {
  123 |         result.violations.forEach((v, index) => {
  124 |             const wcagInfo = getWcagInfo(v.tags);
  125 |             htmlContent += `
  126 |             <h3>Issue ${index +1} - ${v.id}</h3>
  127 |             <p>
  128 |             <strong>Impact: </strong>
  129 |             ${v.impact}
  130 |             </p>
  131 |             <p>
  132 |             <strong>Success Criteria:</strong>
  133 |             ${wcagInfo.successCriteria}
  134 |             </p>
  135 |             <p>
  136 |             <strong>WCAG Level: </strong>
  137 |             ${wcagInfo.level}
  138 |             </p>
  139 |             <p>
  140 |             <strong>Description:</strong>
  141 |             ${v.description}
  142 |             </p>
  143 |             <p>
  144 |             <strong>Expected Result:</strong>
  145 |             ${v.help}.
  146 |             </p>
  147 |             <p>
  148 |             <strong>Help:</strong>
```