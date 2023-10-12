import http from "node:http";

const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.keepAlive = true;
  res.setHeader('Connection', 'Keep-Alive');

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    message: 'Hello, world!',
  }));
});




 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});