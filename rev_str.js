console.log(rerverseString("mahes"));


// function rerverseString(str){
//     let rev="";
//     console.log(str.length-1);
//     for(let i=str.length-1;i>=0;i--){
//         console.log(str[i]);
//         rev += str[i];
//     }
//     return rev;
// }
 function rerverseString(str){
return str.split("").reverse().join();
 }
