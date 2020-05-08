let { print, shuffle } = require("./util");
//Object.keys()
//Object.getOwnPropertyNames()
//for..of
//for..in

function seek(tutor, session){

  let tu = Object.keys(tutor),
      se = Object.keys(session);

  let tol = 0;

  for(let v of tu){
    if(tutor[v].status){
      tol += tutor[v].limit;
    }
    tutor[v].count = 0;
  }

  for(let v of se){
    session[v].valid = true;
  }

  if(tol !== se.length){
      console.log("not equal...");
      return ;
  }

  // console.log(session);
  // console.log(tutor);

  let exam = list(tu, se, tutor, session);
  // console.log(exam.length)
  // console.log(...exam)
  exam = swap(tu, se, tutor, session, exam)

  return exam;

}

function list(tu, se, tutor, session){

    let exam = [];

    for(let t of tu){
      for(let s of se){
          if(tutor[t].count < tutor[t].limit && session[s].valid){
            if( tutor[t].grade != session[s].grade ){
              if(
                  tutor[t].supOut.indexOf(session[s].course) == '-1'
                  && tutor[t].subOut.indexOf(session[s].name + session[s].course) == '-1'

                ){
                  tutor[t].count += 1;
                  exam.push( t + '|'+ s );
                  session[s].valid = false;
                }
            }
          }
      }
    }

    return exam;

}

function swap(tu, se, tutor, session, exam){

  let untutor = [],unsession = [];

  for(let t of tu){
    if(tutor[t].count<tutor[t].limit){
      untutor.push(t);//uncomplete tutor
    }
  }

  for(let s of se){
    if(session[s].valid){
      unsession.push(s);//uncomplete exam
    }
  }

  // console.log(untutor.length)
  //console.log(...untutor)
  //
  // console.log(unsession.length)
  //console.log(...unsession)
  //
  // console.log(exam.length)

  //print(tutor,exam)

  /*
  untutor : 9003 9004 9005
  unsession : 903-5 904-2 904-3 904-4 904-5 905-1 905-2 905-3 905-4 905-5
  6001|701-2 6001|701-3 6001|701-4 6001|701-5 6002|701-1 ...
  */
  let k = 0;
  while(true){
    k++;
    let cp = exam[k].split('|');
    let edt = cp[0],eds = cp[1];//had exam

    console.log('len ', exam.length);

    if(exam.length == se.length){
      break;
    }

    for(let unt of untutor){
      //console.log(unt)
      for(let uns of unsession){

        console.log(tutor[unt].count, tutor[unt].limit)
        if(tutor[unt].count < tutor[unt].limit && session[uns].valid){
            if(tutor[edt].grade != session[uns].grade && session[eds].grade != tutor[unt].grade){
              if(
                tutor[edt].supOut.indexOf(session[uns].course) == '-1'
                && tutor[edt].subOut.indexOf(session[uns].name + session[uns].course) == '-1'
                && tutor[unt].supOut.indexOf(session[eds].course) == '-1'
                && tutor[unt].subOut.indexOf(session[eds].name + session[eds].course) == '-1'
              ){

                tutor[unt].count += 1;
                exam.splice(k,1);
                exam.push( unt + '|'+ eds );
                exam.push( edt + '|'+ uns );
                session[uns].valid = false;
              }
          }
        }

      }
    }

    // if(k < exam.length){
    //   k++;
    // } else {
    //   break;
    // }

  }

  //print(tutor,exam)

  console.log('k ', k);

  return exam;


}

module.exports = seek;
