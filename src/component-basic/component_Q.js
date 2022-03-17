import React from 'react'
import ReactDOM from 'react-dom'

const PersonProfileWithUserObject = function(props) {
    const {name, age, gender, profile} = props.person
    return (
        <div className='person'>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

const person = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}
const { name, gender, ...rest } = person




ReactDOM.render(
    <div>
        {/* Q) 똑같은 결과를 내되, 아래와 같이 쓸 수 있게 코드를 변경해보기 */}
        <PersonProfileWithUserObject person = {person} /> 
    </div>,
    document.getElementById("root")
)