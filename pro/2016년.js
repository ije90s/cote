// 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript
function solution(a, b) {
    const weekArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const day = new Date(2016, a-1, b); 
    const weekDay = day.getDay(); 
    const answer = weekArr[weekDay];
    return answer;
}
// 참조: https://mizzo-dev.tistory.com/entry/JavaScript%EB%82%A0%EC%A7%9C-Date-%ED%99%9C%EC%9A%A9%ED%95%B4%EC%84%9C-%EC%9A%94%EC%9D%BC-%EA%B5%AC%ED%95%98%EA%B8%B0