const index = (helmet = {}, appHtml = '', initialState = {}) => (
`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${ helmet.title.toString() }
    
    <style>html, body { background: #f6f6f6; } section { border-bottom: 1px solid #ccc; border-top: 1px solid #ccc; margin: 15px 0px }</style>
</head>
<body>
    <main id="app">${ appHtml }</main>
    
    <script>
        window.__INITIAL_STATE__ = ${ JSON.stringify(initialState) }
    </script>
    
    <script type="text/javascript" src="/js/bundle.js"></script>
</body>
</html>`
)

export default index