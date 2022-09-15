//문제: https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    let total = 0; 
    for(let i = 1; i <= count; i++){
        total+=(i*price);
    }
    
    return (total-money) < 0 ? 0 : total-money;
}

//다른 풀이(가우스 공식)
// (count+1) / 2 > 등차수열(1+2+...+n까지의 합)
// 전체 합산한 값 * count * price  : 지불 금액
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}