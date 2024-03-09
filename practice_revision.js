// var Name="John Doe";
// console.log(Name);

// var Name1;
// Name1="John Doe";
// console.log(Name1);

// var a="John Doe";
// ///var are not block-scoped. 
// //When you declare a variable within a code block,
// // using curly braces ({}), its scope "flows out" of the block!
// var someBool=true;
// if(someBool){
//     var a="Daniel joan";
// }
// console.log(a);


// var a1="John Doe";
// var someBool=true;
// if(someBool){
//     let a1="Daniel joan";
// }
// console.log(a1);

// var a2="John Doe";
// var someBool=true;
// if(someBool){
//     const a2="Daniel joan";
// }
// console.log(a2);


// let firstName="john";
// let lastName="doe";

// let someBool=true;
// if(someBool){
//     let firstName="jane";
//     console.log(firstName);
// }
// console.log(firstName);


// const names="john";
// // const names="jane";
// names="aalok"


// let name1 = prompt("enter name : ");
// let age = prompt("enter age : ");
// let colour = prompt("enter colour : ");
// document.write(`name is ${name1} , age is ${age} and favourite colour is ${colour}.`);


// var names=["Mayank","Shubham","Amrita"];
// var ages =[30,29,33];
// console.log(names,ages);

// var student={
//     roll_no:34,
//     n:"Mayank",
//     age:27,
//     city:"Delhi"
// };
// console.log(student);

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(3,4));



// implicit type conversion 

// let numStr="10";
// let result=numStr+5;
// console.log(result,typeof result);

// let num=10;
// let result1=10+"5";
// console.log(result1,typeof result1);

// let numStr="10";
// let res1=numStr-5;
// let res2=numStr/2;
// let res3=numStr*3;
// document.write(res1,typeof res1,res2,typeof res2,res3,typeof res3);

// let bool=true;
// let result=bool+5;
// document.write(result , typeof result)

// let nullval=null;
// let result=nullval+5;
// document.write(result,typeof result);


/// explicit conversion

// let result;

// result=Number('324');
// document.write(result,typeof result);

// result=Number('324^(e-1)'); // this is not working 
// console.log(result);

// result=Number(true);
// result=String(true);
// document.write(result);

// result=Number(NaN);
// document.write(result)



// let result;

// // result=parseInt('20.01');
// // result=parseFloat("20.01");
// // result=+'20.01';// this + is convert string to number 
// // result=Math.floor('20.01'); // this is also convert to number and it shows only base value
 
// console.log(result,typeof result);

// let result;
// result=String(325);
// result=String(2+5);
// result=String(undefined);
// result=String(null);
// result=String(true);
// result=String(NaN);
// result=(324).toString();

// console.log(result,typeof result);

// let result;
// result=Boolean("");
// result=Boolean(0);
// result=Boolean(undefined);
// result=Boolean(null);
// result=Boolean(NaN);

// result=Boolean(" ");
// result=Boolean(324);
// result=Boolean("aalok11");


// console.log(result);

// let input=prompt("enter value : ");
// document.write(typeof input);

// let n1=parseInt(prompt("enter 1st value : "));
// let n2=parseInt(prompt("enter 2nd value : "));
// document.write(`sum of two number is ${n1+n2}`);

// console.log(parseInt("123Hello"));
// console.log(parseInt("Hello123"));


// let num1=5;
// let num2=3;

// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(Math.floor(num1/num2));
// console.log(num1%num2);
// console.log(++num1);
// console.log(num1++);
// console.log(num1);

// console.log(--num1);
// console.log(num1--);
// console.log(num1);

// console.log(num1**num2);

// console.log(num1>num2);

// const a=5; // 0101 in binary
// const b=3; // 0011 in binary    
// console.log(a&b);
// console.log(a|b);
// console.log(a^b);
// console.log(~a);
// console.log(a<<1);
// console.log(a>>1);

// let str1="hello";
// let str2="world";
// console.log(str1+str2);


// let age=18;
// let canVote=age>=18?"Yes":"No";
// console.log(canVote);

// const num=42;
// const str="Hello World";
// const bool=true;
// const obj={key:"value"};
// const arr=[1,2,3];
// const func=function(){};
// const und=undefined;
// const nul=null;

// console.log(num, typeof num);
// console.log(str, typeof str);
// console.log(bool, typeof bool);
// console.log(obj, typeof obj);
// console.log(arr,typeof arr);
// console.log(func, typeof func);
// console.log(und, typeof und);
// console.log(nul, typeof null);

// let a=10;
// console.log(a++ + ++a);//22
// console.log(a);// a=12
// console.log(a++ - ++a);


// let a = 5;
// let res=(a%2==0)?"Even":"Odd";
// console.log(res);


// let b = -5;
// let res=(b>0)?"positive":"negative";
// console.log(res);

// let min=3;
// let second=min*60;
// console.log(second);