//문제: https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        s = s.split(number).join(i); //replaceAll > 처음에는 replace로 했더니, 한개의 값만 치환 처리 
    }
    return Number(s);
}

