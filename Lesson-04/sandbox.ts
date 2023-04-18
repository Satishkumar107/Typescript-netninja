// arrays

let names=['satish', 'harsh','hemant'];

// names ="string";  // we can't change the type as well names type was array
// so now we are changing to string but we can't do  it


// we want to push a new item that will be string 
names.push("guru");
console.log(names);

// we want to push different types in the aray but it will not permit to push and
// it will give an error
// names.push(20);  // it will not compile in diiferent types
// console.log(names);


let numbers = [20,30,40,90];
numbers.push(50);
// numbers.push("you");
console.log(numbers);



let mixed =['ken', 4,"july",6,7,8,9]
mixed.push(20);
mixed.push("mixed types");
mixed.push("mixed type defined");
mixed.push(500);
console.log(mixed);



//objects

let ninja = {

    name:"vivek",
    age:30,
    class:"a"
}


console.log(ninja)


ninja.age=40;
ninja.class="b";
console.log(ninja)
// ninja.age'90'; // we can't change the type of property


// ninja.skills=["fighting", "sneaking"]  // we can't add extra property t oalready defined objects


// ninja = [];  // we can't change the type of the already defined object


// we can change the propert of same object but in exact same way as defined structure of the propert
ninja ={

    name:"vikash",
    age:80,
    class:"C"

}
console.log(ninja)
