// 배열을 모두 true라고 선언
const arr = new Array(10001).fill(true);
arr[0] = false;

// 셀프넘버 체크
const selfFunctionMadeNumCheck = (num) => {
    let n = num, temp = num;
    
    while(temp > 0) {
        n += temp%10;
        temp = Math.floor(temp/10);
    }
    
    arr[n] = false; // 계산된 값은 생성자 존재하므로 false로 변경
}

const solution = () => {
    for (let i=1; i<10001; i++) {
        selfFunctionMadeNumCheck(i);
    }

    const ans = arr.reduce((acc, v, ind) => {
        if (v) {
            return acc + ind + '\n';
        } else return acc;
    }, '');

    console.log(ans);    
}

solution();


//참조: https://sengsung.tistory.com/157, https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

