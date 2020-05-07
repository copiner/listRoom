exports.print = function(tutor,session,exam){

  let eo = {};

  for(let i = 0; i<tutor.length;i++){
    if(tutor[i].count<tutor[i].limit){
      console.log(tutor[i]);//uncomplete tutor
    }
    eo[tutor[i].grade+tutor[i].id] = [];
  }


  for(let i = 0; i<session.length;i++){
    if(session[i].valid){
      console.log(session[i]);//uncomplete exam
    }
  }

  for(let i = 0; i<exam.length;i++){

    for(let j in eo){
      if( exam[i].substring(0,4)== j ){
        eo[j].push(exam[i]);
      }
    }

  }

  for(let i in eo){
    console.log(...eo[i]);
  }

}


exports.shuffle = function(arr) {
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




let temp = JSON.stringify('1');//deepcopy

// for(let v of tu){}
