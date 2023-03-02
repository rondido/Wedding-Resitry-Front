import React from 'react'
import { ReactSortable } from "react-sortablejs";

function AdminLists ({attendance, setAttendance, absence, setAbsence, undecided, setUndecided}) {
  return (
  <>참석
    <ReactSortable
      list={attendance}
      setList={setAttendance}
      group="shared"
      animation={200}
      delayOnTouchStart={true}
      delay={2}
      ghostClass="sortable-ghost">
      {attendance.map((item) => (<div key={item.id}>{item.name}</div>))}</ReactSortable>
    불참
    <ReactSortable
      list={absence}
      setList={setAbsence}
      group="shared"
      animation={200}
      delayOnTouchStart={true}
      delay={2}
      ghostClass="sortable-ghost" >
      {absence.map((item) => (<div key={item.id}>{item.name}</div>))}</ReactSortable>
    미정
    <ReactSortable
      list={undecided}
      setList={setUndecided}
      group="shared"
      animation={200}
      delayOnTouchStart={true}
      delay={2}
      ghostClass="sortable-ghost" >
      {undecided.map((item) => (<div key={item.id}>{item.name}</div>))}</ReactSortable></>
  )
}

export default AdminLists