# life-cycle 실습

1. Mount 단계의 대하여 설명해주세요 (아무에게나)

2. update 단계의 대하여 설명해주세요 (아무에게나)

3. unmount 단계의 대하여 설명해주세요 (아무에게나)

4. 컴포넌트가 생성될 때 "생성됨", 랜더링 될때 "랜더링 됨", 랜더링 이후 "랜더링 완료됨"이라는 문구를 콘솔에 표시해 주세요.

5. 리로딩시 생명주기를 알아 보겠습니다. <br/>
props에서 전달된 내용을 넣어주는 메소드에서 'state 초기화' <br/>
리렌더링의 여부를 결정하는 메서드에서 '리렌더링을 하겠다.' <br/> 
랜더링 시점에서 '랜더링 됨' 렌더링 완료 후 '랜더링 완료됨'이라는 문구를 출력해주세요

<br><br>

# 00. Life-cycle-method(라이프 사이클 메소드)
컴포넌트의 라이프사이클(Life-cycle) 메소드(method)는 클래스형 컴포넌트에서만 사용 가능하며, 총 9가지이다. <br/><br/>

라이프 사이클은 총 3가지 카테고리로 나뉜다.
1. 마운트(mount): DOM이 생성되고 웹 브라우저상 나타나는 것
2. 업데이트(update): 컴포넌트의 상태가 바뀌는 경우 (4가지 상황)
<br> - Props변경
<br> - state변경
<br> - 부모 컴포넌트의 리 렌더링
<br> - this.forceUpdate로 강제 렌더링 트리거
3. 언마운트(unmount): 컴포넌트를 DOM에서 제거하는 것

<br><br>

## 01. 마운트 (mount)
<hr>
DOM이 생성되고 웹 브라우저상 나타나는 것 <br><br>

마운트(mount) 시 호출 순서
1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount

<br><br>

### 01.1. constructor
<hr>
마운트 시 바로 호출되는 친구, <br>
컴포넌트를 새로 만들 떄 마다 호출되는 클래스 생성자 메소드이다. <br><br>

컴포넌트를 만들 때 처음으로 실행되며 생성자 내에서는 state를 초기화 할 수 있다. <br>
(getDerivedStateFromProps)를 사용하려면 반드시 state를 초기화 해야한다. <br>
순수상태를 유지해야한다 -> 외부 API를 만들면 안됨

<br><br>

### 01.2. getDerivedStateFromProps
<hr>
props에 있는 값을 state에 넣을 때 사용하는 메소드 <br><br>

리액트 16.3 이후에 새로 만든 라이프 사이클 메소드이다. <br>
props로 받아온 값을 state에 동기화 시키는 용도로 사용하며, 마운트와 업데이트 시 호출된다. 

<br><br>

### 01.3. render
<hr>




<br><br>

### 01.4. componentDidMount
<hr>

