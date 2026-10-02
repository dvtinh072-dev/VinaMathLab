const katex = require('katex');
const fs = require('fs');

const content = fs.readFileSync('src/data/grade12Lesson7Data.ts', 'utf8');

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
    errors.push({ math, error: err.message });
  }
}

console.log('Audited ' + count + ' KaTeX formulas in Grade 12 Lesson 7.');
if (errors.length > 0) {
  console.log('KaTeX Errors found: ' + errors.length);
  errors.forEach((e, idx) => console.log(`[#${idx+1}]`, e.math, '===>', e.error));
  process.exit(1);
} else {
  console.log('100% KaTeX valid! 0 errors.');
  process.exit(0);
}
