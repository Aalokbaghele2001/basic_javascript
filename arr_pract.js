// const array1=[1,2,3,4];
// const intialValue=0;
// const sumWithInitial= array1.reduce(function(acc,curr){
//     return acc+curr
// },intialValue);
// console.log(sumWithInitial);

// const intialValue1=1;
// const multWithInitial1=array1.reduce((acc,curr)=> acc*curr
// ,intialValue1);
// console.log(multWithInitial1);

const person={
    name:  "aalok baghele",
    age: 23,
};

function getName(user){
    return user.name;
}
function capitalise(str){
    return str.toUpperCase();
}
function addSalutation(str){
    return `Mr. ${str}`;
}

console.log(getName(person));
console.log(capitalise(getName(person)));
console.log(addSalutation(capitalise(getName(person))));


const result=[getName,capitalise,addSalutation].reduce(function(intialValue,func){

    console.log(func(intialValue));
    return func(intialValue);
},person);
console.log(result);

const result2=[getName,capitalise,addSalutation].reduce((intialValue,func)=> func(intialValue),person);
console.log(result2);

