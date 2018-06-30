function toCapital(str) {
  let underscore = str.indexOf("_");
  let first =
    str
      .charAt(0)
      .toString()
      .toUpperCase() + str.substring(1, underscore);
  let second =
    str
      .charAt(underscore + 1)
      .toString()
      .toUpperCase() + str.substring(underscore + 2);
  return first + " " + second;
}

function toId(str) {
  return str
    .toLowerCase()
    .split(" ")
    .join("_");
}

export { toCapital, toId };
