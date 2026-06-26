import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = `file://${path.join(__dirname, 'business-card.html')}`;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// 3x scale → 1050×600px (print-quality for 3.5"×2" @ 300dpi)
await page.setViewport({ width: 1200, height: 900, deviceScaleFactor: 3 });
await page.goto(file, { waitUntil: 'networkidle0' });

const cards = await page.$$('.card');

await cards[0].screenshot({ path: path.join(__dirname, 'business-card-front.png'), omitBackground: false });
console.log('✓ business-card-front.png');

await cards[1].screenshot({ path: path.join(__dirname, 'business-card-back.png'), omitBackground: false });
console.log('✓ business-card-back.png');

await browser.close();
