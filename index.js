const testVar = {}

function testFunc() {
  return "hi"
}

// [1, 3, 5, 6, 8].find(function(e){
//   return e % 2 === 0
// })


// let roommates = ["jess", "winston", "winston", "nick"]; 

// roommates.find(function (s){
//   return s === "winston"
// })

// roommates.filter(function(s){
//   return s === "winston"
// })


function superbowlWin(record){
 let result = record.find(record => record.result === "W")
  return !!result ? result.year : undefined 
}