import React from 'react';
import LoginForm from '../forms/LoginForm/index.tsx';
import HomepageNavMenu from '../MenuBars/HomepageNavMenu';
import Footer from '../HomeFooter';

const Login = () => {
  return (
    <>
        <HomepageNavMenu></HomepageNavMenu>
        <LoginForm />
        <Footer />
    </>
  )
}

export default Login