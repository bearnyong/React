# 실습 문제
<p>
 여러분의 git 폴더에 00_traning 디렉토리를 만들고
 아래의 실습 내용을 폴더 구조에 맞추서 만들어 주세요
</p>

1. 02_expression-in-jsx.html를 참조하여 Hello world를 화면에 만들어 주세요

2. 1번 문제에 플래그 먼트를 추가해주세요

3. 2번 문제에 hello world를 추가한 엘리먼트에 id, class,를 hello 넣어주세요
    해당 엘리먼트를 클릭 하면 안녕이라는 팝업이 나오도록 해주세요
    hello world가 화면의 중앙에 오도록 하고 백그라운드 및 글자 색을 변경해주세요

4. 3번에 정의한 class를 인라인 속성으로 넣어주세요 

<br><br>

# JSX란?
createElement를 이용해 엘리먼트를 정의하면 복잡해지며 가독성 또한 좋지 않다.
그렇기에 ReactTeam은 ReactElement를 정의하는 JSX 문법을 제공한다.

* createElement란? <br>
찾아보고 오기,,,,,!!

<br>

## 00. JSX란?
<hr>
JavaScript의 확장된 문법으로, ReactElement를 xml 문법 형식으로 정의할 수 있는 방법이다. <br>
단, JSX는 공식적인 자바스크립트 문법은 아니며 바벨(babel)이라는 트랜스 파일링 툴이 필요하다.

* babel이란? <br>
여러가지 랭귀지들을 하나로 컴파일할 수 있게 해주는 역할로,<br>
ES6+, E5 next 문법을 ES5문법으로 변환해 주는 도구이다.

* babel 사용 방법(CDN)? <br>
1.바벨 CDN 구문을 추가한다. <br>
2.script 태그에 type 속성에 text/babel 속성을 추가한다.

<br>

### 00.1. React 및 babel Library 추가하기
<hr>

### [React Library]
React (<https://ko.legacy.reactjs.org/>) HOME
→ 문서→ 웹사이트에 react추가하기→ 2단계_스크립트 태그 추가하기

    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

### [babel Library]
    <script crossorigin src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<br><br>

## 01. JSX의 규칙
<hr>
여러 형제 레벨의 엘리먼트를 정의해야하는 경우 하나의 부모 엘리먼트로(div 태그와 같은) 감싸야 하는데 <br>
div 요소 같은 실질적인 요소를 사용하지 않으려면 Fragment를 이용할 수 있다. (react 16이전 버전에 추가됨)

1. 최상위 엘리먼트가 두 개 이상이면 에러가 발생된다.
2. <div> 태그로 감사서 하나의 돔 트리를 생성할 수 있도록 한다.
3. <React.Fragment>로 감싸서 형식상의 돔 트리상 상위 엘리먼트를 만들어준다.
4. React 라이브러리로부터 Fragment 객체만 구조분해 할당을 해주면 React.을 생략할 수 있다. (플래그먼트의 축약표현)

