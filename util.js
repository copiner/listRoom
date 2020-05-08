exports.print = function(tutor,exam){

  let tu = Object.keys(tutor);

  // console.log(tu);
  //console.log(exam);

  let temp = {};

  for(let t of tu){
    temp[t] = [];
  }

  for(let i = 0; i<exam.length;i++){

    for(let t of tu){
      if( exam[i].split('|')[0] == t ){
        temp[t].push(exam[i]);
      }
    }

  }

  //console.log(temp)

  for(let k in temp){
    console.log(...temp[k])
  }

  // for(let t of tu){
  //   console.log(...temp[t])
  // }


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

let obj = {
   [Symbol('name')]: 'me',
   age: 18,
   title: 'Engineer'
}

// Object.keys(obj)   // ['age', 'title']
//
// for (let p in obj) {
//    console.log(p)   // 'age' 和 'title'
// }
//
// Object.getOwnPropertyNames(obj)   // ['age', 'title']

// for(let i in tutor){
//   tutor[i]
// }
//
// for(let v of tutor){
//   if(v.grade != )
// }
// symbol('001')
