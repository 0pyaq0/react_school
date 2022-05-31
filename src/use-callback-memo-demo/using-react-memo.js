import React, { useState } from "react"
import ReactDOM from "react-dom"

// React.memo HoC를 사용할 경우 전달된 props를 얕은 비교하여 변경되었을 때에만 render 진행
const PersonInfo = React.memo(function(props) {
    console.log('render')

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
})

// 일반적인 컴포넌트의 경우 props의 변경 여부와 무관하게 re-render 진행
/*
const PersonInfo = (props) => {
    console.log('render')

    return (
        <div>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}
*/

// https://stackoverflow.com/questions/46240647/react-how-to-force-a-function-component-to-render
// props 값 변경안하고 그냥 render 하도록 클래스 컴포넌트의 forceUpdate 함수와 같은 역할을 하는 훅 정의
function useForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const Container = (props) => {
    const forceUpdate = useForceUpdate()

    return (
        <div>
            <PersonInfo name={"John"} age={20} />
            <button onClick={() => forceUpdate()}>force update</button>
        </div>
    )
}

ReactDOM.render(<Container />, document.getElementById("root"));