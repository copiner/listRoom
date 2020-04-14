
let tutor =
[{
    id:'001',
    name:'xjx',
    type:'01',
    typeName:'Chinese',
    level:6,
    limit:5,
    status:1,
    supOut:['01'],
    subOut:[],
    other:'nice'
    
},{
    id:'002',
    name:'xjx',
    type:'02',
    typeName:'Math',
    level:6,
    limit:5,
    status:1,
    supOut:['02'],
    subOut:[],
    other:'nice'
    
},{
    id:'003',
    name:'xjx',
    type:'03',
    typeName:'English',
    level:7,
    limit:5,
    status:1,
    supOut:['03'],
    subOut:[],
    other:'nice'
    
},{
    id:'004',
    name:'xjx',
    type:'04',
    typeName:'Science',
    level:7,
    limit:5,
    status:1,
    supOut:['04'],
    subOut:[],
    other:'nice'
    
},{
    id:'005',
    name:'xjx',
    type:'05',
    typeName:'Society',
    level:7,
    limit:5,
    status:0,
    supOut:['05'],
    subOut:[],
    other:'nice'
    
},{
    id:'006',
    name:'xjx',
    type:'01',
    typeName:'Chinese',
    level:6,
    limit:5,
    status:1,
    supOut:['01'],
    subOut:[],
    other:'nice'
    
},{
    id:'007',
    name:'xjx',
    type:'02',
    typeName:'Math',
    level:6,
    limit:5,
    status:1,
    supOut:['02'],
    subOut:[],
    other:'nice'
    
},{
    id:'008',
    name:'xjx',
    type:'03',
    typeName:'English',
    level:6,
    limit:5,
    status:1,
    supOut:['03'],
    subOut:[],
    other:'nice'
    
},{
    id:'009',
    name:'xjx',
    type:'04',
    typeName:'Science',
    level:7,
    limit:5,
    status:1,
    supOut:['04'],
    subOut:[],
    other:'nice'
    
},{
    id:'010',
    name:'xjx',
    type:'05',
    typeName:'Society',
    level:7,
    limit:5,
    status:0,
    supOut:['05'],
    subOut:[],
    other:'nice'
    
}]

let room = [
    '601','602','603','604','605',
    '701','702','703','704','705'     
]

let type = ['01','02','03','04','05']

let session = [];

for(let i=0; i<room.length; i++){
    for(let j=0; j<type.length;j++){
        session.push(room[i]+type[j]);
    }
}


function listRoom(tutor, session){
    let tol = 0;
    for(let i=0; i<tutor.length; i++){
        tol += tutor.limit;
    }

    if(tol === session.length){
        
        console.log("not equal");
        return;
        
    }
    let temp = 0;

    while(session.length != 0){
        temp += 1;
        
        let result = [];
        for(let i=0; i<tutor.length; i++){
            for(let j=0; j<session.length;j++){
                if(tutor[i].level != session[i][0]){
                    if(!tutor[i].temp){
                        tutor[i].temp = 0;
                    }
                    if(tutor[i].temp < tutor[i].limit){
                        if(!session[j].substring(3).indexOf(tutor[i].supOut)){
                            tutor[i].temp += 1;
                            result.push(session[j]+" : "+tutor[i].id);
                            session.splice(j,1);
                            j--;
                        }
                    }
                }
            }
        }

        return result;
    
    }
    
    
}

let list =  listRoom(tutor, session);

for (let i = 0; i<list.length; i++){
    console.log(list[i]+"|");
}

