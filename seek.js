let { print, shuffle } = require("./util");

function seek(tutor, session){

  let exam = [];

  let k = 0;

  while(true){
    k++;
    if(exam.length < session.length){
      exam = list(tutor, session);
      session = shuffle(session);
    } else {
      break;
    }
  }

  console.log(k)
  return exam;
}

function list(tutor, session){

  let tol = 0;
  for(let i=0; i<tutor.length; i++){
      if(tutor[i].status){
        tol += tutor[i].limit;
      }
  }

  if(tol !== session.length){
      console.log("not equal...");
      return [];
  }

  for(let i=0; i<session.length;i++){
      session[i].valid = true;
  }
  //console.log(...session);

  for(let i=0; i<tutor.length; i++){
      tutor[i].count = 0;
  }
  //console.log(...tutor);

  let exam = [];
  let i = 0, j = 0;

  for(i=0; i<tutor.length; i++){

    for(j=0; j<session.length;j++){

      if(tutor[i].count < tutor[i].limit && session[j].valid){

        if( tutor[i].grade != session[j].grade ){

            if(
                tutor[i].supOut.indexOf(session[j].course) == '-1'
                && tutor[i].subOut.indexOf(session[j].name + session[j].course) == '-1'

              ){
                tutor[i].count += 1;
                exam.push(tutor[i].grade + tutor[i].id +'-->'+ session[j].name + session[j].course );
                session[j].valid = false;
              }

        }

      }

    }

  }

  return exam;

}

module.exports = seek;
