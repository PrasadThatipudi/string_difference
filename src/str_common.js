const common = (sourceFmt, destFmt) => {
  let same = "";
  const difference = [];

  for (const index in destFmt) {
    if (sourceFmt[index] === destFmt[index]) {
      same = same.concat(sourceFmt[index]);
    } else {
      difference.push(same);
      same = "";
    }
  }
  if (same.length !== 0) difference.push(same);
  return difference;
};
