import * as http from "http";
import * as url from "url";
let users = [];

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("NodeJS");
  } else if (request.url.startsWith("/users")) {
    if (request.method === "GET") {
      response.end(JSON.stringify(users));
    } else if (request.method === "POST") {
      let body = "";
      request.on("data", (data) => {
        body += data;
      });
      request.on("end", () => {
        const { name, age } = JSON.parse(body);
        const id = Date.now();
        users.push({
          id,
          name,
          age,
        });
        console.log("현재 유저", users);
        response.writeHead(201, {
          "Content-Type": "text/plain; charset=utf-8",
        });
        response.end("사용자 등록 성공");
      });
    } else if (request.method === "PATCH") {
      let body = "";
      request.on("data", (data) => {
        body += data;
      });
      const query = url.parse(request.url, true).query;

      request.on("end", () => {
        const { name, age } = JSON.parse(body);
        console.log({ query });
        const { id } = query;

        users.forEach((user, index) => {
          if (user.id === Number(id)) {
            users[index] = {
              id: user.id,
              name,
              age,
            };
          }
        });
        console.log("현재 유저", users);
        response.writeHead(204, {
          "Content-Type": "text/plain; charset=utf-8",
        });
        response.end();
      });
    } else if (request.method === "DELETE") {
      const query = url.parse(request.url, true).query;
      const { id } = JSON.parse(query);

      users = users.filter((user) => user.id !== Number(id));
      console.log("현재 유저", users);
      response.writeHead(204, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end();
    }
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});

server.listen(8000);
