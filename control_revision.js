// const numbers=[1,2,3,4,5];
// for(let i=0;i<numbers.length;i++)
// {
//     console.log(numbers[i]);
// }

// for(let i=0;i<5;i++)
// {
//     console.log("helllo world ");
// }

// for(let i=0;i<5;i++)
// {
//     console.log(i);
// }

// let person={
//     firstName:'aalok',
//     lastName:'baghele',
//     age:23,
//     isGraduate:true
// };
// for(key in person)
// {
//     console.log(key,person[key]);
// }
// console.log(person.firstName);
// console.log(person['age']);

// let arr=[1,2,3,4,5,6,7,8,9];
// for(value in arr)
// {
//     console.log(value,arr[value]);
// }


// let arr=[1,2,3,4,5];
// for(let value of arr)
// {
//     console.log(value);
// }

// let i=1;
// while(i<=5)
// { 
// console.log(i);
// i++;
// }

// const numbers=[5,-2,10,0,-3,8,-1];

// let sum=0;
// let i=0;

// while(i<numbers.length)
// {
//     if(numbers[i]>0)
//     {
//         sum+=numbers[i];
//     }
//     i++;
// }
// console.log(`The sum of positive numbers is ${sum}`);

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);


// for(let i=1;i<=10;i++)
// {
//     if(i===5)
//     {
//         break;

//     }
//     console.log(i);
// }

// let i=1;
// while(i<=10)
// {
//     if(i===5)
//     {
//         break;
//     }
//     console.log(i);
//     i++;
// }


// for(var i=1;i<=5;i++)
// {
//     if(i%2!==0){
//         continue;
//     }
//     console.log(`iteration : ${i}`);
// }
// console.log(`exited the loop.`);

// for(let i=1;i<=5;i++)
// {
//     if(i===3)
//     {
//         continue;
//     }
//     console.log(i);
// }

// let arr=[1,2,3,4,5];
// let oddSum=0;
// let evenSum=0;

// // arr.forEach((i)=>
// // {
// //     if(i%2==0)
// //     evenSum+=i;
// //     else
// //     oddSum+=i;
// // });

// for(let value of arr)
// {
//     if(value%2==0)
//     evenSum+=value;
//     else
//     oddSum+=value;
// }

// console.log(oddSum,evenSum);


// let arr=[85,92,78,65,95];
// let set={A:0,B:0,C:0,D:0,F:0};
// for(let value of arr)
// {
//     if(value>=90)
//     set.A++;
//     else if(value>=80)
//     set.B++;
//     else if(value>=70)
//     set.C++;
//     else if(value>=60)
//     set.D++;
//     else
//     set.F++;
// }
// console.log(set);




// function simpleCalculator(a,b,operator)
// {
//     let operators=['+','-','*','/']
//     if(typeof a!='number'||typeof b!='number')
//         return "Invalid input. Please enter numeric values.";
//     else if(!operators.includes(operator))
//         return "Unsupported operator. Please enter a valid operator (+, -, *, /).";
//     else if(operator=='/'&&b==0)
//        return "Cannot divide by zero.";

// switch(operator)
// {
//     case '+':
//         return a+b;
//         case '-':
//             return a-b;
//             case '*':
//                 return a*b;
//                 case '/':
//                     return a/b;
// }
// }
// console.log(simpleCalculator(5, 2, '+'));
// console.log(simpleCalculator(5, 2, '-')); 
// console.log(simpleCalculator(5, 2, '*')); 
// console.log(simpleCalculator(5, 2, '/')); 
// console.log(simpleCalculator(5, 0, '/')); 
// console.log(simpleCalculator('5', 2, '+')); 
// console.log(simpleCalculator(5, 2, '&'));



// // let operators=['+','-','*','/',1]
// // console.log(!operators.includes('+'));


