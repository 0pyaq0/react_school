import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Counter = function(props) {
    const [ count, setCount ] = useState(0)
    const [text, setText] = useState("a")

    return (
        <div>
            <h1>{count}</h1>
            <button onKeyPress={() => setCount(count + 1)}>증가</button>

            <h1>{text}</h1>
            <button onClick={() => setText(text + "a")}>a 추가</button>
        </div>
    )
}

ReactDOM.render(
    <Counter/>,
    document.getElementById("root")
)