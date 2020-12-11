const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  const found = array.find(element => element.result === "W");
  if(found)
    return found.year
  else
   return found

}