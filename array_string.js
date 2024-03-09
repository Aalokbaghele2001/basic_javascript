// let str="";
// for(let i=1;i<=8;i++)
// {
//     for(let j=1;j<=i;j++)
//     {
//         str+="* ";
//     }
//     str+="\n";
// }
// console.log(str);


/////////////////////////////////////////////////////////////////////////////////////
// // empty array
// //let arr1=new Array(5); this array with 5 length 
// // let arr2=[]; // array with 0 length 

// let arr=["🍎","🍌","🍓","🍉","🍇"];
// console.log(arr);
// // arr[2]="🥝";
// // console.log(arr);

// // push(argument) method
// // add the element at last of the array
// arr.push("🤣"); // one element
// console.log(arr);
// arr.push("❤","😍"); // two element
// console.log(arr);

// // pop() method 
// // remove the element at last of the array and return that element 
// console.log(arr.pop());
// console.log(arr);

// /// shift() method
// // remove the first element of the array and return that element
// console.log(arr.shift());
// console.log(arr);

// /// unshift(argument) method 
// // add element beginning of the array 
// arr.unshift("🍎"); // one element 
// console.log(arr);
// arr.unshift("🍎","💋");// two element
// console.log(arr);


// arr.push("🍓","🍓","🍓","🍎","🍎","🍎");
// arr.unshift("🍓","🍓","🍓","🍎","🍎","🍎");
// console.log(arr);
// /// indexOf(argument) method
// // it  return index of given element 
// console.log(arr.indexOf("🍓"));

// /// lastIndexOf(argument) method
// // it return last index of given element 

// console.log(arr.lastIndexOf("🍓"));


// /// includes(argument)
// // it return that given element are there are not 
// // it return boolean value 

// console.log(arr.includes("🍓")); // true 
// console.log(arr.includes("🤢")); // false


// /////////////////////////////////////////////////////////////////////////////////////////////////

// /// slice() method 
// //  it returnes a shallow copy of a portion of an array into a new array 
// // selected from start to end ( end not included)

// // slice()
// // it return a shallow copy of whole array

// // slice(start)
// // slice(2)
// // it return a shallow copy of array from given index to at the end of the array 
// // example string from 2 index to at the end 

// // slice(start , end)
// // slice(1,3)
// // it return a shallow copy of array from starting index up to end index but not includes end index
// // ecmaple starting from 1 to 3 but not include 3rd index only upto 3
// const animal=['ant','bison','camel','duck','elephant'];

// console.log(animal.slice());
// console.log(animal.slice(2));
// console.log(animal.slice(1,3));
// console.log(animal.slice(-2)); // it return from end -2 index that will +3 index from starting 

// ////////////////////////////////////////////////////////////////////////////////////////////

// // splice() method 
// //changes the content of the array by removing or replacing the existing elements and or adding new
// // elements in place

// // arr.splice(start)  // it will remove first number of element that given in arugument
// // it will return modified array

// //arr.splice(start , deleteCount)
// //arr.splice(start,deleteCount,item1)
// /// arr.splice(start,deleteCount,item1,item2)
// /// arr.splice(start,deleteCount,item1,item2,------------itemN)


let month=["jan","march","april","jun","oct","dec"];

let nam=["ak","bk","ck","dk","ek"];

// console.log(month);
// // it will remove first 2 element of the array
// console.log(month.splice(2)); /// it return modified array after removing first 2 element bcz arument is 2

// console.log(month);  /// here out put is first 2 element of array that removed from array

// console.log(nam.splice(-2)); // here it remove last 2 element of array bcz argument is -2
// // it return  last 2 element of array that removed from array

// console.log(nam); //it return modified array after removing last 2 element bcz arument is -2

month.splice(1,0,"feb"); 
/// it will add element feb at 1 index not element  will be removed
console.log(month);

console.log(month.splice(4,1,"may"));
// it  will replace element jun  by may becuase jun at 4 index it will remove and may will be added at that 
// index
console.log(month);


///////////////////////////////////////////////////////////////////////////////////////////

// // find() method  
// // returns the first element in the provided array that satisfies the provided condition . 
// // if no value statisfy the conditon then undefined is returned

// // arr.find(callbackfunction)

// const array1=[5,12,8,130,44];

// const found=array1.find(function(i) // one way
// {
//     if(i>10)
//     return i;
// });
// array1.find(function(j) // this find() is like for each looop
// {
//     if(j>5)
//     console.log(j);
// });
// const found1=array1.find((i) => i>40); // second way
// console.log(found,found1,found2);


////////////////////////////////////////////////////////////////////////////////////////////////

