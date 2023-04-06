import React from 'react'
import { Outlet } from "react-router-dom";
import AdminContainer from "../../containers/admin/AdminContainer.jsx";

function Admin() {
  return (
    <div>
        <AdminContainer></AdminContainer>
      <Outlet />
    </div>
  )
}

export default Admin