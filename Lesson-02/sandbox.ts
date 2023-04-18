let character = 'Juhi';
let age =30;
let isBlackBelt= false;[[]]


// we can't change types of variable that already defined 
//it will give error in typescript because it follow the strict mode by defaut
// character=30;
character='juhi chawla';


// we can't change types of variable that already defined
//it will give error in typescript because it follow the strict mode by defaut
// age ='swioe';
age=40;


// we can't change types of variable that already defined 
//it will give error in typescript because it follow the strict mode by defaut
// isBlackBelt='rodk';
// isBlackBelt=30;
isBlackBelt=true;


var circ = function (diameter:number){
    return diameter*Math.PI;
}

console.log(circ(20));
