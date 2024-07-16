import React from 'react'
import Header from "../../Components/ui/Header/Header";
import Section_img_one from "../Home/Section_img_one/Section_img_one";
import Section_img_three from '../Home/Section_img_three/Section_img_three'
import Section_img_6 from '../Home/Section_img_6/Section_img_6'
import Footer from '../../Components/ui/Footer/Footer'
const Programs = () => {
  return (
    <>
      <Header />
      <Section_img_one height={{ height: 300 + "px" }} heading_main="Programs" />
      <Section_img_three />
      <Section_img_6 />
      <Footer />
    </>
  )
}

export default Programs