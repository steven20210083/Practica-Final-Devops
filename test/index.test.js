const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('HTML content', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const h1 = dom.window.document.querySelector('h1');

  expect(h1.textContent).toBe('Saludos Soy Steven Diaz Aquino 2021-0083');
});
