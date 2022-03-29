import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// 총 4개의 컴포넌트로 구성된 할 일 관리 앱
// TodoApp - 전체 앱 구성
// TodoAdder - 새 TODO 추가
// TodoList	TODO - 항목 리스트 출력
// TodoItem	- 개별 TODO 항목 출력
// 도전과제) 할 일의 중요도 설정할 수 있게 해보기
// ex) ES6 문법 공부하기 (중요도 : 1) [증가][감소]
// * 감소는 0 이하로 감소할 수 없음
// * 중요도가 5 이상이면 볼드체로 보여주기

const TodoItem = function({ todo: { completed, text }, idx, handleTodoStatusToggle, handleTodoRemove }) {
    return (
        <div>
            <span style={completed ? { textDecoration: 'line-through' } : null}
                onClick={() => handleTodoStatusToggle(idx)}>
                {text}
            </span>&nbsp;
            <button onClick={() => handleTodoRemove(idx)}>삭제</button>
        </div>
    )
}

const TodoList = function({ todos, handleTodoStatusToggle, handleTodoRemove }) {
    return (
        <ol>
            {
                todos.map((todo, idx) => {
                    return (
                        <li key={idx}>
                            <TodoItem idx={idx} todo={todo}
                                handleTodoStatusToggle={handleTodoStatusToggle}
                                handleTodoRemove={handleTodoRemove} />
                        </li>
                    )
                })
            }
        </ol>
    )
}

const TodoAdder = function({ handleTodoAdd }) {
    const [input, setInput] = useState("")
    const handleChange = (e) => setInput(e.target.value)
    // 맨 처음 비어있는 문자열이 input으로 전달 => input으로 a를 넣음 => value에 input이 들어가고
    // onChage가 실행되면서 handleChange 이벤트가 실행됨 => handleChage안에 value로 setInput이 되고 TodoAdder 실행됨
    // => input으로 setInput된다. => 상단 input이 다시 value = {input} 으로 돌아가는 것으로(a로 입력된 상태) 무한 반복..
    return (
        <div>
            <input type='text' onChange={handleChange} value={input} />
            <button onClick={() => {
                // 완료되지 않은 상태, text는 input
                handleTodoAdd({ completed: false, text: input })
                // todo를 추가하면 다시 아무것도 치지 않은 상태로 set
                setInput("")
            }}>추가</button>
        </div>
    )
}

const TodoApp = function(props) {
    const [todos, setTodos] = useState([
        { completed: false, text: '리액트 공부하기' },
        { completed: true, text: 'ES6 문법 공부하기' }
    ])

    // 할 일(todos) 받아서 concat에 넣어서 갱신. 이전 목록을 불러와서 concat으로 새 할 일을 붙여주기
    const handleTodoAdd = newTodo => setTodos(todos => todos.concat(newTodo))
    const handleTodoStatusToggle = todoIndex => {
        
        // 완료 여부 확인
        setTodos(todos => {
            return todos.map((todo, idx) => {
                if(idx === todoIndex) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        })
    }

    // 할 일 지우기
    const handleTodoRemove = todoIndex => {
        setTodos(todos => {
            // 관심없는 변수는 _ (언더바)로 대체
            return todos.filter((_, idx) => {
                return idx !== todoIndex
            })
        })
    }

    return (
        <div>
            <TodoList todos={todos}
                handleTodoStatusToggle={handleTodoStatusToggle}
                handleTodoRemove={handleTodoRemove}/>
            <TodoAdder handleTodoAdd={handleTodoAdd} />
        </div>
    )
}

// main - root component
ReactDOM.render(<TodoApp />, document.getElementById("root"))