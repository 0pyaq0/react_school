import { useState } from "react";
import ReactDOM from "react-dom";

function useLocalStorage(key, initialValue) {
    // 내부적으로 useState 훅 사용하여 로컬 스토리지 데이터 저장 및 설정
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // 로컬 스토리지 데이터 가져오기
            const item = window.localStorage.getItem(key);
            // 로컬 스토리지에서 가져온 데이터는 JSON 파싱이 필요
            // (만약 데이터가 없다면 null이 반환되므로 기본값이 대입됨)
            // https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // 파싱 도중 에러가 발생해도 기본값을 대입
            console.log(error);
            return initialValue;
        }
    });
    
    // 반환할 세터 함수 설정 (단, 저장 장소가 로컬 스토리지)
    const setValue = (value) => {
        try {
            // 함수도 저장할 수 있도록 처리
            // TODO : 함수를 저장할 일이 있는지? + 함수 호출은 왜 해주는지??
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // 상태 저장 및
            setStoredValue(valueToStore);
            // 로컬 스토리지에 저장
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue];
}

function App() {
    // useState와 거의 비슷하게 사용할 수 있지만, 두 번째 인수로 기본값을 지정해야하고, 저장 위치가 로컬 스토리지라는 점이 다름
    const [name, setName] = useLocalStorage("name", "Bob");
    
    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));