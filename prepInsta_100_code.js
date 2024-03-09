// let n;
// n=parseInt(prompt("enter the number"));
// if(n>0)
// document.write("positive");
// else if(n===0)
// document.write("Zero");
// else
// document.write("Negative");

// let n;
// n=parseInt(prompt("enter the value "));
// let sum=0;
// while(n>=1)
// {
// sum+=n;
// n--;
// }
// document.write(sum);

// let n1,n2,n3;
// n1=parseInt(prompt("Enter the first Number : "));
// n2=parseInt(prompt("Enter the second Number : "));
// n3=parseInt(prompt("Enter the third Number : "));
// if(n1>n2)
// {
//     document.write(n1," is greatest among ",n1," , ",n2," and ",n3);
// }
// else
// {
// if(n2>n3)
// document.write(n2," is greatest among ",n1,n2," and ",n3);
// else
// document.write(n3," is greatest among ",n1,n2," and ",n3);
// }

// let year;
// year = parseInt(prompt("enter the year : "));
// if(year%400==0||year%4==0&&year%100!=0)
// document.write("leap");
// else
// document.write(" not leap");

// let n;
// n = parseInt(prompt());
// function isPrime(n)
// {
// if (n == 2)
//  return true;
// else if (n < 2) 
// return false;
//   for (let i = 3; i < n; i += 2)
//    {
//     if (n % i == 0)
//      {
//      return false;
//     }
//   }
// return true;
// }
// if(isPrime(n))
// document.write("prime");
// else
// document.write("not prime");


// let n1,n2;
// n1 = parseInt(prompt());
// n2 = parseInt(prompt());
// function isPrime(n)
// {
// if (n == 2)
//  return true;
// else if (n < 2) 
// return false;
// else if(n%2==0)
// return false;
//   for (let i = 3; i < n; i += 2)
//    {
//     if (n % i == 0)
//      {
//      return false;
//     }
//   }
// return true;
// }
// for(let n=n1;n<=n2;n++)
// {
// if(isPrime(n))
// document.write(n," ");
// }

// let n;
// n=parseInt(prompt());
// let sum=0;
// while(n>0)
// {
// let r=n%10;
// n=parseInt(n/10);
// sum+=r;
// }
// document.write(sum);

// let n;
// n=parseInt(prompt());
// if(rev(n)===n)
//     document.write("palindrom");
// else
// document.write("not  palindrom");
// function rev(n)
// {
// let rev=0;
// while(n>0)
// {
//     let r=n%10;
//     rev=rev*10+r;
//     n=parseInt(n/10);
// }
// return rev;
// }

// let n;
// n=parseInt(prompt());
// if(n>9)
// {
// n=parseInt(prompt());
// if(n===armstrong(n,power(n)))
//     document.write("armstrong");
// else
// document.write("not  armstrong");
// }
// else
// document.write("not  armstrong");
// function armstrong(n,p)
// {
//     let arm=0;
//     while(n>0)
//     {
//         let r=n%10;
//         arm+=pow(r,p);
//         n=parseInt(n/10);
//     }
//     return arm;
// }
// function pow(n,p)
// {
//     let res=1;
//     while(p>0)
//     {
//         res*=n;
//         p-=1;
//     }
//     return res;
// }
// function power(n)
// {
//     let count=0;
//     while(n>0)
//     {
//         n=parseInt(n/10);
//         count+=1;
//     }
//     return count;
// }



// let a,b;
// a=parseInt(prompt());
// b=parseInt(prompt());
// if(a>9)
// {
// for(let n=a;n<=b;n++)
// {
// if(n===armstrong(n,power(n)))
//     document.write(n," ");
// }
// }
// function armstrong(n,p)
// {
//     let arm=0;
//     while(n>0)
//     {
//         let r=n%10;
//         arm+=pow(r,p);
//         n=parseInt(n/10);
//     }
//     return arm;
// }
// function pow(n,p)
// {
//     let res=1;
//     while(p>0)
//     {
//         res*=n;
//         p-=1;
//     }
//     return res;
// }
// function power(n)
// {
//     let count=0;
//     while(n>0)
//     {
//         n=parseInt(n/10);
//         count+=1;
//     }
//     return count;
// }



