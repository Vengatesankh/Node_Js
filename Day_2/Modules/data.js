//Modules is a just sepearate file, it is used to we can reuse the code.
//we can access one file datas in another file(varaibles,array,object, fuctions).

//Syntax
// require() , module.export={}

let names = ['vengates','vijay','ajith']

const UserData = [
    {name:"vijay",age:12},
    {name:"venky",age:21}
]

const b = 10;

const add = (a,b)=>{
    return a + b
}
module.exports = {names,UserData,b,add}

