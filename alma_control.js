// let a=[1,2,3,4,5];
// let oddSum=0;
// let evenSum=0;
// for (i of a)
// {
//     if(i%2==0)
//     evenSum+=i;
//     else
//     oddSum+=i;
// }
// document.write(oddSum," ",evenSum);


// let n = [85,92,78,65,95]
// for (i of n)
// {
//    document.write(grade(i)," ");
// }
// function grade(n)
// {
// if(n>=90&&n<=100)
// return "A";
// else if(n>=80&&n<=89)
// return "B";
// else if(n>=70&&n<=179)
// return "C";
// else if(n>=60&&n<=69)
// return "D";
// }

// let scores = [85,92,78,65,95];
// console.log(grade(scores));
// function grade(scores)
// {
//     let gradeCount={A:0,B:0,C:0,D:0,F:0};
//     for(i of scores )
//     {
//         if(i>=90)
//         gradeCount.A++;
//     else if(i>=80)
//     gradeCount.B++;
//     else if(i>=70)
//     gradeCount.C++;
//     else if(i>=60)
//     gradeCount.D++;
// else
// gradeCount.F++;
//     }
//     return gradeCount;
// }

console.log(simpleCalculator('4',9,'+'));
function simpleCalculator(a,b,op)
{
    if(isNaN(a)||isNaN(b))
    {
    return "Invalid input. please enter numeric values";
    }
switch(op)
{
    case '+':
        return a+b;
        case '-':
            return a-b;
            case '*':
                return a*b;
                case '/':
                    return a/b;
                    default:
                        return "Unsupported operator. Please enter a valid operator (+, -, *, /)."
}
}

