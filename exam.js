let { print, shuffle } = require("./util");
let seek = require("./list");

//90
let g6 = require("./db/ga6"),
    g7 = require("./db/ga7"),
    g8 = require("./db/ga8"),
    g9 = require("./db/ga9");

//18
let t6 = require("./db/ta6"),
    t7 = require("./db/ta7"),
    t8 = require("./db/ta8"),
    t9 = require("./db/ta9");

let session = {...g6, ...g7, ...g8, ...g9};
let tutor = {...t6, ...t7, ...t8, ...t9};

let exam = seek(tutor, session);
// print(tutor,exam);

// let exam = [], k = 0;
// while(true){
//   k++;
//   if(exam.length < session.length){
//     exam = list(tutor, session);
//     session = shuffle(session);
//   } else {
//     break;
//   }
// }
//
// console.log(k)

// while(k < 2020){
//   k++;
//   if(exam.length < session.length){
//     exam = list(tutor, session);
//     session = shuffle(session);
//   } else {
//     break;
//   }
// }

//TODO
//标记false以后 , 如果没有排考场完成则在循环，如果有另一个还未有人监考也可以监考，则选择该老师名下已经排的考试改为true，并监考此考场



//console.log(exam.length)
// console.log(...exam)
//print(tutor,session,exam);

// console.log(...tutor);
//
// console.log(...session);
