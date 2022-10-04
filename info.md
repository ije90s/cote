- toUpperCase() vs toLowerCase()

  - toUpperCase(): 대문자 변환
  - toLowerCase(): 소문자 변환
  - charCodeAt(): 문자 > 아스키 변환
  - fromCharCode(): 아스키 > 문자 변환
  - 아스키 범위: 65~90: 대문자, 97~122: 소문자 > 32 차이

- subString() vs subStr()

  - subString(start, end): start 인덱스부터 end 인덱스 전까지 문자열 자르기
    slice()도 비슷
  - subStr(start, count): start 인덱스부터 count(개수)까지 문자열 자르기

- indexOf(찾을 문자, start)
  - 해당 문자의 인덱스 값 리턴 > start값이 없으면 처음부터 추적. start값이 있으면, start 인덱스부터 인덱스를 찾음
