import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const file = req.url === '/' ? '/index.html' : req.url!;
  // When compiled, this file lives in `dist`. Static assets built by Vite are
  // output to `dist/public`, so serve files from that directory.
  const filePath = path.join(__dirname, 'public', file);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end('Not Found');
    }
    const ext = path.extname(filePath);
    const type = ext === '.js' ? 'text/javascript' : 'text/html';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
