import http from 'http'
import { config } from './config/config.js'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Synapse API running' }))
})

server.listen(config.port, () => {
  console.log(`Synapse backend running on port ${config.port}`)
})