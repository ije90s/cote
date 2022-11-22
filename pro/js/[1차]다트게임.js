//문제: https://school.programmers.co.kr//learn/courses/30/lessons/17682
function solution(dartResult) {
    var answer = 0;
    let score = 0;
    const cnt = [];
    for(let i =0; i< dartResult.length; i++){
        const dart = dartResult[i];
        if(dart === 'S'){
            cnt.push(score);
        }else if(dart === 'D'){
            score = Math.pow(score, 2);
            cnt.push(score);
        }else if (dart === 'T'){
            score = Math.pow(score, 3);
            cnt.push(score);
        }else if (dart === '#'){
            cnt[cnt.length-1] = cnt[cnt.length-1] * -1;
        }else if (dart === '*'){
            cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
            cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
        }else{
            if (!isNaN(dartResult[i])) {
               // i가 1인 경우는 10점, 그외에는 점수
               score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
            }
        }
    }
    answer = cnt.reduce((acc, cur) => acc + cur, 0);
    return answer;
}
//참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN

//다른 풀이 방법(정규식 이용)
function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);  //[숫자+문자] 조합으로 값 쪼개기 

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/), // [숫자+제곱+옵션] 형태인지 체크한 다음에 
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]]; // 점수 계산

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*']; //더블인 경우에는 이전 값도 더블 중첩

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}