function cutIt(arr){
  let newArr=[]
  let shortToLong = arr.reduce((a, b) => a.length <= b.length ? a : b)
  let shortest = shortToLong.length
  for (let x of arr){
    newArr.push(x.slice(0, shortest))
  }
  return newArr
}
