const testVar = {}

function testFunc() {
  return "hi"
}

// function superbowlWin = record.find( r=> r.result == "W")

function superbowlWin(record) {
  let winner = record.find(r => r.result === "W")
  return winner

}

superbowlWin()