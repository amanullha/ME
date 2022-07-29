import { Route, Routes } from 'react-router-dom';
import Header from '../src/Pages/CommonPages/Navbar/Header'
import Home from './Pages/HomePage/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import Footer from './Pages/CommonPages/Footer';
import ProjectDetails from './Pages/HomePage/ProjectDetails';
import Education from './Pages/Education/Education';
import Blogs from './Pages/Blogs/Blogs';




function App() {

  const { darkMode, bgColor } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init();
  }, []);





  return (

    <div className={bgColor}>

      <div className={bgColor}>

        {/* <div className={`${bgColor}  px-96`}>
          <button >cng</button>
          <h1 className=' text-green-500'>value: {bgColor}</h1>
        </div> */}

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio#home" element={<Home />} />
          <Route path="/portfolio#skills" element={<Home />} />

          <Route path="/portfolio#projects" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />


          <Route path="/portfolio#participation" element={<Home />} />
          <Route path="/portfolio#experiences" element={<Home />} />
          <Route path="/portfolio#contact" element={<Home />} />


          <Route path="/portfolio/education" element={<Education />} />
          <Route path="/portfolio/blogs" element={<Blogs />} />

          {/* 
          <Route path="/portfolio#about" element={ } />
          <Route path="/portfolio#resume" element={ } />
          <Route path="/portfolio#services" element={ } />
          <Route path="/portfolio#blogs" element={ } /> */}
        </Routes>

        <Footer />
      </div>


    </div>

  );
}

export default App;
