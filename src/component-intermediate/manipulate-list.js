import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// > npm install uuid
import { v4 } from 'uuid'

// 중첩 객체 비구조화 할당
const ListItem = function({ onRemove, onUpdate, item: { id, value } }) {
    // 부모 컴포넌트로부터 전달받은 상태 변화 메소드 저장
    // { onRemove, onUpdate, item: { id, value } } <= 대신 사용 가능
    // const { onRemove, onUpdate } = this.props
    // const { id, value } = this.props.item

    return (
        <div style={{ border: '1px solid black', margin: '20px', padding: '20px' }}>
            <span>id : {id}</span><br />
            <span>value : {value}</span><br />
            {/* 화살표 함수를 전달하여, 부모로 부터 전달받은 상태 변경 메소드(onRemove, onUpdate)를 호출 */}
            <button onClick={() => onRemove(id) /* 필요한 인자값(삭제할 id) 전달 */}>remove</button>&nbsp;
            <button onClick={() => onUpdate(id, { id: id, value: value + 1 }) /* 필요한 인자값(추가할 객체) 전달 */}>update</button>
        </div>
    )
}

const ListComponent = function(props) {
    const [list, setList] =  useState([]) // 빈 배열에 들어가서 setList로 값을 받음
    // create (concat)
    // 새 항목을 추가한 "새로운 참조를 가진" 리스트로 교체
    const handleCreateItem = () => setList(state => state.concat({ id: v4(), value: 0 }))
    // remove (filter)
    // id가 일치할 경우 false 리턴하여 리스트에서 제외
    const handleRemoveItem = (uuid) => setList(state => state.filter((item) => item.id !== uuid))
    // update (map)
    // id가 일치할 경우 수정된 객체를 반환
    const handleUpdateItem = (uuid, updated) => setList(state => state.map(item => (item.id === uuid) ? updated : item))

    return (
        <div>
            <button onClick={handleCreateItem}>add</button>
            <ul>
                {
                    list.map(item => {
                        // uuid => 데이터베이스에서 참조할 pk 값이라고 가정
                        // 내부적으로 리스트에 포함된 특정 요소를 유일하게 구분할 문자열 키를 이용하여 퍼포먼스를 최적화하는데 사용함
                        // key는 바뀌지 않고 고유해야 함. 가장 좋은 키는 데이터베이스에 저장된 각 행의 pk
                        return <li key={item.id}>
                            {/* 값만 바꾸는 게 아닌 상태를 전달할 수 있는 함수를 호출*/}
                            <ListItem item={item} onRemove={handleRemoveItem} onUpdate={handleUpdateItem} />
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

ReactDOM.render(<ListComponent />, document.getElementById("root"))