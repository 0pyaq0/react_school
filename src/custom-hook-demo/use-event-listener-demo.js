import { useState, useCallback, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

function useEventListener(eventName, handler, element = window) {
    // 핸들러 함수를 저장할 ref 생성
    const savedHandler = useRef();
    
    // 핸들러가 변경되는 시점에 ref를 수정하도록 useEffect 호출
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);
    
    useEffect(
        () => {
            // 요소가 존재하고, addEventListener 호출 가능한지 확인
            const isSupported = element && element.addEventListener;
            if (!isSupported) return;
            
            // 이벤트 객체를 그대로 핸들러 함수로 전달하는 익명 함수를 생성하고 리스너 등록
            const eventListener = (event) => savedHandler.current(event);
            element.addEventListener(eventName, eventListener);
            
            // unmount 시점에 이벤트 리스너 해제
            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, element] // 이벤트 이름이나 요소가 바뀌면 useEffect 다시 호출
    );
}

function App() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    // 세터 함수(setCoords)의 경우, 컴포넌트가 mount된 시점 동안은 변경되지 않으므로, 사실상 handler는 계속 같은 함수를 가리키게 됨
    // https://stackoverflow.com/questions/57180731/react-is-usestate-s-setter-function-able-to-change
    const handler = useCallback(
        ({ clientX, clientY }) => {
            // 세터 호출하여 마우스 좌표 변경
            setCoords({ x: clientX, y: clientY });
        }
    , [setCoords]);
    // 윈도우 객체에 mousemove 이벤트 걸기
    useEventListener("mousemove", handler);

    // 물론 onClick 속성값을 통해 클릭 이벤트를 설정하는 것이 리액트의 방식이므로 이렇게 쓰면 안 됨! (useEventListener 시연용)
    const buttonRef = useRef()
    const clickHandler = useCallback((e) => {
        alert('Clicked!');
    }, [])
    useEventListener("click", clickHandler, buttonRef.current)

    return (
        <div>
            <h1>The mouse position is ({coords.x}, {coords.y})</h1>
            <button ref={buttonRef}>Click</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));