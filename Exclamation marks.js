/*

Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"


*/

function remove (string) {
    //coding and coding....
    return string.split("")[string.length-1]=='!'? string.split("").slice(0,-1).join(""):string;
}

console.log(remove('Hi!'));
console.log(remove("Hi!!!"));
console.log(remove('!Hi!'));
console.log(remove('!Hi'));
console.log(remove('Hi! Hi!'));
console.log(remove('Hi'));