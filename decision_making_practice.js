// let dayOfWeek=5;
// let dayName;
// switch(dayOfWeek){
//     case 1:
//         dayName="Monday";
//         break;
//         case 2:
//             dayName="Tuesday";
//             break;
//             case 3:
//                 dayName="Wednesday"
//                 break;
//                 case 4:
//                     dayName="thrusaday";
//                     break;
//                     case 5:
//                         dayName="friday";
//                         break;
//                         case 6:
//                             dayName="saturday";
//                             break;
//                             case 7:
//                                 dayName="sunday";
//                                 break;
//                                 default:
//                                     dayName="invalid day";
//                                     break;
// }
// console.log(dayName);


// let fruit=prompt(`enter fruits`);
// let color;
// switch(fruit){
//     case 'banana':
//     case 'lemon':
//         color="yellow";
//         break;
//         case 'apple':
//         case 'cherry':
//         case 'strawberry':
//             color='red';
//             break;
//             case 'grape':
//             case 'blueberry':
//                 color='purple';
//                 break;
//                 default:
//                     color='unknown';
//                     break;
// }
// document.write(color);


// let num1=parseFloat(prompt("enter the first value : "));
// let num2=parseFloat(prompt("enter the second value : "));
// let operator=prompt("enter the operator (+,-,*,/");
// let result;
// switch(operator)
// {
//     case '+':
//         result=num1+num2;
//         break;
//         case '-':
//             result=num1-num2;
//             break;
//             case '*':
//                 result=num1*num2;
//                 break;
//                 case '/':
//                     result=num1/num2;
//                     break;
//                     default:
//                         result="Invalid Operator";
//                         break;
// }
// document.write(result);


// let dayOfWeek=prompt(`enter day`);
// switch(dayOfWeek){
// case 'monday':
// case 'tuesday':
// case "wednesday":
// case 'thrusday':
// case 'friday':
//     document.write(`weekdays`);
//     break;
//     case 'saturday':
//     case 'sunday':
//         document.write(`weekends`);
//         break;
//         default:
//             document.write(`not a week day`);
// }

// let input=prompt("enter input :");
// let a="";
// for(let i=input.length-1;i>=0;i--)
// {
//     a=a+input[i];
// }
// document.write(a===input);

// let n1=parseInt(prompt("enter value : "));
// let n2=parseInt(prompt("enter value : "));
// let n3=parseInt(prompt("enter value : "));
// let res=n1*n2*n3;
// if(res>0)
// document.write(`1`);
// else if(res<0)
// document.write(`-1`);
// else
// document.write(`0`);


// let n1=parseInt(prompt("enter value : "));
// let n2=parseInt(prompt("enter value : "));
// let n3=parseInt(prompt("enter value : "));

// let positive=0;
// let negative=0;

// (n1>0)?positive++:negative++;
// (n2>0)?positive++:negative++;
// (n3>0)?positive++:negative++;

// if(positive==3)document.write("+++")
// if(positive==2)document.write("++-")
// if(positive==1)document.write("+--")
// if(positive==0)document.write("---")