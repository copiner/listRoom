let { tutor,room,course } = require("./db");
let CON = require("./config");

let temp = JSON.stringify(tutor);//deepcopy
let session = [];

for(let i=0; i<room.length; i++){
    for(let j=0; j<course.length;j++){
        session.push({
          exam:room[i]+course[j],
          grade:room[i][0],
          course:course[j],
          valid:true
        });
    }
}

function shuffle(arr) {
  if(!Array.isArray(arr) && arr.length) {
    return []
  }
  const _arr = []
  for(let i = arr.length; i > 0; i --) {
    const idx = Math.floor(Math.random() * i)
    _arr.push(arr[idx])
    arr.splice(idx, 1)
  }
  return _arr;
}
//console.log(...session);

function listRoom(tutor, session){
    let tol = 0;
    for(let i=0; i<tutor.length; i++){
        if(tutor[i].status){
          tol += tutor[i].limit;
        }
    }

    if(tol !== session.length){

        console.log("not equal...");
        return;

    }

    for(let i=0; i<tutor.length; i++){
        tutor[i].count = 0;
    }
    //console.log(...tutor);

    let result = [];
    let i = 0, j = 0, c = 0;

    while(c < 30){
      //console.log(tutor.length, session.length)
      c++;

      for(i=0; i<tutor.length; i++){

        for(j=0; j<session.length;j++){

            if(tutor[i].count < tutor[i].limit){

              if( tutor[i].grade != session[j].grade ){

                  if(
                      tutor[i].supOut.indexOf(session[j].course) == '-1'
                      && tutor[i].subOut.indexOf(session[j].exam) == '-1'

                    ){
                      tutor[i].count += 1;
                      result.push( tutor[i].id +' --> '+ session[j].exam );
                      session[j].valid = false;
                    }

              }

        }

      }


    }

   }

    return result;

}

let list = listRoom(tutor, session);

let tu = {
  '001':[],
  '002':[],
  '003':[],
  '004':[],
  '005':[],
  '006':[],
  '007':[],
  '008':[],
  '009':[],
  '010':[]
}

// for(let v of tu){}

if(list){
  console.log(list.length);
  //console.log(...list);

  for(let i = 0; i<list.length;i++){

    for(let j in tu){
      if( list[i].substring(0,3)== j ){
        tu[j].push(list[i]);
      }
    }

  }

  for(let i in tu){
    console.log(...tu[i]);
  }


}

//console.log(...tutor);

//console.log(session.length)
console.log(...session);
