//문제: https://school.programmers.co.kr//learn/courses/30/lessons/12906

function solution(arr)
{
    return arr.filter((element, index) => element !== arr[index + 1]);
}

//참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter