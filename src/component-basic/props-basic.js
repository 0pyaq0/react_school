import React from 'react'
import ReactDOM from 'react-dom'

// props를 통해서 전달된 값에 접근 가능
const ComponentWithProps = function (props) {
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

// 컴포넌트로 name 속성값을 전달하면 "Hello, {name}"을 내용을 출력하는 h1 요소가 있는 Greeting 컴포넌트 정의
function Greeting({name}) { // {name, age}
    return <h1>Hello, {name}</h1> 
}

ReactDOM.render(
    // <ComponentWithProps value = {{ a: 1, b: "React" }}/>, 
    <Greeting name = "심이진"/>, // age = {20}
    document.getElementById("root")
)

// 구조 분해 할당 복습 필요