// let a=0;
// let b=1;
// let n=parseInt(prompt());
// while(a<n)
// {
//     let temp=b;
//     b=a+b;
//     a=temp;
//   if(b>n)
//   {
//     document.write(a);
//     break;
//   }
// }

// let n=parseInt(prompt());
// let fact=1;
// while(n>0)
// {
// fact=fact*n;
// n--;
// }
// document.write(fact);

// let n=parseInt(prompt());
// let p=parseFloat(prompt());
// let power=1;
// while(p>0)
// {
// power=power*n;
// p--;
// }
// document.write(power);

// let n=parseInt(prompt());
// let i=1;
// while(n>=i)
// {
// if(n%i==0)
// document.write(i," ");
// i++;
// }

// let n=parseInt(prompt());
// if(isPrime(n))
// document.write("prime");
// else
// document.write("not prime");
// function  isPrime(n)
// {
//     if(n<2)
//     return false;
//     else if(n===2)
//     return true;
//     else
//     {
//         for(let i=3;i<n;i+=2)
//         {
//             if(n%i==0)
//             return false
//         }
//         return true;
//     }
// }

// let n1=parseInt(prompt());
// let n2=parseInt(prompt());
// function  isPrime(n)
// {
//     if(n<2)
//     return false;
//     else if(n===2)
//     return true;
//     else if(n%2==0)
//     return false;
//     else
//     {
//         for(let i=3;i<n;i+=2)
//         {
//             if(n%i==0)
//             return false
//         }
//         return true;
//     }
// }
// for(let n=n1;n<=n2;n++)
// {
// if(isPrime(n))
// document.write(n," ");
// }


// let n=parseInt(prompt());
// while(n%2==0)
// {
//     n=parseInt(n/2);
//     document.write(2," ");
// }
// for(let i=3;i<=n;i+=2)
// {
//     while(n%i==0)
//     {
//         n=parseInt(n/i);
//         document.write(i," ");
//     }
// }


// let n=parseInt(prompt());
// if(n===str(n,fact(n)))
//     document.write("strong");
// else
// document.write("not strong ");
// function fact(n)
// {   let f=1;
//     while(n>1)
//     {
//         f=f*n;
//         n--;
//     }
//     return f;
// }
// function str(n,f)
// {
//     let s=0;
//     while(n>0)
//     {
//         let r=n%10;
//         s=s+fact(r);
//         n=parseInt(n/10);
//     }
//     return s;
// }


// let n=parseInt(prompt());
// if(n===perf(n))
// document.write("perfact number");
// else
// document.write("not perfact");
// function perf(n)
// {
// let i=1;
// let sum=0;
// while(i<n)
// {
//     if(n%i==0)
//     {
//      sum+=i; 
//     }
//     i++;  
// }
// return sum;
// }

// let n=parseInt(prompt());
// function perfsq(n)
// {
// let i=1;
// while(i*i<=n)
// {
//     if(i*i!==n)
//     {
//         i++;
//         continue;
//     }
//     return true;
// }
// return false;
// }
// if(perfsq(n))
//     document.write("perfcat");
//     else
//     document.write("not perfcat");

// let n=parseInt(prompt());
// let sq=n*n;
// function digit(n)
// {
//     let count=0;
//     while(n>0)
//     {
//         n=parseInt(n/10);
//         count++;
//     }
//     return count;
// }
// function rem(c)
// {
//     let a=1;
//     while(c>0)
//     {
//         a=a*10;
//         c--;
//     }
//     return a;
// }
// if(sq%rem(digit(n))===n)
// document.write("arm");
// else
// document.write("not arm");


// let n=parseInt(prompt());
// if(n%hard(n)==0)
// document.write("harshad");
// else
// document.write("not harshad");
// function hard(n)
// {
//     let sum=0;
//     while(n>0)
//     {
//         let r=n%10;
//         sum+=r;
//         n=parseInt(n/10);
//     }
//     return sum;
// }


