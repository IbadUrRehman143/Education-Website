import React from 'react'
import Header from "../../Components/ui/Header/Header"
import Section_img_one from './Section_img_one/Section_img_one'
import Section_img_two from './Section_img_two/Section_img_two'
import Section_img_three from './Section_img_three/Section_img_three'
import Section_mg_four from './Section_mg_four/Section_mg_four'
import Section_img_5 from './Section_img_5/Section_img_5'
import Section_img_6 from './Section_img_6/Section_img_6'
import Footer from '../../Components/ui/Footer/Footer'
const Home = () => {
  return (
    <>
      <Header />
      <Section_img_one include_button={true} height={{ height: 600 + "px" }} heading_main="SHOWCASE COURSES, ENVENTS AND MORE!" heading_optional="EDUCATION & SCHOOL" />
      <Section_img_two />``
      <Section_img_three />
      <Section_mg_four />
      <Section_img_5 />
      <Section_img_6 />
      <Footer />
    </>
  )
}

export default Home