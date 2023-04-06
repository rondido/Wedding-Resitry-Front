import React from 'react'
import styled from 'styled-components'
import AdminMainContainer from "@/containers/admin/AdminMainContainer.jsx";

const StyledDiv = styled.div`
  height: max-content;
`


function AdminMain() {

  return (
    <StyledDiv>
     <AdminMainContainer></AdminMainContainer>
    </StyledDiv>
  )
}

export default AdminMain