// let n=parseInt(prompt());
// if(abd(n)>n)
// document.write("abundund number ");
// else
// document.write(" not abundunt ");
// function abd(n)
// {
//     let sum=0,i=1;
//     while(i<n)
//     {
//         if(n%i==0)
//         {
//             sum+=i;
//         }
//         i++;
//     }
//     return sum;
// }



// let n1=parseInt(prompt());
// let n2=parseInt(prompt());
// if(parseInt(abd(n1)/n1)===parseInt(abd(n2)/n2))
// document.write("friendly pair ");
// else
// document.write(" not  ");
// function abd(n)
// {
//     let sum=0,i=1;
//     while(i<n)
//     {
//         if(n%i==0)
//         {
//             sum+=i;
//         }
//         i++;
//     }
//     return sum;
// }



// let n1=parseInt(prompt());
// let n2=parseInt(prompt());
// let hcf=1;
// for(let i=1;i<=n1||i<=n2;i++)
// {
//     if(n1%i==0&&n2%i==0)
//     hcf=i;
// }
// document.write(hcf);


// let n1=parseInt(prompt());
// let n2=parseInt(prompt());
// while(n1!=n2)
// {
//     if(n1>n2)
//     n1-=n2;
//     else
//     n2-=n1;
// }
// document.write(n1);

// let n1 = parseInt(prompt());
// let n2 = parseInt(prompt());
// let hcf=1;
// function minm(a,b)
// {
//  if(a>b) 
//  return b;
// else
// return a;
// }
// for(let i=1;i<=minm(n1,n2);i++)
// {
//     if(n1%i==0&&n2%i==0)
//         hcf=i;
// }
// document.write(hcf);



// let n1 = parseInt(prompt());
// let n2 = parseInt(prompt());
// let hcf=1;
// let min=n1>n2?n2:n1;
// for(let i=1;i<=min;i++)
// {
//     if(n1%i==0&&n2%i==0)
//         hcf=i;
// }
// document.write(hcf);





// let a=parseInt(prompt());
// let b=parseInt(prompt());
// let lcm=0;
// let max=a>b?a:b;
// for(let i=max;i<=a*b;i++)
// {
//     if(i%a==0&&i%b==0)
//     {
//     lcm=i;
//     break;
//     }
// }
// document.write(lcm);

// let a=parseInt(prompt());
// let b=parseInt(prompt());
// let lcm=0;
// let max=a>b?a:b;
// for(let i=max;i<=a*b;i+=max)
// {
//     if(i%a==0&&i%b==0)
//     {
//     lcm=i;
//     break;
//     }
// }
// document.write(lcm);


// let a=parseInt(prompt());
// let b=parseInt(prompt());
// let hcf=1;
// let min=a>b?b:a;
// for(let i=1;i<=min;i++)
// {
//     if(a%i==0&&b%i==0)
//     hcf=i;
// }

// document.write((a*b)/hcf);


// let a=parseInt(prompt());
// let b=parseInt(prompt());
// while(a!=b)
// {
//     if(a>b)
//     a-=b;
// else
// b-=a;
// }
// document.write(a);



// If ( x>0 and y>0 ) First Quadrant
// If ( x<0 and y>0 ) Second Quadrant
// If ( x<0 and y<0 ) Third Quadrant
// If ( x>0 and y<0 ) Fourth Quadrant
// If ( x=0 and y=0 ) Origin
// If ( x!=0 and y=0 ) x-axis
// If ( x=0 and y!=0 ) y-axis

// let x = parseInt(prompt());
// let y = parseInt(prompt());
// if(x>0 && y>0)
// document.write("First Quadrant");
// else if(x<0&&y>0)
// document.write("second Quadrant");
// else if(x<0&&y<0)
// document.write("third Quadrant");
// else if(x>0&&y<0)
// document.write("forth Quadrant");
// else if(x==0&&y==0)
// document.write("origin");
// else if(x!=0&&y==0)
// document.write("x axis");
// else if(x==0&&y!=0)
// document.write("y axis");


