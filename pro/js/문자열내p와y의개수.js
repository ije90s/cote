//문제: https://school.programmers.co.kr//learn/courses/30/lessons/12916

function solution(s){
    let pLen = 0, yLen = 0;
    s = s.toLowerCase(); 
    s.split('').map(v => {
        if(v === 'p') pLen++;
        else if(v === 'y') yLen++;
    });
    
    return pLen === yLen ? true : false;
}

//다른 풀이
function solution(s){

    return s.toLowerCase().split('p').length === s.toLowerCase().split('s').length;
}