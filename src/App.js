import React, {useState, useEffect} from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Inspirations from './components/inspirations/Inspirations';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const override = {
  display: "block",
  marginLeft: "50%",
  marginRight: "50%",
  marginTop: "20rem",
  borderColor: "red",
};

function App() {
  let [color, setColor] = useState("#000000");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2800)
  }, [])

  return (
    <>
      {
        loading ?

        <PropagateLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
        />

        :
        <>
          <Header/>
          <main className='main'>
            <Home/>
            <About/>
            <Skills/>
            <Services/>
            <Qualifications/>
            <Projects/>
            <Inspirations/>
            <Contact/>
          </main>
          
          <Footer/>
          <ScrollUp/>
        </>
      }
    </>
  );
}

export default App;
