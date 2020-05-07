let { print, shuffle } = require("./util");
let list = require("./list");

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


let exam = [], k = 0;

while(k<3){
  k++;
  if(exam.length < session.length){
    exam = list(tutor, session);
    session = shuffle(session);
  }
}



console.log(exam.length)
// console.log(...exam)
print(tutor,session,exam);

// console.log(...tutor);
//
// console.log(...session);
