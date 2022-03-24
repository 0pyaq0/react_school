// Node에서 실행
// 리스트 데이터
let lst = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Paul" },
]

// push를 사용하여 리스트 객체를 직접 변경하지 않도록 주의
// lst.push({ id: 4, name: "Ken" })

// concat을 사용하여 기존 리스트 객체는 그대로 두고(불변) 새 리스트를 생성하여 전달할 수 있도록 하기
let newLst = lst.concat({ id: 4, name: "Ken" })
console.log("concat =====")
console.log(lst) // 원본에 영향 주지 않음
console.log(newLst) // 새로운 리스트 객체가 생성됨
console.log(lst === newLst) // 서로 다른 객체이므로 false를 반환.
// 여기서 서로 다른 객체여야 되는 이유는 리액트 내부적으로 상태값을 비교할 때 같은 객체인지 여부(즉, 참조가 같은지 여부)를 이용하여 상태 변경 및 컴포넌트 함수 호출 여부를 결정하기 때문


// 요소 내용 변경은 map 메소드를 이용하여 처리
let updatedId = 2
let updatedName = "Smith"
let updatedLst = lst.map(item => {
    if(item.id === updatedId) {
        // 다음과 같이 객체를 직접 변경하지 않고 (원본 리스트는 불변!)
        // item.name = updatedName

        // 전개 연산자를 이용하여 값 복사 후 덮어쓰기 전략으로 새 객체를 생성하여 대입하기
        item = { ...item, name: updatedName }
    }
    return item
})
console.log("map =====")
console.log(lst) // 원본에 영향 X
console.log(updatedLst) // 새로운 객체
console.log(lst === updatedLst) // false

// 요소 삭제는 filter 메소드를 이용하여 처리
let removedId = 1
let removedLst = lst.filter(item => {
    return item.id !== removedId
})
console.log("filter =====")
console.log(lst) // 원본에 영향 X
console.log(removedLst) // 새로운 객체
console.log(lst === removedLst) // false