import React from 'react'
import ReactDOM from 'react-dom'

// props의 children 속성을 통해 문자열 혹은 자식 태그(혹은 컴포넌트) 접근 가능
const Child = props => <div>{props.children}</div>

const ChildWithFunctionProp = props => <div>{props.children()}</div>

const ChildWithRenderProp = props => <div>{props.render()}</div>

const Card = function(props) {
    return (
        <div style={{
            width: props.width, height: props.height,
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px"
        }}>
            {props.children}
        </div>
    )
}

const PersonProfile = function({ name, age, gender, profile, highlight }) {
    return (
        <div className='person' style={highlight ? {color: 'red'} : null}> {/* highlight 값이 없기 때문에 ( = false) null 반환 */}
            <h1>Profile</h1>
            <img src={profile} />
            <p>name st: {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}



ReactDOM.render(
    <>
    {/*children 값은 "Hello" 글자가 포함된 텍스트 노드*/}
    <Child>Hello</Child>

    {/* function prop : JSX를 반환하는 함수를 children을 통해서 전달하는 리액트 기법 */}
    <ChildWithFunctionProp>
        {() => <div>Function Prop</div>}
    </ChildWithFunctionProp>

    {/* render prop : JSX를 반환하는 함수를 render prop 값을 통해서 전달하는 리액트 기법 */}
    <ChildWithRenderProp render={() => <div>Render Prop</div>} />

    <Card>Hello</Card>

    <Card>
        <PersonProfile person = {anotherPerson} />
    </Card>

    </>
    ,
    document.getElementById("root")
)