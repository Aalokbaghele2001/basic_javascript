// a1 = [1, 2, 3, 4, 5, 6, 7, 8];
// a2 = [1, 2, 3, 1];
// // let count=0;
// // a2.forEach(i => {
// //     if(a1.includes(i))
// //     count++;  
// // });
// // console.log(count===a2.length);
// console.log(a1.includes(a2));

// if (this.length === 0) {
//     return -1;
//   } else {
//     return this[this.length - 1];
//   }


// let millis=2000;

//  new Promise((resolve, reject) => { setTimeout(() => { console.log("hello"); resolve(200); }, millis); });

let x=121;

var isPalindrome = function(x) {
    let rev=0;
    let a=x;
    while(x>0)
    {
        let r=x%10;
      
        rev=rev*10+parseInt(r);
        x=parseInt(x/10);
    }
    return rev;
    
};
console.log(isPalindrome(x));