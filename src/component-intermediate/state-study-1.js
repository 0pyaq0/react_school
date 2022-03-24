// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Counter = function(props) {
    // useState 함수(훅)을 사용하여 상태값을 불러오고 상태값을 변경할 수 있음
    // 비구조화 할당을 이용하여 반환된 배열값을 분해하며 동시에 대입 작업을 진행
    // useState 함수 호출을 통해 반환받은 세터 함수를 호출해서 상태값이 바뀌면, 컴포넌트 함수가 재실행 됨
    // 세터함수 => setCount => 상태 변화 유발 => 내부적으로 렌더링 다시 시작 (re-render) => 컴포넌트 함수 재실행 
    const [ count, setCount ] = useState(0)

    return (
        <div>
            <h1>{count}</h1>
            <button onKeyPress={() => setCount(count + 1)}>증가</button>

            {/* Q) 감소 버튼 만들어보기 */}
            <button onClick={() => setCount(count - 1)}>감소</button>

            {/* (1) 이전 count 값을 참조하여 값을 수정해야 할 경우 */}
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {/* (2) 세터 함수에 이전 값을 참조하여 값을 수정하는 콜백 함수 전달 가능 */}
            <button onClick={() => setCount(previous => previous + 1)}>Click me</button> 
            {/* 2번이 더 나음 */}
        </div>
    )
}

ReactDOM.render(
    <Counter/>,
    document.getElementById("root")
)