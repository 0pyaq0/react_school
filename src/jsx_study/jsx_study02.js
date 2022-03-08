import React from 'react';
import ReactDOM from 'react-dom';

const div = <div>
    @
    {true}
    {false}
    {undefined}
    {null}

    {/*그의 내용에서 표현식의 평가 값으로 boolean(true, false), undefined, null이 반환될 경우 아무것도 그리지 않음*/}
    @
</div>

//-----------------------------------------------------------------------


// && 연산자를 이용한 조건부 렌더링
// && 연산자의 경우 단락 평가(short-circuit)에 의해서 왼쪽 식이 true로 평가될 경우 오른쪽 식을 평가하고 
// 해당 식의 결과값을 반환하므로 이러한 성질을 조건부 렌더링에 활용 가능
// false일 경우 아무것도 실행하지 않고 false 반환

const unreadMessages = [];
const div2 = <div>
    <h1>Hello!</h1>
    {/* 만약 읽지 않은 메시지가 있다면 경고문을 출력*/}
    {
        unreadMessages.length > 0 &&  /* 이 조건이 true 일 경우 */
        <h2>You have {unreadMessages.length} unread messages.</h2> /* 이 코드가 실행이 된다. = 원하는 그림을 그리게 한다 */
    }
    {
        unreadMessages.length > 0 ?
        <h2>You have {unreadMessages.length} unread messages.</h2> :
        <h2>메세지 다 읽음.</h2>
    }
</div>

//-----------------------------------------------------------------------

// 조건문 렌더링
function conditionalRender(age) {
    if(age >= 20) {
        return <div>성인</div>
    } else {
        return <div>미성년자</div>
    }
}

const div3 = <div>
    {conditionalRender(18)}
</div>


// JSX 내부에서는 if, else 구문 사용이 불가능하므로 삼항 연산자를 사용하여 조건부 렌더링을 수행
const age = 20
const div4 = (
    <>{age >= 20 ? <div>성인</div> : <div>미성년자</div>}</>
)

ReactDOM.render(div4, document.getElementById('root'));