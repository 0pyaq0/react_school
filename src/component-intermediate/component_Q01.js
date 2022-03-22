import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const UserProfile = function(props) {
    const [ userName, setUserName ] = useState("심이진")
    const [ userAge, setUserAge ] = useState(19)
    const [ emailAddress, setEmailAdress ] = useState("s2011@e-mirim.hs.kr")

    return (
        <div>
            <h1>이름 : {userName}</h1>
            <h1>나이 : {userAge}</h1>
            <h1>이메일 : {emailAddress}</h1>
        </div>
    )
}

ReactDOM.render(
    <UserProfile/>,
    document.getElementById("root")
)