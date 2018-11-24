const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const mobxReact = require('mobx-react');
const routes = require('./src/routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev, dir: './src/' });
const handle = routes.getRequestHandler(app);

mobxReact.useStaticRendering(true);

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
