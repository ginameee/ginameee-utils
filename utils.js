const snakeToCamel = (str) =>
  str.replace(/([-_][a-z,\d])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", "")
  );

exports.snakeToCamel = snakeToCamel;
