//문제: https://school.programmers.co.kr//learn/courses/30/lessons/42840
//배열 부분 부족
function solution(answers) {
    var answer = [];
    const score = [];
    const patternA = [1,2,3,4,5];
    const patternB = [2,1,2,3,2,4,2,5];
    const patternC = [3,3,1,1,2,2,4,4,5,5];
    
    //값이 다르더라도 나머지는 항상 일정한 인덱스로 반환(패턴 반복) 
    score.push(answers.filter((a, i) => a === patternA[i % patternA.length]).length);
    score.push(answers.filter((a, i) => a === patternB[i % patternB.length]).length);
    score.push(answers.filter((a, i) => a === patternC[i % patternC.length]).length);

    for (let i = 0; i < score.length; i++) {
        const max = Math.max(...score); //max로 정렬
        if (score[i] === max) {
          answer.push(i + 1); //맥스값이 큰값부터 순서대로 
        }
    }

    return answer;
}