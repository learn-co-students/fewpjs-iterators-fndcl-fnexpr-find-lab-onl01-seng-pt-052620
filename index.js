const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  const winner = array.find(record => { return record.result === 'W' })
  if (winner) {
    return winner.year;
  };
}