
function orderByProps(inputObj, array) {
  const sourceObj = inputObj;
  const restProp = [];
  const targetProp = [];


  for (let i = 0; i < array.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(inputObj, array[i])) {
      targetProp.push({
        key: array[i],
        value: inputObj[array[i]],
      });
      delete sourceObj[array[i]];
    }
  }
  for (const prop in sourceObj) {
    if (array.indexOf(prop) === -1) {
      restProp.push({
        key: prop,
        value: sourceObj[prop],
      });
    }
  }

  restProp.sort((a, b) => b.value - a.value);

  const output = [...targetProp, ...restProp];
  return output;
}

export default orderByProps;