// let n = parseInt(prompt());
// let r = parseInt(prompt());
// function factorial(n)
// {
//     let fact=1;
//     while(n>0)
//     {
//         fact=fact*n;
//         n--;
//     }
//     return fact;
// }
// document.write(factorial(n)/factorial(n-r));


// let n = parseInt(prompt());
// document.write((n*(n-1))/2)


// let n1=parseInt(prompt());
// let d1=parseInt(prompt());
// let n2=parseInt(prompt());
// let d2=parseInt(prompt());
// function FindGCD(a,b)
// {
//     let min=a>b?b:a;
//     let hcf;
//     for(let i=1;i<=min;i++)
//     {
//         if(a%i==0&&b%i==0)
//         hcf=i;
//     }
//     return hcf;
// }
// let lcm=(d1*d2)/FindGCD(d1,d2);
// let sum=(n1*lcm/d1)+(n2*lcm/d2);

// /// this is for normalize
// let n3=sum/FindGCD(lcm,sum);
// lcm=lcm/FindGCD(lcm,sum);

// document.write(sum,"/",lcm);

// let n = parseInt(prompt());
// let n2=0;
// while(n>0)
// {
//     let r=n%10;
//     if(r==0)
//     r+=1;
//     n2=n2*10+r;
//     n=parseInt(n/10);
// }
// function reverse(n)
// {
//     let n2=0;
//     while(n>0)
// {
//     let r=n%10;
//     n2=n2*10+r;
//     n=parseInt(n/10);
// }
// return n2;
// }
// document.write(reverse(n2));




// let n=parseInt(prompt());
// let a,b;
// for(let i=2;i<=parseInt(n/2);i++)
// {
//     for(let j=parseInt(n/2);j<=n;j++)
//     {
//         if(prime(j))
//         {
//         if(i+j===n)
//         {
//         document.write(i," and ",j," addition ",n," || ");
//         document.write("\n");
//         }
//         }
//     }
// }
// function prime(n)
// {
//     if(n<2)
//     return false;
// else if(n==2)
// return true;
// else
// {
//     if(n%2==0)
//     return false;
// for(let i=3;i<n;i+=2)
// {
//     if(n%i==0)
//     return false;
// }
// return true;
// }
// }

// let rad=parseFloat(prompt());
// let area=3.14*rad*rad;
// document.write(area);



// function prime(n)
// {
//     if(n<2)
//     return false;
// else if(n==2)
// return true;
// else if(n%2==0)
// return false;
// else
// {
//     for(let i=3;i<n;i+=2)
//     {
//         if(n%i==0)
//         return false;
//     }
//     return true;
// }
// }
// for(let i=1;i<=100;i++)
// {
//     if(prime(i))
//     document.write(i," ");
// }

// let n = parseInt(prompt());
// let count=0;
// while(n>0)
// {
//     n=parseInt(n/10);
//     count++;
// }
// document.write(count);

// let month = parseInt(prompt());
// let year = parseInt(prompt());

// switch(month)
// {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//     document.write("number of days is 31 days");
//     break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//     document.write("number of days is 30 days"); 
//     break;
//     case 2:
//         if(year%400==0||((year%100!=0)&&(year%4==0)))
//         document.write("number of days is 29");
//     else
//     document.write("number of days is 28");
//     break;
//     default:
//     document.write("Invalid month");
// }


// let n = parseInt(prompt());
// let d = parseInt(prompt());
// let count=0;
// while(n>0)
// {
//     let r = n%10;
//     if(r==d)
//     count++;
//     n=parseInt(n/10);
// }
// document.write(count);



let a=[7,3,5,7,9,0,2,3,4,5,4,1];
let max=a[0];
let min=a[0];
a.forEach((i)=>
{
    if(i>max)
     max=i;
    else if(i<min)
     min=i;
});
console.log(max,min);