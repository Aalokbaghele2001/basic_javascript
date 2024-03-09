let arr=[[1,2,3],[4,5,6],[7,8,9]];
let sum1=0;
let sum2=0;
let l=arr.length-1;
for(let i=0;i<arr.length;i++)
{
    for(let j=i;j<=i;j++)
    {
       sum1+= arr[i][j];
       break;
    }
    sum2+=arr[i][l];
    l--;   
}
console.log(sum1,sum2);



let candles=[]
let a=candles.sort();
let b=a[a.length-1];
let count=0;
candles.forEach((i)=>
{
    if(i===b)
    count++;
});
return count;