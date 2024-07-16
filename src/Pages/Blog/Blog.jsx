import React from 'react'
import Header from "../../Components/ui/Header/Header";
import Section_img_one from "../Home/Section_img_one/Section_img_one";
import Footer from '../../Components/ui/Footer/Footer'
import Section_img_7_blog from '../Home/Section_img_7_blog/Section_img_7_blog.jsx';
const Blog = () => {
  return (
    <>
      <Header />
      <Section_img_one height={{ height: 300 + "px" }} heading_main="Blog" />
      <Section_img_7_blog />


      <Footer />
    </>
  )
}

export default Blog