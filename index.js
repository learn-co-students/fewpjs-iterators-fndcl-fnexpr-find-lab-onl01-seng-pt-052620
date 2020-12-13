function superbowlWin(records) {
  let win = records.find(o => o.result === "W");
  return win ? win.year : undefined;
}