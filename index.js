const testVar = {}

function superbowlWin(array) {
  let result = array.find(i => i.result === "W")
  return result ? result.year : undefined
}
