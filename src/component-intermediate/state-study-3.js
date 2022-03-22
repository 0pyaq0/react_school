import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StateDemoComponent = function (props) {
    // 저장할 상태값과 관련된 제약이 없으므로 객체도 저장 가능
    const [state, setState] = useState({
        value1: "hello",
        value2: 1000
    })

    return (
        <div>
            <button onClick={() => {
                if (state.value1 === "hello") {
                    // 기존 객체를 복사하는 과정에서 새롭게 값을 갱신해주는 것을 확인 가능
                    // 값이 아닌 참조가 바뀌었는지 여부 확인 => 즉각 반응
                    setState({ ...state, value1: "bye" })


                    // 객체의 경우 값을 변경할 때 기존 객체의 내용을 복사하고 새롭게 갱신하고자 하는 속성값을 덮어쓰는(overwrite) 방식으로 값을 변경해야 함
                    // 즉, 다음과 같은 코드는 동작하지 않음을 유의
                    // 콘솔에 객체를 출력하면 객체 내부의 값이 제대로 변경된 것을 확인 가능, 하지만 컴포넌트에는 적용되지 않음
                    // 이유 => 변화를 빨리 감지하기 위한 최적화의 일환으로 내부적으로 객체 참조를 비교하기 때문
                    // if (state.value1 === "hello") {
                    //     state.value1 = "bye"
                    //     console.log(state)
                    //     setState(state)
                    // } else {
                    //     state.value1 = "hello"
                    //     console.log(state)
                    //     setState(state)
                    // }
                } else {
                    setState({ ...state, value1: "hello" })
                }
            }}>{state.value1}</button>
            <br />
            <button onClick={() => {
                setState({ ...state, value2: state.value2 * 2 })
            }}>{state.value2}</button>
        </div>
    )
}

ReactDOM.render(
    <StateDemoComponent />,
    document.getElementById("root")
)