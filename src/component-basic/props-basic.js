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

// 함수 인자값을 전달받으면서 비구조화 할당 진행
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
const { name, gender, ...rest } = anotherPerson
console.log(rest) // {age : 28, profile : ~~~~~~} = 나머지



ReactDOM.render(
    // <ComponentWithProps value = {{ a: 1, b: "React" }}/>, 
    /*<Greeting name = "심이진"/>, // age = {20}
    document.getElementById("root")*/
    <div>
        {/*<PersonProfile 
            name='John' 
            age={35} 
            gender='male'
            profile='https://randomuser.me/api/portraits/men/75.jpg'/>*/}
        {/*<PersonProfile {... anotherPerson} highlight /> = <PersonProfile name={anotherPerson.name} .. 이 코드와 같다 */}
        
        {/* 여기서 age는 뒤의 ...rest에 의해서 overwrite 됨. 먼저 rest로 없는 정보 복사한 후 뒤에 있는 정보로 다시 세팅*/}
        <PersonProfile {...rest} name='Ken' gender='male' age={32} /> 
    </div>,
    document.getElementById("root")
)

// 구조 분해 할당 복습 필요