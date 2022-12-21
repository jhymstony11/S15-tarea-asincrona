const http = require('http')

const hostname = '127.0.0.1'
const port = 4000

const server = http.createServer((request, response) => {
response.statusCode = 200
response.setHeader('Content-Type', 'text/plain')
response.end('jhym stony hualla muñoz')
})

server.listen(port, hostname, () => {
console.log(`El servidor esta funcionando en http://${hostname}:${port}/`)
})