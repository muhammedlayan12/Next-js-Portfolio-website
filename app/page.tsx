import Navbar  from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Section from "./components/Section";
import Footer from "./components/Footer";
function page() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Section></Section>
        <Footer></Footer>
    </div>
  )
}

export default page;