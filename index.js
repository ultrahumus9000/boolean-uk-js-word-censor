const text =
  "Lorem, ipsum dolor sit amet, consectetur adipisicing elit, \
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit \
  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
  Excepteur sint occaecat cupidatat non proident, \
  sunt in culpa qui officia deserunt mollit anim id est laborum.";

//   Use the provided string as a text input to be censored
// - Create a function that takes a replacement string, a word to censor, and censors the text input
// - Print out the censored text to the console

// Tips
// - Remember that sometimes you have to change your data from one type to another, ex. string -> [array of strings]
// - Remember that functions should do only one thing very well
// - Think of how you can make your code readable by using functions
// task 1

console.log(text)
function censorword(searchword,replacementword){
  const textArray = text.split(' ')
  for(let i = 0; i <= textArray.length ; i++ ){
    if( textArray[i] === searchword){
      textArray[i] = replacementword
    }
  }
 let text = ''
   for(let item of textArray ){
     text = text + item
   }
  console.log(text)
}
// task 1 finished and here is another basic task due to misunderstanding the task

function censor(text,replaceString,wordtosensor){
 const textArray = text.split(' ')
 let count = 0
 for(let i = 0; i <= textArray.length ; i++ ){
  if( textArray[i] === wordtosensor){
    textArray[i] = replaceString
    count++
  }
}
let sensoredtext = ''
 for(let item of textArray ){
  sensoredtext = sensoredtext + item
 }
console.log(sensoredtext)
console.log(`you changed ${count} words due to censorwords`)
}

//method 2 but i have not figured out about how to count
function censoreasymode(text,replaceString,wordtosensor){
  return text.split(wordtosensor).join(replaceString)
}
 