// let fruits=['apple','bannana','orange'];
// console.log(fruits);
// fruits.push("strawberry");
// console.log(fruits);
// fruits.unshift("graps");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// console.log(fruits.indexOf("bannana"));

// let numbers=new Array(3);
// numbers.push(3);
// numbers.push(1,2,3);
// console.log(numbers);

// let look=['❤','🧡','💛','💚','💙','💜','🤎','🖤','🤍'];
// look.push('❤','🧡','💛','💚','💙','💜','🤎','🖤','🤍');
// look.unshift('❤','🧡','💛','💚','💙','💜','🤎','🖤','🤍');
// console.log(look);

// console.log(look.lastIndexOf('💙'));
// console.log(look.includes("🧡"));
// console.log(look.includes("💌"));

// let look2=look.slice();
// console.log(look2);
// let look3=look.slice(5);
// console.log(look3);
// let look4=look.slice(6,26);
// console.log(look4);


let numbers=[1,4,5,7,8,10,12,12,13,13,15,17,17,17,17,17,21];
console.log(numbers);

// let number=numbers.splice(2);
// console.log(numbers);
// console.log(number);

numbers.splice(1,0,2,3);
console.log(numbers);

numbers.splice(5,0,6);
console.log(numbers);

numbers.splice(8,0,9);
console.log(numbers);

numbers.splice(10,1,11);
console.log(numbers);

numbers.splice(13,1,14);
console.log(numbers);

numbers.splice(15,1,16);
console.log(numbers);

numbers.splice(17,3,18,19,20);
console.log(numbers);


const find1=numbers.find( function(i){
    if(i>10)
    return i;
});
console.log(find1);
const find2=numbers.find((i)=>(i>10));
console.log(find2);

numbers.find(function(i){
    if(i>10)
    console.log(i);
});


const filter1=numbers.filter(function(i){
    if(i>15)
    return i;
});
console.log(filter1);

const filter2=numbers.filter((i)=>i%2==0);
console.log(filter2);


const map1=numbers.map(function(i){
    return i*5;
});
console.log(map1);

const map2=numbers.map((i)=>i*2);
console.log(map2);


let names=["aalok","nick","john","vinod","pragati","lucky"];
console.log(names.join(""));
console.log(names.join());
console.log(names.join("_"));

const RevNames=names.reverse();
console.log(RevNames);

const initialValue1=0;
const initialValue2=1;
const sumOfArray=numbers.reduce(function(sum,currValue){
    return sum+currValue;
},initialValue1);
console.log(sumOfArray);

const multipleAraay=numbers.reduce(((mult,currValue)=>mult*currValue),initialValue2);
console.log(multipleAraay);

function func(){
    console.log(Array.isArray("aalok"),Array.isArray([1,2,3]),Array.isArray({foo:123}));
}
func();

names[0]="aalok";
console.log(names);