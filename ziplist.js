function zipList(a, b) {
  if (a.length !== b.length) {
    return 'arrays must be equal length.';
  }
  const resultArr = [];
  for (let i = 0; i < a.length; i++) {
    resultArr.push(a[i]);
    resultArr.push(b[i]);
  }
  return resultArr;
}

function zipListTheSimpleWay(a, b) {
  if (a.length !== b.length) {
    return 'arrays must be equal length.';
  }
  return _.flatten(_.zip(a, b));
}

const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];

console.log(zipList(listA, listB));
console.log(zipListTheSimpleWay(listA, listB));
