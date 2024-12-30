const reversedString = (str) => {
  if (typeof str !== "string") {
    return "Invalid input, not a string";
  }

  if (str.trim() === "") {
    return "Invalid input, empty string";
  }

  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
};

const input = "hello";

console.log(reversedString(input));
