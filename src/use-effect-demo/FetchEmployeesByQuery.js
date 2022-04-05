// 주소의 쿼리값 변경에 따라 네트워크 요청을 다시 보내는 컴포넌트

function FetchEmployeesByQuery({ query }) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        async function fetchEmployees() {
            const response = await fetch(
                `/employees?q=${encodeURIComponent(query)}`
            );
            const fetchedEmployees = await response.json(response);
            setEmployees(fetchedEmployees);
        }
        fetchEmployees();
    // 보통 query 내용이 바뀌면 받아와야 할 데이터도 달라지므로, query 값에 의존하여 콜백 함수가 실행되도록 설정함
    }, [query]);

    return (
        <div>{employees.map(name => <div>{name}</div>)}</div>
    );
}