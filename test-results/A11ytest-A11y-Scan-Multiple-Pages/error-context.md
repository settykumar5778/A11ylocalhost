# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: A11ytest\A11y.spec.js >> Scan Multiple Pages
- Location: A11ytest\A11y.spec.js:35:1

# Error details

```
Error: frame.evaluate: Execution context was destroyed, most likely because of a navigation
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - heading "Senior Accessibility Engineer" [level=1] [ref=f1e2]
  - heading "Kumar Setty" [level=2] [ref=f1e3]
  - heading "Nancy" [level=2] [ref=f1e4]
  - paragraph [ref=f1e5]: Hi, me and nancy collaborating for project related queries
  - button "Cancel" [ref=f1e6]
  - link "Google" [ref=f1e7] [cursor=pointer]:
    - /url: https:google.com
  - text: Company logo
  - list [ref=f1e9]:
    - listitem [ref=f1e10]: Nancy
    - listitem [ref=f1e11]: Setty
  - heading "Sample registration form" [level=1] [ref=f1e12]
  - text: "Full name* :"
  - textbox "Full name* :" [ref=f1e13]:
    - /placeholder: Enter your full name
  - text: "Email* :"
  - textbox "Email* :" [ref=f1e14]:
    - /placeholder: Enter your email
  - text: "Password* :"
  - 'textbox "Password* : Password" [ref=f1e15]':
    - /placeholder: Enter your Password
  - text: Country*
  - combobox "Country*" [ref=f1e16]:
    - option "India" [selected]
    - option "Pakistan"
    - option "Sri Lanka"
  - paragraph [ref=f1e17]: "Skills :"
  - checkbox "Java" [ref=f1e18]
  - text: Java
  - checkbox "HTML" [ref=f1e19]
  - text: HTML
  - checkbox "Python" [ref=f1e20]
  - text: Python
  - paragraph [ref=f1e21]: "Gender* :"
  - radio "Male" [ref=f1e22]
  - text: Male
  - radio "Female" [ref=f1e23]
  - text: Female
  - radio "Others" [ref=f1e24]
  - text: "Others Self Introduction* :"
  - textbox "Self Introduction* :" [ref=f1e25]:
    - /placeholder: Please provide you introduction
  - text: "Username*:"
  - textbox "Username*:" [ref=f1e26]
  - paragraph [ref=f1e27]: Minimum 6 characters.
  - text: Password
  - textbox [ref=f1e28]
  - paragraph [ref=f1e29]: "Must contain: - 8 characters - One uppercase letter - One number"
  - button "Submit" [ref=f1e30]
  - heading "Registration form" [level=1] [ref=f1e31]
  - text: "Full Name*:"
  - textbox "Full Name*:" [ref=f1e32]:
    - /placeholder: Enter Full name
  - text: "Email1*:"
  - textbox "Email1*:" [ref=f1e33]:
    - /placeholder: Enter Email1 address
  - paragraph [ref=f1e34]: Email1 address should be in the format xxx@gmail.com.
  - button "Search 🔍" [ref=f1e35]
  - button "🔍 Search" [ref=f1e36]
  - button "Click Me" [ref=f1e37]
  - paragraph [ref=f1e38]:
    - text: Hi everyone this page is practice purpose only
    - link "test" [ref=f1e39] [cursor=pointer]:
      - /url: https:apple.com
  - button "Testing" [ref=f1e40]
  - strong [ref=f1e41]: "Feedback:"
  - paragraph [ref=f1e42]: Please provide your feedback
  - textbox "Enter your email" [ref=f1e43]
  - textbox "provide your feedback" [ref=f1e44]
  - button "Submit" [ref=f1e45]
```

# Test source

```ts
  1   | const { test } = require('@playwright/test');
  2   | const AxeBuilder = require('@axe-core/playwright').default;
  3   | const fs = require ('fs');
  4   | const reportId = `A11y-${Date.now()}`;
  5   | const applicationName = 'Kumar local';
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
  36  |     const pages = ['http://127.0.0.1:5501/index.html',
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
  48  |         await page.goto(url);
  49  |         const filename = 
  50  |         url.replace(/https?:\/\//, "")
  51  |         .replace(/[\/:\.?&=]/g, "_");
  52  | 
  53  |         await page.screenshot({
  54  |             path: `screenshots/${filename}.png`,
  55  |             fullPage: true
  56  |         });
  57  |         const results =
> 58  |         await new AxeBuilder({page}).analyze();
      |         ^ Error: frame.evaluate: Execution context was destroyed, most likely because of a navigation
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
  78  |         for (const violation of results.violations) {
  79  | 
  80  |             for (let i = 0; i < violation.nodes.length; i++) {
  81  |                
  82  |                 try {
  83  | 
  84  |                     const selector = violation.nodes[i].target[0];
  85  | 
  86  |                     const locator = page.locator(selector);
  87  | 
  88  |                     await locator.evaluate(element => {
  89  |                         element.style.border = '5px solid red';
  90  | 
  91  |                         element.style.backgroundColor = 'yellow';
  92  |                     });
  93  |                     
  94  |                     await locator.screenshot({
  95  |                         path:
  96  |                         `screenshots/issues/${violation.id}-${i+1}-element.png`,
  97  |                     });
  98  |                 }
  99  |                 catch (error) {
  100 | 
  101 |                     console.log(`Unable to capture screenshot for ${violation.id}`);
  102 |                 }
  103 |             }
  104 |         }
  105 | 
  106 |         allResults.push({
  107 |             page: url,
  108 |             violationCount: results.violations.length,
  109 |             violations: results.violations
  110 |         });
  111 |     }
  112 | fs.writeFileSync(
  113 |     'multi-page-report.json',
  114 |     JSON.stringify(allResults, null, 2)
  115 | );
  116 | let htmlContent = `
  117 | <html>
  118 | <head>
  119 | <title>A11y Reports</title>
  120 | </head>
  121 | <body>
  122 | <h1>Accessibility Report</h1>
  123 | `;
  124 | 
  125 | allResults.forEach(result => {
  126 | 
  127 |     htmlContent += `
  128 |     <h2>Page: ${result.page}</h2>
  129 |     <p>
  130 |        <strong>Total Violations: </strong>
  131 |          ${result.violationsCount}
  132 |     </p>
  133 | 
  134 |     <p><strong>Page Status:</strong>
  135 |        ${
  136 |         result.violationsCount > 0
  137 |         ? 'FAILED'
  138 |         : 'PASSED'
  139 |        }
  140 |     </p>   
  141 | 
  142 |     `;
  143 | 
  144 |     if (result.violationsCount === 0) {
  145 |         htmlContent += `
  146 |         <p>No Accessibility Violations Found</p>
  147 |         `;
  148 |     } 
  149 |     else {
  150 |         result.violations.forEach((v, index) => {
  151 |             const wcagInfo = getWcagInfo(v.tags);
  152 |             htmlContent += `
  153 |             <h3>Issue ${index +1} - ${v.id}</h3>
  154 |             <p>
  155 |             <strong>Impact: </strong>
  156 |             ${v.impact}
  157 |             </p>
  158 |             <p>
```