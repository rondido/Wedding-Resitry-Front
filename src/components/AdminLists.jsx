import React from 'react'
import { ReactSortable } from "react-sortablejs";
import styled from 'styled-components'


const StyledDiv = styled.div`
  display: flex;
  width: 1200px;
  align-items: flex-start;
  justify-content: space-between;
  margin: auto;
  div.item {
  /* border: 1px solid green; */
  h4{
    margin: 0 8px 8px;
  }
    div {
      border-radius: 0.5rem;
      width: 315px;
      height: 250px;
      border: 1px solid #000;
      overflow-y: scroll ;
    }
    p {
      margin: 8px;
border-bottom: 1px solid #AAA;
padding: 5px;
margin-right: 30px;
    }
  }
`

function AdminLists ({attendance, setAttendance, absence, setAbsence, undecided, setUndecided}) {
  return (
  <StyledDiv>
    <div className='item'>
    <h4>참석</h4>
    <ReactSortable
      list={attendance}
      setList={setAttendance}
      group="shared"
      animation={200}
      delayOnTouchStart={true}
      delay={2}
      ghostClass="sortable-ghost">
      {attendance.map((item) => (<p key={item.id}>{item.name}</p>))}</ReactSortable>
    </div>
    <div className='item'>
    <h4>불참</h4>
    <ReactSortable
      list={absence}
      setList={setAbsence}
      group="shared"
      animation={200}
      delayOnTouchStart={true}
      delay={2}
      ghostClass="sortable-ghost" >
      {absence.map((item) => (<p key={item.id}>{item.name}</p>))}</ReactSortable>
      </div>
      <div className='item'>
    <h4>미정</h4>
    <ReactSortable
      list={undecided}
      setList={setUndecided}
      group="shared"
      animation={200}
      delayOnTouchStart={true}
      delay={2}
      ghostClass="sortable-ghost" >
      {undecided.map((item) => (<p key={item.id}>{item.name}</p>))}</ReactSortable>
      </div>
    </StyledDiv>
  )
}

export default AdminLists