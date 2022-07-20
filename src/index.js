module.exports = function check(str, bracketsConfig) {

  let res = [];
  let arr = bracketsConfig.reduce((arr, item) => arr.concat(item), []);
  //console.log(arr);
  for (let elem of str) {
    let index = arr.indexOf(elem);
    //console.log(elem);
    //console.log(index);
    if (index % 2 === 0) {
      if (elem === arr[index + 1] && res.slice(-1).join("") !== elem) {
        res.push(elem);
      } else if (elem === arr[index + 1] && res.slice(-1).join("") === elem) {
        res.pop();
      }
      else {
        res.push(elem);
      }
    }
    else {
      if (arr[index - 1] !== res.slice(-1).join("")) {
        return false;
       } 
      if (res.length === 0) {
        return false;
      } 
      else {
        res.pop()
      }
    }

    //console.log(res);
  }
      
  
  //console.log(res.length);

  return res.length === 0;

}
