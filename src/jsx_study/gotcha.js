import React from 'react';
import ReactDOM from 'react-dom';

// 기본적으로 JSX 코드는 모두 자바스크립트 코드로 변환됨 
// 하지만 JSX 코드 작성과정에서 HTML 태그 내용을 작성할 때 태그의 속성 이름으로 자바스크립트의 예약어와 겹치는 키워드가 사용되면 
// 트랜스파일러 입장에서는 구분이 불가능하므로 원칙적으로 사용이 불가함 (ex: class, for 등)


// class 키워드는 클래스를 정의하기 위한 자바스크립트 예약어라서 사용할 수 없으므로 대신 className을 사용함
//<h1 className="big">Hey</h1>

// label에 쓰이는 for도 반복문을 위한 예약어이므로 사용이 불가, 대신 htmlFor를 사용함
<label htmlFor="id">Label</label>


