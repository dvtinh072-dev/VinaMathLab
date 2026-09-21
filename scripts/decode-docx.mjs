import fs from 'fs';
import zlib from 'zlib';

function extractDocument(docxPath) {
  const buf = fs.readFileSync(docxPath);
  let offset = 0;
  const oles = {};
  let xml = '';
  const rels = {};
  while (offset < buf.length - 4) {
    if (buf.readUInt32LE(offset) === 0x04034b50) {
      const fileNameLen = buf.readUInt16LE(offset + 26);
      const extraLen = buf.readUInt16LE(offset + 28);
      const compMethod = buf.readUInt16LE(offset + 8);
      const compSize = buf.readUInt32LE(offset + 18);
      const fileName = buf.toString('utf8', offset + 30, offset + 30 + fileNameLen);
      const dataStart = offset + 30 + fileNameLen + extraLen;
      if (fileName === 'word/document.xml') {
        const compData = buf.subarray(dataStart, dataStart + compSize);
        xml = compMethod === 8 ? zlib.inflateRawSync(compData).toString('utf8') : compData.toString('utf8');
      } else if (fileName === 'word/_rels/document.xml.rels') {
        const compData = buf.subarray(dataStart, dataStart + compSize);
        const relXml = compMethod === 8 ? zlib.inflateRawSync(compData).toString('utf8') : compData.toString('utf8');
        const matches = relXml.matchAll(/Id="([^"]+)"[^>]*Target="([^"]+)"/g);
        for (const m of matches) rels[m[1]] = m[2];
      } else if (fileName.startsWith('word/embeddings/')) {
        const compData = buf.subarray(dataStart, dataStart + compSize);
        const bin = compMethod === 8 ? zlib.inflateRawSync(compData) : compData;
        const baseName = fileName.replace('word/embeddings/', '');
        oles[baseName] = bin;
      }
      offset = dataStart + compSize;
    } else {
      offset++;
    }
  }
  return { xml, oles, rels };
}

function parseMtef(bin) {
  let mtefIdx = -1;
  for (let i = 0; i < bin.length - 5; i++) {
    if (bin[i] === 0x05 && bin[i+1] === 0x01 && bin[i+2] === 0x00) {
      mtefIdx = i;
      break;
    }
  }
  if (mtefIdx === -1) return '';
  const fonts = ['Times New Roman', 'Symbol', 'Courier New', 'MT Extra'];
  let pos = mtefIdx + 5;
  for (const f of fonts) {
    const idx = bin.indexOf(f, pos);
    if (idx !== -1 && idx > pos) pos = idx + f.length;
  }
  while (pos < bin.length && bin[pos] !== 1) pos++;

  function parseLine() {
    let text = '';
    while (pos < bin.length) {
      const tag = bin[pos++];
      if (tag === 0) break;
      if (tag === 1) {
        const opt = bin[pos++];
        text += parseLine();
      } else if (tag === 2) {
        const opt = bin[pos++];
        const ch = bin[pos++];
        if (ch >= 32 && ch <= 126) text += String.fromCharCode(ch);
        else text += '[' + ch.toString(16) + ']';
      } else if (tag === 3) {
        const opt = bin[pos++];
        const ch = bin.readUInt16LE(pos); pos += 2;
        if (ch >= 32 && ch <= 126) text += String.fromCharCode(ch);
        else if (ch === 0xee || ch === 0x22ee) text += ' \\vdots ';
        else if (ch === 0xce || ch === 0x2208) text += ' \\in ';
        else if (ch === 0xcf || ch === 0x2209) text += ' \\notin ';
        else if (ch === 0x2264 || ch === 0xa3) text += ' \\le ';
        else if (ch === 0x2265 || ch === 0xb3) text += ' \\ge ';
        else if (ch === 0xd7) text += ' \\times ';
        else if (ch === 0xb7) text += ' \\cdot ';
        else text += '[' + ch.toString(16) + ']';
      } else if (tag === 4) {
        const opt = bin[pos++];
        const tmplNum = bin[pos++];
        const variation = bin.readUInt16LE(pos); pos += 2;
        const inner = parseLine();
        if (tmplNum === 1) text += '(' + inner + ')';
        else if (tmplNum === 3) text += '{' + inner + '}';
        else if (tmplNum === 7) text += '^{' + inner + '}';
        else if (tmplNum === 8) text += '_{' + inner + '}';
        else text += inner;
      } else {
        // unknown
      }
    }
    return text;
  }
  return parseLine();
}

const docxPath = process.argv[2] || 'E:/Anti/Tài Liệu Lớp 6/TRẮC NGHIỆM TOÁN 6 BA BỘ SÁCH WORD/CHUONG 2/TN6 CII Bai 12 Boi chung Boi chung nho nhat.docx';
const { xml, oles, rels } = extractDocument(docxPath);

let docXml = xml.replace(/<w:object[^>]*>.*?<o:OLEObject[^>]*r:id="([^"]+)".*?<\/w:object>/gs, (match, rId) => {
  const target = rels[rId];
  if (target) {
    const base = target.replace(/^.*[\/\\]/, '');
    if (oles[base]) {
      const decoded = parseMtef(oles[base]);
      return '<w:t> $' + decoded.trim() + '$ </w:t>';
    }
  }
  return '';
});

const pMatches = docXml.match(/<w:p[\s>].*?<\/w:p>/gs) || [];
const lines = [];
for (const p of pMatches) {
  const tMatches = p.match(/<w:t[^>]*>(.*?)<\/w:t>/gs) || [];
  const text = tMatches.map(t => t.replace(/<[^>]+>/g, '')).join('');
  if (text.trim()) lines.push(text.trim());
}
fs.writeFileSync('decoded_bai12_doc.txt', lines.join('\n'), 'utf8');
console.log('Done! Wrote ' + lines.length + ' lines.');
