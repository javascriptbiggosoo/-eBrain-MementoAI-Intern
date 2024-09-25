function solution(phoneNumber = new String()) {
  let answer = "";

  const pnLen = phoneNumber.length;
  answer = "*".repeat(pnLen - 4) + phoneNumber.slice(pnLen - 4, pnLen);

  return answer;
}

// console.log(solution("01033334444")); // *******4444
// console.log(solution("027778888")); // *****8888
