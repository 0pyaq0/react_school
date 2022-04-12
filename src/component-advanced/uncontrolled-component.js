import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

const FormUncontrolledComponent = function(props) {
    // DOM 요소를 저장할 ref 생성
    const input = useRef()
    const fileInput = useRef()

    const handleSubmit = (e) => {
        // input.current => input 요소
        const v = input.current.value;
        const file = fileInput.current.value; // 파일 경로 및 파일명
        alert(`value : ${v}\nfile : ${file}`);
        e.preventDefault();
    }

    return (
        <form>
            {/* input 요소와 ref 연결 */}
            <input type="text" ref={input} /><br />
            <input type="file" ref={fileInput} /><br />
            <input type="submit" onClick={handleSubmit} />
        </form>
    )
}

ReactDOM.render(<FormUncontrolledComponent />, document.getElementById("root"))