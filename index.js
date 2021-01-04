

//looking in test indexTest they use record ass the array being passed so we call find on record 
superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}

// check truthiness of result to be undefined