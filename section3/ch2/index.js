import * as http from "http";
import * as url from "url";
let users = [];

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("NodeJS");
  } else if (request.url.startsWith("/users")) {
    // 유저 목록 불러오기
    if (request.method === "GET") {
      response.end(JSON.stringify(users));
    }
    // 유저 생성
    else if (request.method === "POST") {
      let body = "";
      request.on("data", (data) => {
        body += data;
      });
      request.on("end", () => {
        // request body json (object)로 변환
        const { name, age } = JSON.parse(body);
        // id 생성 - id 는 고유해야 하므로 현재 시간 사용
        const id = Date.now();

        // 유저 생성
        users.push({
          id,
          name,
          age,
        });

        //현재 유저 기록
        console.log("현재 유저", users);

        // response
        // created의 경우 201 사용
        response.writeHead(201, {
          "Content-Type": "text/plain; charset=utf-8",
        });
        response.end("유저 등록 성공");
      });
    }
    // 유저 수정
    else if (request.method === "PATCH") {
      let body = "";
      request.on("data", (data) => {
        body += data;
      });

      //쿼리 파싱
      // 쿼리 : /users?id=1 에서 ? 뒤의 값
      const query = url.parse(request.url, true).query;

      request.on("end", () => {
        // response body json (object)로 변환
        const { name, age } = JSON.parse(body);

        // id로 유저 찾기
        const { id } = query;

        users.forEach((user, index) => {
          if (user.id === Number(id)) {
            // id가 일치 === 수정할 유저
            // 유저 정보 수정
            users[index] = {
              id: user.id,
              name,
              age,
            };
          }
        });

        // 현재 유저 기록
        console.log("현재 유저", users);

        // 수정/삭제의 경우 NO-CONTENT를 의미하는 204 사용
        response.writeHead(204, {
          "Content-Type": "text/plain; charset=utf-8",
        });
        response.end();
      });
    }
    // 유저 삭제하기
    else if (request.method === "DELETE") {
      //쿼리 파싱
      const query = url.parse(request.url, true).query;
      const { id } = JSON.parse(query);

      // id로 유저 찾기
      // filter => 조건에 맞는 요소만 남기고 제거
      users = users.filter((user) => user.id !== Number(id));

      console.log("현재 유저", users);
      response.writeHead(204, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      response.end();
    }
  }
  // url 이 / 또는 /users 가 아닌 경우
  else {
    response.writeHead(404);
    response.end("Not Found");
  }
});

server.listen(8000);
