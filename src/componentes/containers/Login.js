import React from 'react'
import LoginForm from '../forms/LoginForm/index.tsx'
import HomepageNavMenu from '../MenuBars/HomepageNavMenu'

const Login = () => {
  return (
    <>
        <HomepageNavMenu></HomepageNavMenu>
        <LoginForm />
    </>
  )
}

export default Login