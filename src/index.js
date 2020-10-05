module.exports = function check(str, bracketsConfig) {
  let typeBracket = [];
  let lifo = [];
  
  if (str.length % 2 !== 0)
    return false;
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    typeBracket.push( { 
      opnBrText: bracketsConfig[i][0],
      clsBrText: bracketsConfig[i][1]
    });
  }

  //debugger;
  for (let i = 0; i < str.length; i++) {
    let fndOpened = (typeBracket.find(op => str[i] === op.opnBrText)); 
    let fndClosed = (typeBracket.find(op => str[i] === op.clsBrText));

    if (i === 74) debugger;
    if (fndOpened !== undefined) {
      if (fndOpened === fndClosed) { 
        if (fndOpened.opnBrText !== lifo[lifo.length-1])
          lifo.push(fndOpened.clsBrText);
        else
          lifo.pop();
      }
      else {
        lifo.push(fndOpened.clsBrText);
      }
    }
    else {
      if (fndClosed != undefined) {
        if (str[i] !== lifo[lifo.length-1]) {
          return false;
        }
        else {
          lifo.pop();
        }  
      }
      else
        return false;
    }      
  }
  if (lifo.length > 0)
    return false;
  
  return true;
}