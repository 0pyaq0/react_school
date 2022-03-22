import React from 'react'
import ReactDOM from 'react-dom'

// Q) SlotMachine 컴포넌트 만들기 (A: sol_slot_machine)

function SlotMachine({s1, s2, s3}) {
    const allSame = s1 === s2 && s2 === s3
    const allSeven = allSame && s1 === "7"
    
    return (
        <div>
            <div>{s1} {s2} {s3}</div>
            {
                allSame && 
                <p style={ allSeven ? {color : "red"} : null}>Congratz!</p>
            }
        </div>
    )
}

const App = props => {
    return (
        <div>
            <SlotMachine s1="X" s2="Y" s3="Z" />
            <SlotMachine s1="X" s2="X" s3="X" />
            <SlotMachine s1="7" s2="7" s3="7" />

            <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
            <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)