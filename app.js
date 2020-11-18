const http = require('http')
const { listenerCount } = require('process')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    console.log('Servidor rodando corretamente')
    res.end('Servidor funcionando novamente! De um jeitinho mais correto')
}).listen(3030, 'localhost')