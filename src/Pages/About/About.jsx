import Header from "../../Components/ui/Header/Header";
import Section_img_one from "../Home/Section_img_one/Section_img_one";
import Section_img_two from "../Home/Section_img_two/Section_img_two";
import Section_img_three from '../Home/Section_img_three/Section_img_three'
import Section_mg_four from '../Home/Section_mg_four/Section_mg_four'
import Section_img_5 from '../Home/Section_img_5/Section_img_5'
import Section_img_6 from '../Home/Section_img_6/Section_img_6'
import Footer from '../../Components/ui/Footer/Footer'
import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      <Section_img_one height={{ height: 300 + "px" }} heading_main="ABOUT US" />
      <Section_img_two />
      <Section_img_three />
      <Section_mg_four />
      <Section_img_5 />
      <Section_img_6 />
      <Footer />
    </>
  )
}

export default About