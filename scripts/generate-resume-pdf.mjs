import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const htmlPath = resolve(rootDir, 'public/resume.html');
const pdfPath = resolve(rootDir, 'public/resume.pdf');

if (!existsSync(htmlPath)) {
  console.error(`Resume HTML not found: ${htmlPath}`);
  process.exit(1);
}

const puppeteer = await import('puppeteer');

const browser = await puppeteer.default.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  const page = await browser.newPage();
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle0' });
  await page.emulateMediaType('print');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '10mm',
      right: '10mm',
      bottom: '10mm',
      left: '10mm',
    },
  });

  console.log(`Generated ${pdfPath}`);
} finally {
  await browser.close();
}
