import React from 'react'
import ReactDOM from 'react-dom'

// 함수 선언식을 통해서 컴포넌트 정의 가능
function Cat() {
    return <div>🐱</div>
}

// 함수 표현식을 통해서 컴포넌트 정의 가능
const Dog = function () { // 이름이 없는 함수. Dog가 이름이 된다.
    return <div>🐶</div>
}

// 화살표 함수로 컴포넌트 정의 가능
const Pig = () => <div>🐷</div>
function AnimalContainer() {
    return (
        /* 일반적인 태그 사용 가능 */
        /* div가 아닌 <React.Fragment>, </> (<- fragment 줄임말) 사용 가능. 단 실제로 그려지지 않는 논리적으로만 존재하는 요소임 */
        <div style={{fontSize: "100px"}}>
            {/* 이미 정의한 컴포넌트들도 JSX 내부에서 사용 가능 */}
            <Cat/>
            <Dog/>
            <Pig/>
        </div>
    )
}
ReactDOM.render(<AnimalContainer/>, document.getElementById("root"))