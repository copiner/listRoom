
let seek = require("./seek");

//90
let g6 = require("./db/g6"),
    g7 = require("./db/g7"),
    g8 = require("./db/g8"),
    g9 = require("./db/g9");

//18
let t6 = require("./db/t6"),
    t7 = require("./db/t7"),
    t8 = require("./db/t8"),
    t9 = require("./db/t9");

let session = [...g6, ...g7, ...g8, ...g9];
let tutor = [...t6, ...t7, ...t8, ...t9];


let exam = seek(tutor, session);

console.log(exam.length);
console.log(...exam);
