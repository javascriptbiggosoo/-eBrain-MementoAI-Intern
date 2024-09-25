// x = new Number()를 해두면 에디터에서 메소드 자동완성이 되는게 편해서 js 함수에서 종종 이용했습니다.
function solution(x = new Number(), n = new Number()) {
  let answer = [];

  // "ctrl + F" 에 용이해 i 보다 ii를 선호합니다.
  for (let ii = 1; ii < n + 1; ii++) {
    answer.push(x * ii);
  }

  return answer;
}

// console.log(solution(2, 5)); // [ 2, 4, 6, 8, 10 ]
// console.log(solution(4, 3)); // [ 4, 8, 12 ]
// console.log(solution(-4, 2)); // [ -4, -8 ]