// // filter() method
// // returns a shallow copy of a portion of an array into a new array filtered down to just the elements
// // from given array that pass the condition or satisfy the that condition by the povided function

// // arr.filter(callbackfunction)

// const words=['spray','limit','elite','exuberant','destruction','present'];

// const result=words.filter(function (word)
// {
//     if(word.length>6)
//     return word;
// });

// const result1=words.filter((word) => word.length==5);

// words.filter(function (word)
// {
//     if(word.length>6)
//     console.log(word);
// });

// console.log(result,result1);


// const arr=[14,23,29,100,51,55];
// let res1=arr.filter(function(i)
// {
//     if(i>20)
//     return i;
// });
// console.log(res1);
// let res2=arr.filter((i) => i>50);
// console.log(res2);

///////////////////////////////////////////////////////////////////////////////////////////////

// /// map() method
// // create a new array populated with the results of calling a provided function
// // on every element in  calling array

// // arr.map(callbackfunction)

// const array1 = [1,4,6,16];
// const map1=array1.map(function(i)
// {
//     return i*2;
// });
// const map2=array1.map((i)=>i*5);
// console.log(array1,map1,map2);


/////////////////////////////////////////////////////////////////////////////////////////////////

// /// .join() 
// //  creates and returns a new string by concatenating all of the elements in the array
// // seperated by specific separator .

// // arr.join()
// // arr.join(separator)

// const elements=['fire','air','water'];
// console.log(elements.join());
// console.log(typeof(elements.join('')));
// console.log((elements.join('-')).length);

// console.log(elements);

// /////////////////////////////////////////////////////////////////////////////////////////////////

// //// reverse() method
// // reverses an array in place and returns the reference to the same array
// it reverse original array 

// // arr.reverse()

// const num=[1,2,3,4,5];
// console.log(num);
// console.log(num.reverse());


////////////////////////////////////////////////////////////////////////////////////////////

// //// reduce() method
// /// the reduce method is used to reduce the elements of the array and combine them 
// // into a final array based on some reducer function that you pass

// /// arr.reduce(callbackFunction,initialValue) it take two parameter

// const array=[1,2,3,4];
// const initialValue=0;
// const sum=array.reduce(function (acc,current)
//     {
//         return acc+current;
//     },initialValue);
//     console.log(sum);


// console.log(array);

// const sum1=array.reduce((acc,current) =>
// {
//     return acc+current;
// },initialValue);
// console.log(sum1);



// const mult=1;
// const multipleAraay=array.reduce(function(multElem,currValue)
// {
//     return multElem*currValue;
// },mult);

// console.log(multipleAraay);



// const multipleAraay1=array.reduce((multElem,currValue) =>
// {
//     return  multElem*currValue;
// },mult);

// console.log(multipleAraay1);


////////////////////////////////////////////////////////////////////////////////////////////

// /// it convert array into whole string  like join mehod
// let arr=["aalok","string","love","javascript","become","web","developer"];
// let str=arr.toString();
// console.log(str);

// /// delete method is used to remove property of object
// let emp={
//     firstName:"aalok",
//     lastName:"baghele",
//     design:"webdeveloper",
//     salary:400000
// };
// delete emp.lastName;
// console.log(emp);

// /// concat method is used to join 2 or more array into one array
// let scores=[40,50,60,100];
// let grades=["A","B","C","D"];

// console.log(arr.concat(scores,grades));


// /// flat method is used to flate aall the element of array if array is multidimentional
// const numbers=[[1,2],4,5,[1,4,7,8],5];
// const flatearray=numbers.flat();
// console.log(flatearray);

// // here some method is used to check if anyone of element satisfy the given condition
// // in call back function if satify then it return true 
// let someMethod=flatearray.some(function (i)
// {
//    return (i<10);
 
// });
// console.log(someMethod);


// let everyMethod=flatearray.every(function(i)
// {
//     return (i<10);
    
// });
// console.log(everyMethod);

// let everyMethod2=flatearray.every((i)=>i>5);
// console.log(everyMethod2);

// let someMethod2=flatearray.some((i)=>i>5);
// console.log(someMethod2);

// console.log(flatearray.sort());

//////////////////////////////////////////////////////////////////////////
/// reduceRight() method same as reduce method but it working right to left
/// reduce() working left to right
// const arr=[1,2,3,4,5];
// let initialValue=0;
// const res=arr.reduceRight(function(acc,curr){
//     console.log(acc);
//     return acc+curr;
// },initialValue);
// console.log(res);


//////////////////////////////////////////////////////////

// when we modify reference array also orignal array modified

// let a=[1,2,3,4,5];
// let b=a;
// b.push(6);
// console.log(a);
// console.log(b);

