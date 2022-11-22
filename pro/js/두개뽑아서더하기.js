//문제: https://school.programmers.co.kr//learn/courses/30/lessons/68644

function solution(numbers) {
    var answer = [];
    for(let i=0; i < numbers.length; i++){
        for(let j=i+1; j < numbers.length; j++){
            const sum = numbers[i] + numbers[j];
            if(!answer.includes(sum)) answer.push(sum);
        }
    }
    return answer.sort((a,b) => a-b);
}