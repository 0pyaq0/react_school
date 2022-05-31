import { useCallback } from "react"
import useAsync from "./useAsync"

const useFetch = (url, type='json', immediate = true) => {
    // fetch 결과로 인하여 전달받은 response를 json 혹은 text로 변환하는 프라미스 반환 함수 생성
    const asyncFunction = useCallback(() => {
        return fetch(url).then(res => {
            return (type === 'json') ? res.json() : res.text()
        })
    }, [url, type]) // 전송 주소나 Content-Type이 바뀔 경우에만 함수 참조 변경

    // 이전에 정의한 useAsync에 생성한 함수 전달
    const { status, value, error } = useAsync(asyncFunction, immediate);

    // 좀 더 fetch 상황에 맞도록 속성 이름 바꾸기 (idle, pending) => loading, value => data
    return { loading: (status === "idle" || status === "pending"), data: value, error }
}