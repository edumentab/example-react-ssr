const template = opts => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Lego Castle!</title>
      <link rel="icon" href="data:;base64,iVBORw0KGgo=">
      <link rel="stylesheet" href="/assets/main.css">
    </head>
    <body>
      <div id="root">${opts.body || ''}</div>
    </body>
    <script>
      window.__initialState = ${opts.initialState || '{}'};
    </script>
    <script src='/assets/client.bundle.js'></script>
  </html>
`;

module.exports = template;
