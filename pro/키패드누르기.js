//문제: https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    var answer = '';
    const num_array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
    ];
    
    let lx = 3; 
    let ly = 0; 
    let rx = 3; 
    let ry = 2;
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j <num_array.length; j++){
            let y = num_array[j].indexOf(numbers[i]);
            if(y === 0){
                answer += "L";
                lx = j;
                ly = 0;
            }else if(y === 2){
                answer += "R";
                rx = j;
                ry = 2;
            }else if(y === 1) {
                let r_dis = Math.abs(j - rx) + Math.abs(y - ry);
                let l_dis = Math.abs(j - lx) + Math.abs(y - ly);
                
                if(r_dis < l_dis){
                    answer += "R";
                    rx = j;
                    ry = y;
                }else if(r_dis > l_dis){
                    answer += "L";
                    lx = j;
                    ly = y;
                }else{
                    if(hand === 'right'){
                        answer += 'R';
                        rx = j;
                        ry = y;
                    }else{
                        answer += 'L';
                        lx = j;
                        ly = y;
                    }
                }
            }
        }
    }
    return answer;
}

function solution(numbers, hand) {
    var answer = '';

    let currentLeft = '*';
    let currentRight = '#';

    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number === 1 || number === 4 || number === 7){
            answer+='L';
            currentLeft = number;
        }else if(number === 3 || number === 6 || number === 9){
            answer+='R';
            currentRight = number;
        }else{
            const leftDistance = getDistance(currentLeft, number);
            const rightDistnace = getDistance(currentRight, number);

            if(leftDistance < rightDistnace){
                answer += 'L';
                currentLeft = number;
            }else if(leftDistance > rightDistnace){
                answer += 'R';
                currentRight = number;
            }else{
                if(hand === "right"){
                    answer += 'R';
                    currentRight = number;
                }else{
                    answer += 'L';
                    currentLeft = number;
                }
            }
        }
    }

    return answer;
}

const getDistance = (locatedNumber, target) => {
    const keyPad = {
      1: [0, 0], 2: [0, 1], 3: [0, 2],
      4: [1, 0], 5: [1, 1], 6: [1, 2],
      7: [2, 0], 8: [2, 1], 9: [2, 2],
      '*': [3, 0], 0: [3, 1], '#': [3, 2],
    }
  
    const nowPosition = keyPad[locatedNumber];
    const targetPosition = keyPad[target];
  
    return Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1] - nowPosition[1]);
};

