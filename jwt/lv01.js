"use strict";

const keySecret = "lasdjoijoidjaosdaj";

const JWT = require("jsonwebtoken");

const token = JWT.sign({ userId: "123", roles: ["admin"] }, keySecret, {
  expiresIn: "2 days",
});

console.log(`token::`, token);

JWT.verify(token, keySecret, (err, decode) => {
  console.log(`decode::`, decode);
});
