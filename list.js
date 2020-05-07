

function seek(tutor, session){

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

  let exam = list(tutor, session);

  swap(tutor, session, exam)
  // let k = 0;
  //
  // while(true){
  //   k++;
  //   if(exam.length < session.length){
  //
  //   } else {
  //     break;
  //   }
  // }


}

function list(tutor, session){

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
                  exam.push(tutor[i].grade + tutor[i].id +'|'+ session[j].name + session[j].course );
                  session[j].valid = false;
                }

          }

        }

      }

    }

    return exam;

}

function swap(tutor, session, exam){

  let untutor = [],unsession = [];

  for(let i = 0; i<tutor.length;i++){

    if(tutor[i].count<tutor[i].limit){
      untutor.push(tutor[i]);//uncomplete tutor
    }

  }

  for(let j = 0; j<session.length;j++){
    if(session[j].valid){
      unsession.push(session[j]);//uncomplete exam
    } else {

    }
  }

  for(let i=0; i<exam.length;i++){

    for(let j = 0; j<unsession.length;j++){
      let couple = exam[i].split('|');
      if(tutor[couple[0]].grade != unsession[j].grade){

      }
    }

  }
  console.log(unsession.length,exam.length)
  console.log(...untutor)
  console.log(...unsession)
  console.log(...exam)
}

module.exports = seek;
