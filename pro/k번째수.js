//문제: https://school.programmers.co.kr//learn/courses/30/lessons/42748
function solution(array, commands) {
    const answer = [];
    for(let i = 0; i < commands.length; i++){
        const start = commands[i][0];
        const end = commands[i][1];
        const search = commands[i][2];
        const value = array.slice(start-1, end).sort((a,b) => a-b); //두번째 케이스에서 오류났는데, 이렇게 명시적으로 적어야지 통과
        
        answer.push(value[search-1]);
    }
    return answer;
}

//참조: https://hianna.tistory.com/398
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort