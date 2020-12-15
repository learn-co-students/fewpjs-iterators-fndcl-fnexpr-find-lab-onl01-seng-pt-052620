const testVar = {}

function testFunc() {
  return "hi"
}

// function superbowlWin = record.find( r=> r.result == "W")
function superbowlWin(record) {
  const winner = record.find(({ result }) => result === "W");
  return (winner ? winner.year : undefined)

}