const katex = require('katex');
const fs = require('fs');

const files = [
  'src/data/grade6/chapter5/lesson21.ts',
  'src/data/grade6/chapter5/chapter5AiPractice.ts'
];

let totalCount = 0;
let totalErrors = [];

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const regex = /\$([^\$]+)\$/g;
  let match;
  let count = 0;
  let errors = [];

  while ((match = regex.exec(content)) !== null) {
    count++;
    const math = match[1];
    try {
      katex.renderToString(math, { throwOnError: true, strict: 'error' });
    } catch (err) {
      errors.push({ file: f, math, error: err.message });
    }
  }

  console.log(`Audited ${count} KaTeX formulas in ${f}.`);
  totalCount += count;
  totalErrors = totalErrors.concat(errors);
}

console.log(`Total audited: ${totalCount} KaTeX expressions.`);
if (totalErrors.length > 0) {
  console.log('KaTeX Errors found: ' + totalErrors.length);
  totalErrors.forEach((e, idx) => console.log(`[#${idx+1} in ${e.file}]`, e.math, '===>', e.error));
  process.exit(1);
} else {
  console.log('100% KaTeX valid! 0 errors.');
  process.exit(0);
}
