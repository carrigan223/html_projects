function isString(a, b, c) {
  let type_a = typeof a;
  let type_b = typeof b;
  let type_c = typeof c;
  let same_type = "not strings";

  //how the iff statement was handling the check was throwing an error on the last version
  if (
    type_a === typeof same_type &&
    type_b === typeof same_type &&
    type_c === typeof same_type
  ) {
    same_type = "strings";
  }
  return same_type;
}

console.log(isString(1, "abc", "cde"));
