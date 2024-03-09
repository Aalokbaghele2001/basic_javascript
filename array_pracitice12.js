// let array=[1,2,3,4,5];
// console.log(array.length);
// console.log(array.toString(),typeof array.toString());
// console.log(array.join(),typeof array.join());

// let a={
//     An:"aalok",
//     Aa:23,
//     Ao:"coder"
// };
// delete a.An;
// console.log(a);

// let array1=[6,7,8,9,0];
// console.log(array.concat(array1));
// console.log(array);
// console.log(array1);

// let array2=[[1,2],[3,4,5],[6],[8,9,0]];
// console.log(array2.flat());
// console.log(array2);

// console.log(array.push(6));
// console.log(array);
// console.log(array.unshift(0)); // it will give the length of array after adding  element in first 

// console.log(array);

// console.log(array.pop());
// console.log(array);
// console.log(array.shift());
// console.log(array);

// let array3=[1,2,3,5,6,7,8,9,0];
// console.log(array3.splice(2));
// console.log(array3);

// array3.splice(2,0,11);
// console.log(array3);
// array3.splice(2,1,8);
// console.log(array3);
// array3.splice(2,1,3,4,5,6,7,8,9,0);
// console.log(array3);

// let array4=[1,2,3,4,5,6,7,8,9];
// console.log(array4.slice(5));
// console.log(array4);
// console.log(array4.slice(2,6));
// console.log(array4);

// let result=array4.some( function(i){
//     if(i%5==0)
//     return i;
// });
// console.log(result);

// let result1=array4.every(function(i){
//     if(i>=1)
//     return i;
// });
// console.log(result1);

// let result2=array4.map( function(i){
//     return i*5;
// });
// console.log(result2);

// console.log(array4.at(5));

// let arr=[1,2,3,4,5];
// arr.copyWithin(0,3,4);  // copy to index 0 the element at index 3
// console.log(arr); /// [4,2,3,4,5]

// let arr1=[1,2,3,4,5,6,7];
// arr1.copyWithin(1,3);   // copy to index 1 all elements from index 3 to the end 
// console.log(arr1);    // [1,2,5,6,7,6,7]

// let arr=[1,2,3,4,5,6,7,8,9,0];
// const iter=arr.entries();  // it print index and value at that index 
// console.log(iter.next().value); // [0,1]  0 is index and 1 is value at index 0
// console.log(iter.next().value); // next [1,2]  1 is index and 2 is value at index 1 

// for(const [index,element] of arr.entries())   /// it prints all index and values
// {
//     console.log(index,element);
// }

// for(value of arr.entries())   //  it prints in arr of index and value one  pair 
// {
//     console.log(value);
// }

// for(values of arr.entries())
// {
//     console.log(values[0],values[1]);
// }

//
array.fill(0,2,4);
console.log(array);

array.fill(5,1);
console.log(array);

array.fill(6);
console.log(array);

let aarr=[5,12,8,130,44];
const largeEleIndex=aarr.findIndex(function(i){
    if(i>13)
    return i;
});
console.log(largeEleIndex);

const largeEleIndex1=aarr.findIndex((i)=>i>10);
console.log(largeEleIndex1);

const found = aarr.findLast((i)=>i>=45);
console.log(found);