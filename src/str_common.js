const debug = function (arg) {
  console.log(arg);
  return arg;
};

const isEqual = (element1, element2) => element1 === element2;

const removeAll = (array, culprit) =>
  array.filter((element) => !isEqual(element, culprit));

const concatIfEqual = (array, char1, char2) => {
  return char1 === char2
    ? [...array.slice(0, -1), array.at(-1).concat(char1)]
    : [...array, ""];
};

const strCommon = function (str1, str2) {
  const common = [...str1].reduce(
    (arr, char, i) => concatIfEqual(arr, char, str2[i]),
    [""]
  );

  return removeAll(common, "");
};

export { strCommon };
