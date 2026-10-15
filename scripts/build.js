// Junta index.html, css e js num único arquivo: dist/plantao-pleural.html
// Esse arquivo único é o que se publica como artifact ou se manda para alguém abrir direto.
// Uso: npm run build
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta charset[^>]*>\s*/, '')
  .replace(/<meta name="viewport"[^>]*>\s*/, '')
  .replace(/<link rel="stylesheet" href="css\/style.css">\s*/, '')
  .trim();
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1];
const scripts = [...body.matchAll(/<script src="([^"]+)"><\/script>/g)].map(m => m[1]);
const markup = body.replace(/<script src="[^"]+"><\/script>\s*/g, '').trim();

const css = fs.readFileSync(path.join(root, 'css/style.css'), 'utf8');
const js = scripts.map(s => `// ---- ${s} ----\n` + fs.readFileSync(path.join(root, s), 'utf8')).join('\n');

const out = `${head}\n<style>\n${css}</style>\n\n${markup}\n\n<script>\n${js}</script>\n`;
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/plantao-pleural.html'), out);
console.log(`dist/plantao-pleural.html gerado (${(out.length / 1024).toFixed(0)} KB, ${scripts.length} scripts)`);
