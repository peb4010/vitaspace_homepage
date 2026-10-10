import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';

const root = resolve('site');
const port = Number(process.env.PORT || 8080);
const host = process.env.HOST || '127.0.0.1';

const mimeTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.ico', 'image/x-icon']
]);

function resolveRequestPath(url) {
  const pathname = decodeURIComponent(new URL(url, 'http://localhost').pathname);
  const normalizedPath = normalize(pathname).replace(/^(\.\.[/\\])+/, '');
  const candidate = resolve(join(root, normalizedPath));

  if (candidate !== root && !candidate.startsWith(root + sep)) {
    return null;
  }

  if (existsSync(candidate)) {
    return candidate;
  }

  const indexPath = resolve(join(candidate, 'index.html'));
  if (existsSync(indexPath)) {
    return indexPath;
  }

  return null;
}

const server = createServer(async (request, response) => {
  try {
    const filePath = resolveRequestPath(request.url || '/');

    if (!filePath) {
      response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      response.end('Not found');
      return;
    }

    const fileStat = await stat(filePath);
    const finalPath = fileStat.isDirectory() ? join(filePath, 'index.html') : filePath;
    const contentType = mimeTypes.get(extname(finalPath)) || 'application/octet-stream';

    response.writeHead(200, { 'content-type': contentType });
    createReadStream(finalPath).pipe(response);
  } catch (error) {
    response.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
    response.end(error instanceof Error ? error.message : 'Server error');
  }
});

server.on('error', (error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

server.listen(port, host, () => {
  console.log(`VITASPACE site running at http://localhost:${port}`);
});
