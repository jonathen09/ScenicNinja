const renderFullPage = function(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ScenicNinja</title>
        <link rel="stylesheet" href="./css/app.css" media="screen" title="no title" charset="utf-8" />
        <link rel="stylesheet" href="./css/simple-line-icons.css" media="screen" title="no title" charset="utf-8" />
        <link rel="stylesheet" href="./css/simple-grid.css" media="screen" title="no title" charset="utf-8" />
        <link rel="stylesheet" href="./css/animate.css" media="screen" title="no title" charset="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Signika:700,400,600" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
    `
};

export default renderFullPage;