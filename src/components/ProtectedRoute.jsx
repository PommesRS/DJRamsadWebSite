import React, { useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../auth'

export const ProtectedRoute = ({ children, currentUserRole, allowedRole }) => {
  console.log(currentUserRole)
  if (currentUserRole == allowedRole) {
    return <Outlet />
  }else {
    return <Navigate to={'/login'}></Navigate>
  }
}