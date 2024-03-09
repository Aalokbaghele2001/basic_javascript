// let str1="aalok";
// console.log(str1,typeof str1);

// let str2='baghele "aalok"';
// console.log(str2 , typeof str2);

// /// `` => backtick in js template literal

// const newWay=`aalok baghele`;
// console.log(newWay);


// let fname="aalok";
// let lname="baghele";
// let age=23;
// console.log("my name is" ,fname,lname,"." ,"i am ",age,"years old.");
// console.log(`my name is ${fname} ${lname}. i am ${age} years old`);

// const patientDetails=`${fname} ${lname}, age" ${age}`;
// console.log(patientDetails);


///////////////////////////////////////////////////////////////////////

//in javascript strings are immutable means can't change value or character

// let str="aalokbaghele";
// str[0]="p";
// console.log(str);

///////////  STRING METHODS  

// let anystr = "Aalok Baghele";
// console.log(anystr);
// console.log(anystr.length);
// console.log(anystr.toUpperCase());
// console.log(anystr.toLowerCase());
// console.log(anystr);

// console.log(anystr.indexOf('o')); //  index of element
// console.log(anystr.indexOf('O')); /// if elements not exsist in string it will shows -1

// let anystr2=" welcome world";
// console.log(anystr.concat(anystr2));

// console.log(anystr.charAt(4)); // charcater at index

// console.log( "       aalok      ".trim()); /// remove whitespaces in first and last of the string 
// // it will not touch in between of string 

// ////////////////////////////////////////////////////////////////////////
// // slice()

// let str="aalok baghele welcome";
// console.log(str.slice(3));
// console.log(str.slice(3,9));

// console.log(str.slice(-9));
// console.log(str.slice(-9,-3));

// let str2="hi this aalok from ak . hii aalok how are you aalok you feeling well in this world";

// console.log(str2.replace("aalok","rohan")); // it will replace only first instance
// console.log(str2.replaceAll("aalok","rohan")); // it will replace all word with new word

// let str3="hi this Aalok from ak . hii aalOk how are you aaloK you feeling well in this world";

// const regex =/aalok/i;
// console.log(str3.replace(regex,"rohan"));
// const regex1 =/aalok/gi;
// console.log(str3.replaceAll(regex1,"rohan"));

// const elements="air water fire";
// console.log(elements.split(" ")); // it converted into array

// const url="https://www.airmeet.com/event/123";
// let splited=url.split("/");
// console.log(splited);
// console.log(splited[splited.length-1]);

// /// hackerrank , lead code , prepinsta 


// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.at(8));

// console.log(sentence.endsWith("dog."));  /// when string endwith  "dog." argument it gives true
// console.log(sentence.endsWith("fox",16));

// console.log(sentence.includes("brown"));
// console.log(sentence.includes("overs"));

// console.log(sentence.indexOf("dog."));

// const a = 'réservé'; // With accents, lowercase
// const b = 'RESERVE'; // No accents, uppercase
// console.log(a.localeCompare(b));

// console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));

// let s="Hello, world!";
// let a= s.split(" ").reverse().join(" ");
// console.log(a);


// let r= "Madam In Eden, I'm Adam";
// let r1=r.split(" ").reverse().join("");
// console.log(r1.toLowerCase());

// let ar=[1, 2, 3, 4, 5];
// let n=2;
// for(let i=1;i<=n;i++)
// ar.unshift(ar.pop())

// console.log(ar);



// const str="The quick brown fox jumps over the lAzy DOg. It barked.";
// const regex=/[A-Z]/g;
// console.log(str.match(regex));

// console.log(str.replace("brown","white"));
// const regex1=/doG/i;
// console.log(str.replace(regex1,"cat"));
// console.log(str.replace("lazy","hard"));
// const regex2=/lazy/i;
// console.log(str.replace(regex2,"hard"));



const str1="I am cat think Ruth's dog is cAt cuter than Cat your caT and  dog!";
console.log(str1.replaceAll("dog","monkey"));

// console.log(str1.replaceAll("cat","rabbit"));
// const regex=/cat/gi;
// console.log(str1.replaceAll(regex,"rabbit"));

let str2=str1.replace(/[^A-Z]/g,"");
console.log(str2);

// const paragraph = "I thiwnk Ruth'S dog is cuter thawn your dog!";
// const regex=/[^\w\s]/g;
// console.log(paragraph.search(regex));



