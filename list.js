const inspector = require('inspector');
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

  //print(tutor,exam)

  /*

  untutor : 9003 4<5   9004 1<5  9005  0<5
  unsession : 903-5 904-2 904-3 904-4 904-5 905-1 905-2 905-3 905-4 905-5
  exam :

  6001|701-2 6001|701-3 6001|701-4 6001|701-5
  6002|701-1 6002|702-1 6002|702-3 6002|702-4 6002|702-5 6002|703-1
  6003|702-2 6003|703-2 6003|703-4 6003|703-5 6003|704-1
  7001|601-2 7001|601-3 7001|602-2
  7002|601-1 7002|602-1 7002|602-3 7002|603-1 7002|603-3 7002|604-1 7002|604-3
  7003|603-2 7003|604-2 7003|605-1 7003|605-2 7003|801-1
  7004|605-3 7004|801-2 7004|801-3 7004|801-5 7004|802-1
  7005|801-4 7005|802-2 7005|802-3 7005|802-4 7005|803-1
  8001|703-3 8001|704-2 8001|704-3 8001|704-4
  8002|704-5 8002|705-1 8002|705-3 8002|705-4 8002|705-5 8002|901-1
  8003|705-2 8003|901-2 8003|901-4 8003|901-5 8003|902-1
  8004|901-3 8004|902-2 8004|902-3 8004|902-5 8004|903-1
  8005|902-4 8005|903-2 8005|903-3 8005|903-4 8005|904-1
  9001|802-5 9001|803-2 9001|803-3 9001|803-4
  9002|803-5 9002|804-1 9002|804-3 9002|804-4 9002|804-5 9002|805-1
  9003|804-2 9003|805-2 9003|805-4 9003|805-5
  9004|805-3

  6001|701-3 6001|701-4 6001|701-5 6001|903-5
  6002|701-1 6002|702-1 6002|702-3 6002|702-4 6002|702-5 6002|703-1
  6003|702-2 6003|703-2 6003|703-4 6003|703-5 6003|704-1
  7001|601-2 7001|601-3 7001|602-2
  7002|601-1 7002|602-1 7002|602-3 7002|603-1 7002|603-3 7002|604-1 7002|604-3
  7003|603-2 7003|604-2 7003|605-1 7003|605-2 7003|801-1
  7004|605-3 7004|801-2 7004|801-3 7004|801-5 7004|802-1
  7005|801-4 7005|802-2 7005|802-3 7005|802-4 7005|803-1
  8001|703-3 8001|704-2 8001|704-3 8001|704-4
  8002|704-5 8002|705-1 8002|705-3 8002|705-4 8002|705-5 8002|901-1
  8003|705-2 8003|901-2 8003|901-4 8003|901-5 8003|902-1
  8004|901-3 8004|902-2 8004|902-3 8004|902-5 8004|903-1
  8005|902-4 8005|903-2 8005|903-3 8005|903-4 8005|904-1
  9001|802-5 9001|803-2 9001|803-3 9001|803-4
  9002|803-5 9002|804-1 9002|804-3 9002|804-4 9002|804-5 9002|805-1
  9003|804-2 9003|805-2 9003|805-4 9003|805-5 9003|701-2
  9004|805-3


  6001|701-2 --> 6001|903-5 9004|701-2



  */
  let k = 0, flag = false;

  for(let unt of untutor){

    for(let uns of unsession){
      let temp = false;

      let cp = exam[k].split('|');
      let edt = cp[0],eds = cp[1];//had exam

      //console.log(unt, uns)
      // console.log(tutor[unt].count < tutor[unt].limit)
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
              //unsession.shift()
              exam.push( unt + '|'+ eds );
              exam.push( edt + '|'+ uns );
              session[uns].valid = false;

              temp = true;

              if(exam.length == se.length){
                flag = true;
                break;
              }

            }
        }
      }

      if(temp){
        k = 0;
      } else {
        k++;
      }

    }

    if(flag){
      break;
    }

  }

  print(tutor,exam)

  //console.log('k ', k);

  return exam;


}

module.exports = seek;
