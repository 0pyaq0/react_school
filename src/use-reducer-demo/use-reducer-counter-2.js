import React, { useReducer } from "react"
import ReactDOM from "react-dom"

// 액션 타입과 관련된 상수 추가
const Action = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE',
    ADD: 'ADD'
}

function reducer(state, action) {
    // switch - case 구문으로 변경
    // type 속성이 포함된 객체를 전달받도록 변경
    switch(action.type) {
        case Action.INCREASE:
            return { count: state.count + 1 }
        case Action.DECREASE:
            return { count: state.count - 1 }
        // 추가 정보값(payload)을 전달받는 ADD 액션 추가
        case Action.ADD:
            return { count: state.count + action.payload }
        default:
            return state
    }
}