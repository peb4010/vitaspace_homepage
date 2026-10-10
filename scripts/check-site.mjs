import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

const root = resolve('site');
const pages = [
  'index.html',
  'process/index.html',
  'projects/index.html',
  'about/index.html',
  'brands/index.html',
  'contact/index.html'
];

const failures = [];

async function checkPage(page) {
  const pagePath = join(root, page);
  const html = await readFile(pagePath, 'utf8');

  for (const [, href] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      href.startsWith('data:')
    ) {
      continue;
    }

    const target = href.startsWith('/')
      ? join(root, href)
      : join(dirname(pagePath), href);
    const normalizedTarget = target.endsWith('/') ? join(target, 'index.html') : target;

    try {
      await readFile(normalizedTarget);
    } catch {
      failures.push(`${page}: missing ${href}`);
    }
  }
}

for (const page of pages) {
  await checkPage(page);
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Checked ${pages.length} pages. No missing local links or assets.`);
