const testVar = {}

function testFunc() {
  return "hi"
}



function superbowlWin(record){
  const chiefsWin = record.find(({result}) => result === 'W' )
  
  if (!!chiefsWin)
    return chiefsWin.year
  else
    return chiefsWin
  
}