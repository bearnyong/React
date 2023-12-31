# State 실습

1. 클래스형 컴포넌트를 이용하여 text라는 state를 만들어주세요.<br>
input 창의 내용이 입력됨에 따라 h1, /h1내부의 값이 변경되도록 해주세요

2. 위 내용을 함수형 컴포넌트로 동일하게 만들어 주세요

3. State의 대하여 우리반 내부의 1인에게 설명해주세요.

<br><br>

# 00. State란?
state는 컴포넌트 내부에서 바꿀 수 있는(바뀔 수 있는) 값을 의미한다.<br><br>

props는 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하고 주는 읽기 전용 값이지만, state는 컴포넌트 내부에서 설정되는 값이다.<br><br>

우리는 state의 변경되는 값을 관리하며 다양한 작업을 진행할 수 있다.<br>
리액트는 클래스형 컴포넌트에서 state를 직접 사용할 수 있다.<br><br>

하지만 함수형 컴포넌트에서 직접 state를 사용하는 것이 불가능하다.<br>
(함수형 컴포넌트에서만 hooks를 사용할 수 있다.)<br>
따라서 함수형 컴포넌트에서도 state를 관리할 수 있는 기능은 useState라는 hooks을 제공하고 있다.<br><br>

hooks는 다른 챕터에서 다시 구체적으로 다루겠지만 state 부분에서 함수형 컴포넌트의 상태를 관리하는 것을 잠시 useState로 살펴볼 것이다.<br>

<br>

## 01. 생성자 안에서 state 사용하기
<hr>

1. state는 this.을 명시해야 한다.
2. 이름은 반드시 state여야 한다.
3. state에 저장되는 값의 형태는 반드시 Object 리터럴 형태로 작성해야 한다.

ex. 변경되어 관리할 값 (초기 값)

    this.state = {
        number : 3
    }

<br>

### 01.1. state에 변화주기
<hr>
state에 객체 형태로 컴포넌트가 관리할 값들이 저장되어 있을 때,<br>
state에 변화를 주고 싶으면 state 객체의 프로퍼티에 직접 접근해서 수정하거나 state 객체를 직접 새로운 객체로 바꾸는 것이 아닌 <br>
state의 setter 메소드를 호출하고 관리할 값에 변화를 준 새로운 객체를 인수로 전달해야 한다.

<br>

### 01.2. state에 변화를 줘서 render 재호출
<hr>
setState()을 통해 state에 변화를 주면 자동으로 render()는 재호출 된다.(라이프 사이클) <br>
그러면 Render()가 반환하는 새로운 엘리먼트로 가상 DOM에 갈아끼우게 되고 실제 DOM tree와 차이가 나는 부분만 확인해서 다시 그려준다.
