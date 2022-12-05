#!/usr/bin/env node

const fs = require("fs");
const { snakeToCamel } = require("./utils");

const [, , ...fileNames] = process.argv;

const convert = (filePath) => {
  fs.readFile(filePath, function (err, buf) {
    fs.writeFile(
      `${filePath}.converted`,
      snakeToCamel(buf.toString()),
      (err) => {
        if (err) {
          console.log(err);
        }

        console.log("Successfully Written to File.");
      }
    );
  });
};

fileNames.forEach((fileName) => {
  convert(fileName);
});
