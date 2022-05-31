import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function useWindowSize() {
    // 내부적으로 useState 훅 사용하여 현재 윈도우 크기를 저장
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    
    useEffect(() => {
        // 크기가 변경될때마다 호출될 함수 정의
        function handleResize() {
            // 세터 함수 호출해서 크기 정보 변경
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // 이벤트 리스너 달아주기 (DOM 이벤트이므로 useEffect에서 처리)
        window.addEventListener("resize", handleResize);
        // 바로 함수 호출하여 처음 useWindowSize 호출시 크기가 저장되도록 함
        handleResize();
        // unmount시 DOM 이벤트 삭제
        return () => window.removeEventListener("resize", handleResize);
    }, []); // 빈 배열 전달하여 초기 mount시 한 번만 DOM 이벤트가 설정되도록 함
    return windowSize;
}

function App() {
    // 크기 정보(width, height)가 담긴 객체 반환
    const size = useWindowSize();
    
    return <div>{size.width}px / {size.height}px</div>;
}

ReactDOM.render(<App />, document.getElementById("root"));