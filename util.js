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
  if(!Array.isArray(arr)) {
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

function shuffleSwap(arr) {
  if(!Array.isArray(arr)) {
    return []
  }

  if(arr.length == 1) return arr;
  //正向思路
//  for(let i = 0, n = arr.length; i < arr.length - 1; i++, n--) {
//    let j = i + Math.floor(Math.random() * n);
  //逆向思路
  let i = arr.length;
  while(--i > 1) {
    //Math.floor 和 parseInt 和 >>>0 和 ~~ 效果一样都是取整
    let j = Math.floor(Math.random() * (i+1));
    /*
    //原始写法
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    */
    //es6的写法
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffle = (arr) => {
  if(!Array.isArray(arr)) {
    return []
  }

  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
//console.log(shuffle(foo)); // [2,3,1]

let temp = JSON.stringify('1');//deepcopy

// for(let v of tu){}


//补零满足12位
function compt(){
  let arr1 = [1,3,5,7,9,7];
  let arr2 = new Array(12-arr1.length);
  arr2.fill('0')
  arr = [...arr2,...arr1]
  console.log(...arr)
  return arr;
}


function commpt(bits, identifier, value) {
    value = Array(bits + 1).join(identifier) + value;
    return value.slice(-bits);
}
