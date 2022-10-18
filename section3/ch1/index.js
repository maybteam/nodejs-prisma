import * as http from "http";

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("NodeJS");
  } else {
    response.statusCode(404);
    response.end("Not Found");
  }
});

server.listen(8000);
