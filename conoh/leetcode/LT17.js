function letterCombinations(digits) {
  if (digits.length === 0) return [];

  const phoneMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function backtrack(index, path) {
    if (index === digits.length) {
      result.push(path.join(""));
      return;
    }

    const letters = phoneMap[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i]);
      backtrack(index + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}
