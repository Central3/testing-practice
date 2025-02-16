function isAlphabet(char) {
  const alphabets = /[A-Za-z]/;
  return alphabets.test(char);
}

function isLower(char) {
  return /[a-z]/.test(char);
}

function convertToCode(str) {
  const codeArray = [];
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    codeArray.push(code);
  }

  return codeArray;
}

export default function encrypt(str, shiftFactor) {
  // 1. convert string to array of codes
  // 2. add shift factor to each code
  // 3. join the resulting code array converted to alphabets
  let codeArray = convertToCode(str);
  shiftFactor %= 26;
  codeArray = codeArray.map((code) => {
    const codeToChar = String.fromCharCode(code);
    if (isAlphabet(codeToChar)) {
      if (isLower(codeToChar) && code + shiftFactor > 122) {
        let remainingShiftFactor = code + shiftFactor - 122;
        code = remainingShiftFactor === 0 ? 97 : 96;
        return code + remainingShiftFactor;
      } else if (!isLower(codeToChar) && code + shiftFactor > 90) {
        let remainingShiftFactor = code + shiftFactor - 90;
        code = remainingShiftFactor === 0 ? 65 : 64;
        return code + remainingShiftFactor;
      }
      return code + shiftFactor;
    }
    return code;
  });
  const encryptedTxt = codeArray
    .map((code) => String.fromCharCode(code))
    .join("");
  return encryptedTxt;
}
