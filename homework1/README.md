# React Homework1

## 바닐라 프로젝트의 ui를 React로 구현해보자.

### search modal을 반응형으로 구현해보았다.

- break point
  - tablet: 768
  - desktop: 1280
- 구현 항목 세부
  - input:search로 검색어 입력
  - button:submit으로 검색 버튼
  - 최근 검색어, 실시간 인기 검색어 리스트
    - 실시간 인기 검색어는 const data = []에 object를 담아 filter로 정렬하여 map으로 출력
    - 실시간 인기검색어 기준 시간은 `<time></time>`에 현재 시간을 `new Date`로 받아와서 출력
- 그 외 사항들
  - 컴포넌트를 나눠서 모듈 방식으로 과제 수행
  - 과제 환경설정을 하면서 Vite로 React환경설정하는 법을 익혔음
  - 과제별로 독립적인 환경을 구성할 수 있도록 함

기능은 구현하지 않음.
