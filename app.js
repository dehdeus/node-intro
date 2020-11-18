const http = require('http')
const { listenerCount } = require('process')

http.createServer((req, res) => {
    res.end('Servidor funfando!')
}).listen(3030, 'localhost')