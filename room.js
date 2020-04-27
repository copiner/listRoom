let { tutor,room,course } = require("./db");

let session = [];

for(let i=0; i<room.length; i++){
    for(let j=0; j<course.length;j++){
        session.push(room[i]+course[j]);
    }
}

//console.log(...session);

function listRoom(tutor, session){
    let tol = 0;
    for(let i=0; i<tutor.length; i++){
        tol += tutor.limit;
    }

    if(tol === session.length){
        
        console.log("not equal");
        return;
        
    }

    for(let i=0; i<tutor.length; i++){
        tutor[i].count = 0;
    }
//    console.log(...tutor);
    
    let result = [];
    let i = 0;

    while(tutor.length > 0 &&  session.length > 0){

    for(let i=0; i<tutor.length; i++){

        for(let j=0; j<session.length;j++){

        if(tutor[i].count < 5){
            
                if(tutor[i].grade != session[j][0]){
                
                    if(tutor[i].course != session[j].substring(3)){
                        tutor[i].count += 1;
                        result.push(session[j] + tutor[i].id);
                        session.splice(j,1);
                        j = j>0 ? j-- : 0;
                    }
                }
          

        } else {
            tutor.splice(i,1);
            i = i>0 ? i-- : 0;
            //i = 0;
        }

      }
   
    }

    }
    
    return result;
        
}

let list = listRoom(tutor, session);

console.log(list.length);

console.log(...list);

//console.log(...tutor)
console.log(...session);
