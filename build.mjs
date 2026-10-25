import { cpSync, mkdirSync, rmSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
for (const file of ['index.html', 'about.html', 'services.html', 'contact.html', 'styles.css', 'app.js', 'assets']) cpSync(file, `dist/${file}`, { recursive: true });
console.log('Static website built in dist/');
