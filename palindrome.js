console.log(palindromeOrNot("mom"));
function palindromeOrNot(str){
    let reverseStr = ""; 

    for(let i=str.length-1;i>=0;i--){
        reverseStr += str[i];
    }
    if(reverseStr === str){
        return true;
    }
    return false;
}