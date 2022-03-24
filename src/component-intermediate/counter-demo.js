import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Counter = function(props) {
    const [count, setCount] = useState(0)
    const increase = () => setCount(prev => prev + 1)
    const decrease = () => setCount(prev => prev - 1)

    // Q1) 특정 숫자 값(amount)을 파라미터로 전달받아 count에 더해주는 add 함수 정의
    const add = (amount) => setCount(prev => prev + amount) // 이전 값 참조

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>

            {/* Q2) 5, 10만큼 증가시키는 버튼을 추가하여 Q1에서 정의한 add 메소드를 사용하도록 수정 */}
            <button onClick={() => add(5)}> 5 증가</button> 
            <button onClick={() => add(10)}> 10 증가</button> 
        </div>
    )
}

ReactDOM.render(<Counter />, document.getElementById("root"))