import http from "http";
import url from "url";

import User from "./user.js";

const server = http.createServer((request, response) => {
  const users = new User();

  if (request.url === "/") {
    response.end("NodeJS");
  } else if (request.url.startsWith("/users")) {
    // 유저 목록 불러오기
    if (request.method === "GET") {
      response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
      });
      response.write(JSON.stringify({ users: users.getUsers() }));
      response.end();
    }
    // 유저 생성
    else if (request.method === "POST") {
      let body = "";
      request
        .on("data", (data) => {
          console.log({ data });
          body += data;
        })
        .on("end", () => {
          console.log({ body });
          const { name, age, gender } = JSON.parse(body);
          users.createUser({ name, age, gender });

          response.writeHead(201);
          response.end("유저 등록 성공");
        });
    }
    // 유저 수정
    else if (request.method === "PATCH") {
      let body = "";
      request
        .on("data", (data) => {
          body += data;
        })
        .on("end", () => {
          const query = url.parse(request.url, true).query;

          const { id } = query;
          const { name, age, gender } = JSON.parse(body);

          users.updateUser({ id: Number(id), name, age, gender });

          response.writeHead(204);
          response.end("유저 수정 성공");
        });
    }
    // 유저 삭제하기
    else if (request.method === "DELETE") {
      request.on("end", () => {
        const query = url.parse(request.url, true).query;

        const { id } = query;

        users.deleteUser(Number(id));

        response.writeHead(204);
        response.end("유저 삭제 성공");
      });
    }
  }
  // url 이 / 또는 /users 가 아닌 경우
  else {
    response.writeHead(404);
    response.end("Not Found");
  }
});

server.listen(8000);
