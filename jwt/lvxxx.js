"use strict";

const crypto = require("crypto");
const JWT = require("jsonwebtoken");

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 4096,
});

console.log(publicKey, privateKey);

const token = JWT.sign({ userId: "123", roles: ["admin"] }, privateKey, {
  algorithm: "RS256",
  expiresIn: "2 days",
});

console.log(`token::`, token);

JWT.verify(token, privateKey, (err, decode) => {
  console.log(`decode::`, decode);
});
