// props로 전달된 name 값 변경에 따라 DOM을 조작하는 컴포넌트
import { useEffect } from 'react'

// props 객체를 비구조 할당하여 name만 추출
function Greet({ name }) {
    const message = `Hello, ${name}!`

    useEffect(() => {
        document.title = `Greetings to ${name}`
        // name이 변경될 경우에만 제목을 변경하면 되므로, name 값이 포함된 배열 전달
    }, [name]);

    return <div>{message}</div>;
}