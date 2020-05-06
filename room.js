let { tutor,room,course } = require("./db");
let CON = require("./config");

let temp = JSON.stringify(tutor);//deepcopy
let session = [];

for(let i=0; i<room.length; i++){
    for(let j=0; j<course.length;j++){
        session.push(room[i]+course[j]);
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

    while(tutor.length > 0 && session.length > 0 && c < 20){
      c++;

      for(i=0; i<tutor.length; i++){

        for(j=0; j<session.length;j++){

          if(tutor[i] && tutor[i].count < tutor[i].limit){

            if(tutor[i].grade != session[j][0]){

                if(
                    tutor[i].supOut.indexOf(session[j].substring(session[j].length-2)) == '-1'
                    && tutor[i].subOut.indexOf(session[j]) == '-1'

                  ){
                    tutor[i].count += 1;
                    result.push( tutor[i].id +' --> '+ session[j]);
                    session.splice(j,1);
                    j = j>0 ? j-- : 0;
                }

            }

          } else {
              tutor.splice(i,1);
              i = i>0 ? i-- : 0;
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

console.log(...tutor);

//console.log(...tutor)
console.log(...session);
