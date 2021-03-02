// Your code here
const mapToNegativize = (sourceArray) => {
  return sourceArray.map((x) => x * -1);
};

const mapToNoChange = (sourceArray) => {
  return sourceArray;
};

const mapToDouble = (sourceArray) => {
  return sourceArray.map((x) => x * 2);
};

const mapToSquare = (sourceArray) => {
  return sourceArray.map((x) => x ** 2);
};

const reduceToTotal = (sourceArray, startingPoint = 0) => {
  const reducer = function (accumulator, currentValue) {
    return accumulator + currentValue;
  };
  return sourceArray.reduce(reducer, startingPoint);
};

const reduceToAllTrue = (sourceArray) => {
  const reducer = function (accumulator, currentValue) {
    if (!!accumulator == true && !!currentValue == true) {
      return true;
    } else {
      return false;
    }
  };
  return sourceArray.reduce(reducer, true);
};

const reduceToAnyTrue = (sourceArray) => {
  const reducer = function (accumulator, currentValue) {
    if (accumulator == true) {
      return true;
    } else {
      return !!currentValue;
    }
  };
  return sourceArray.reduce(reducer, false);
};
