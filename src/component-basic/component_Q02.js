import React from 'react'
import ReactDOM from 'react-dom'

// Q) SlotMachine 컴포넌트 만들기 (A: sol_slot_machine)

const SlotMachine = function(props) {
    const {s1, s2, s3, highlight} = props.person
    return (
        <div className='person' style={highlight ? {color: 'red'} : null}>
            <p>{s1} {s2} {s3}</p>
            <p>Congratz!</p>
        </div>
    )
}


ReactDOM.render(
    <>
        <SlotMachine s1="X" s2="Y" s3="Z" />
        <SlotMachine s1="X" s2="X" s3="X" />
        <SlotMachine s1="7" s2="7" s3="7" highlight/>

        <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
        <SlotMachine s1="🍒" s2="🍒" s3="🍒" highlight/>
    </>,
    document.getElementById("root")
)