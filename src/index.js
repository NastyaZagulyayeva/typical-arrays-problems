
exports.min = function min(array) {
  if (!Array.isArray(array) || (Array.isArray(array) && array.length < 1)) {
    return 0;
  }
  let a = Math.min(...array);
  return a;
}

exports.max = function max(array) {
  if (!Array.isArray(array) || (Array.isArray(array) && array.length < 1)) {
    return 0;
  }
  let a = Math.max(...array);
  return a;
}

exports.avg = function avg(array) {
  if (!Array.isArray(array) || (Array.isArray(array) && array.length < 1)) {
    return 0;
  }
  return array.reduce((acc, value) => {
    acc += value;
    return acc;
  }, 0) / array.length;
}
