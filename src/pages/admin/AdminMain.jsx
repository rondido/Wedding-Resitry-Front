import React from "react";
import styled from "styled-components";
import AdminMainContainer from "@/containers/admin/AdminMainContainer.jsx";
import AdminContainer from "@/containers/admin/AdminContainer.jsx";

const StyledDiv = styled.div`
  height: max-content;
`;

function AdminMain() {
  return (
    <StyledDiv>
      <AdminContainer></AdminContainer>
      <AdminMainContainer></AdminMainContainer>
    </StyledDiv>
  );
}

export default AdminMain;
