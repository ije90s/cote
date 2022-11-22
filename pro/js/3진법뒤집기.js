
//문제: https://school.programmers.co.kr//learn/courses/30/lessons/68935

function solution(n) {
    let value = '';
    let answer = 0;
    while(n>0){  
        value += (n%3);
        n = Math.floor(n/3);
    }
    value = value.split('').reverse().join('');
    for(let i =0; i < value.length; i++){
        answer += Number(value[i]) * (3 ** i);
    }
    
    return answer;
}
//참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation

function solution(n){
    
    const answer = n.toString(3).split('').reverse().join('');

    return parseInt(answer, 3);
}
//참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt

