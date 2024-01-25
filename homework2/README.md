# React Homework2

## 바닐라 프로젝트의 동적 렌더링 UI를 리액트로 구현해보자

### 타잉 시안에서 동적 렌더링을 잘 보여줄 수 있는 부분이 별로 없는 것 같아서 타잉 데이터로 간단한 '더보기' UI를 구현해보았다.

---

### data source(프로젝트 때 사용했던 pockethost의 original_contents 컬렉션)

> ![Alt text](./src/assets/readme/db.png)

- 데이터를 json파일로 받지 않고 pocketbase api를 이용해서 바로 받아옴

### 아토믹 디자인 설계

- contents list를 3개씩 나눠서 버튼 클릭 시 렌더링 시킬것임
- Button, ContentCard(`<li></li>`)는 컴포넌트화
  ![Alt text](./src/assets/readme/components.png)
