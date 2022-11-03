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

- isNaN(x)

  - 숫자인지 판별. 숫자이면 false, 숫자가 아니면 true

- 투포인터 알고리즘

  - 시간복잡도 O(n)인 두개의 포인터를 사용하여 문자열이나 배열에서 원하는 값을 찾을 때 사용하는 알고리즘

- 슬라이딩 알고리즘

  - 시간복잡도가 O(n^2)인 두개의 포인터가 같이 일정한 크기만큼 윈도우가 이동하듯이 배열에서 원하는 값을 찾을 때 사용하는 알고리즘

- 해쉬
  - key, value의 쌍으로 데이터가 저장되어 있는 자료구조
  - 대표적인 예로는 Map
