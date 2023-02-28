import React from 'react'

function AdminMemo() {
  return (
    <div>
      <div>
        <input placeholder='url을 입력해주세요' />
        <p>상품 이름: </p>
        <p>상품 가격: </p>
        <button>수정하기</button>
        <button>삭제하기</button>
      </div>
      <div>
        <p>메모 CRUD 공간</p>
        <button>저장하기</button>
      </div>
      </div>
  )
}

export default AdminMemo