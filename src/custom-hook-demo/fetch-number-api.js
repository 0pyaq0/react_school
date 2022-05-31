import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import useFetch from "../custom-hooks/useFetch";

const NumberAPIApp = (props) => {
    const [ number, setNumber ] = useState(0)
    const { data, loading } = useFetch(`http://numbersapi.com/${number}?json`)

    return (
        <div>
            {
                data === null
                    ? loading ? <h1>요청 중입니다.</h1> : <h1>표시할 내용이 없습니다.</h1>
                    :
                    <p>{data.text}</p>
            }
            <input type="number" value={number} min="0" max="100" onChange={(e) => {
                setNumber(e.target.value)
            }} />
        </div>
    );
}

ReactDOM.render(<NumberAPIApp />, document.getElementById("root"));