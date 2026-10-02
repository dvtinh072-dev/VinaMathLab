const katex = require('katex');
const fs = require('fs');

const content = fs.readFileSync('src/data/grade12Lesson3Data.ts', 'utf8');

// Regex to extract $...$ inline math
const regex = /\$([^\$]+)\$/g;
let match;
let count = 0;
let errors = [];

while ((match = regex.exec(content)) !== null) {
  count++;
  const math = match[1];
  try {
    katex.renderToString(math, { throwOnError: true });
  } catch (err) {
    errors.push({ math, error: err.message });
  }
}

console.log('Audited ' + count + ' KaTeX formulas in Grade 12 Lesson 3.');
if (errors.length > 0) {
  console.log('KaTeX Errors found: ' + errors.length);
  errors.slice(0, 10).forEach(e => console.log(e));
  process.exit(1);
} else {
  console.log('100% KaTeX valid! 0 errors.');
  process.exit(0);
}
