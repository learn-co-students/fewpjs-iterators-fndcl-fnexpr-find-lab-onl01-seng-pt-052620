const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const winner = arr.find(record => { return record.result === 'W' })
  if (winner) {
    return winner.year
  }
}
