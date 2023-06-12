import React from 'react'
import RegisterForm from '../forms/RegisterForm';
import HomepageNavMenu from '../MenuBars/HomepageNavMenu';
import Footer from '../HomeFooter';

const Register = () => {
  return (
    <>
      <HomepageNavMenu></HomepageNavMenu>
      <RegisterForm />
      <Footer></Footer>
    </>
  )
};

export default Register