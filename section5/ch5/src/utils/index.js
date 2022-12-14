export {};

/**
 * 우리가 생각하는 페이지네이션
 *  skip : 생략할 개수
 *  take: 가져올 개수
 *
 * 실제로 프런트에서는
 * 페이지번호 // 가져올 개수...
 * URL :  ~~~/posts?page=1&limit=20
 *  req.query // {  page : 1, limit : 20   }
 * page : 페이지번호
 * limit : 가져올 개수
 * take === limit
 *
 * 만약에
 * page : 1
 * limit : 20
 * -> skip : 0, take : 20
 *
 * page : 2
 * limit : 20
 * -> skip : 20, take : 20
 *
 * skip = (page - 1) * limit;
 */
