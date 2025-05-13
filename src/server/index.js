import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../client/App.jsx';
import { routes } from '../shared/routes.js';

const app = express();
const template = fs.readFileSync(path.resolve('server/template.html'), 'utf-8');
const PORT = 5173;

app.use('/assets', express.static(path.resolve('dist/assets')));

app.get('*', (req, res) => {
  const matchedRoute = routes.find(route => req.path.match(new RegExp(`^${route.path.replace(/:\w+/g, '[^/]+')}$`)));
  
  let meta = {};
  if (matchedRoute && matchedRoute.getMeta) {
    const params = Object.fromEntries(
      matchedRoute.path
        .split('/')
        .map((p, i) => (p.startsWith(':') ? [p.slice(1), req.path.split('/')[i]] : null))
        .filter(Boolean)
    );
    meta = matchedRoute.getMeta(params);
  }

  const metaTags = Object.entries(meta)
    .map(([key, content]) => {
      const attr = key.startsWith('og:') || key.startsWith('twitter:') ? 'property' : 'name';
      return `<meta ${attr}="${key}" content="${content}"/>`;
    })
    .join('\n');

  const appHtml = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const html = template
    .replace('<!--meta-tags-->', metaTags)
    .replace('<!--app-html-->', appHtml);

  res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
