import React from 'react'
import ReactDOM from 'react-dom'

// 함수를 이용해서 정의하는 함수형 컴포넌트 작성 컴포넌트의 이름은 FirstComponent (컴포넌트 이름은 마음대로 지어도 되지만
// 첫 글자는 반드시 대문자로 해야 함)
function FirstComponent() {

    // JSX를 이용하여 컴포넌트에서 보여줄 내용을 작성하고 반환
    return <div>My First Component!</div> // 태그 형식으로 작성해야 함

}

function HelloWorld() {
    return <h1>Hello, World!</h1>
}

// render 메서드를 이용해서 컴포넌트 렌더링 진행 두 번째 전달값은 public/index.html 파일에 포함된 실제 렌더링이 진행될
// id가 "root"인 div 요소
ReactDOM.render(
    <div>
        <FirstComponent/>
        <HelloWorld/>
    </div>,
    document.getElementById("root")
)