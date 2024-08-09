import React from 'react'
import {Logo, LogoutBtn, Container } from "../index"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
  const authStatus = useSelector( state => state.auth.status)
  const navigate = useNavigate()
  return (
    <div>Header</div>
  )
}

export default Header