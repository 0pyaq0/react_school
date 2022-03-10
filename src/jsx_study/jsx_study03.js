import React from 'react';
import ReactDOM from 'react-dom';

// 인라인 스타일 정의 = html + css
// - 스타일 관련 정보를 포함한 객체를 전달하여 인라인 스타일 적용 가능
// - 단, 객체 속성 이름을 적을때 연산자로 사용되는 하이픈(-)을 포함시킬 수 없으므로, 카멜 표기법을 이용함
// - 스타일 객체를 미리 생성한 후 전달해도 무방함 <h1 style = 'color : red; background-color :
// lightblue;' />
const myStyle = {
    color: "red",
    backgroundColor: "lightblue"
};
const h1 = <h1 style={myStyle}>
    Hello Style!
</h1>

ReactDOM.render(h1, document.getElementById('root'));