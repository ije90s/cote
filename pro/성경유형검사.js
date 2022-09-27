//문제: https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
    const points = [3, 2, 1, 0, 1, 2, 3];
    const pointBoard = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0,
    };
  let result = "";

  // 카테고리 별 점수 추가
  for (let i = 0; i < survey.length; i++) {
    const categories = survey[i];
    if (choices[i] < 4) {
      pointBoard[categories[0]] += points[choices[i] - 1];
    } else if (choices[i] > 4) {
      pointBoard[categories[1]] += points[choices[i] - 1];
    }
  }

  const pointBoardEntries = Object.entries(pointBoard);

  // 지표에 맞게 결과 값 도출
  for (let i = 0; i < pointBoardEntries.length; i += 2) {
    const [curCategory, curValue] = pointBoardEntries[i];
    const [nextCategory, nextValue] = pointBoardEntries[i + 1];

    if (curValue < nextValue) {
      result += nextCategory;
    } else {
      result += curCategory;
    }
  }

  return result;
}