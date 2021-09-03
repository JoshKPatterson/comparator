export const randomNum = (limit) => Math.floor(Math.random() * limit)
// const randomNum = (limit) => Math.floor(Math.random() * limit)

export const createBouts = (lengthOfQueue, sizeOfDB) => {
  let arr = [];
  for(let i = 0; i < lengthOfQueue; i++){
    arr.push({ bout1: randomNum(sizeOfDB), bout2: randomNum(sizeOfDB)});
  }
  return arr;
}

export const nextBout = (boutQueue, updateActionFunc) => {
  let a = boutQueue;
  a.shift();
  updateActionFunc({
    newQueue: a,
    newCurrent: a[0]
  })
}

export const addNewBouts = (currentBout, numToAdd, sizeOfDB, updateActionFunc) => {
  let a = createBouts(numToAdd, sizeOfDB);
  // return currentBout.push(...a);
  updateActionFunc({
    newQueue: currentBout.push(...a)
  })
}