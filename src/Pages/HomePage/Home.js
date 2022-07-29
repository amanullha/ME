import React from 'react';
import Banner from './Banner'
import Contact from './Contact';
import Experience from './Experience';
import Participation from './Participation';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div id="home">
            <Banner />


            <Skills />

            <Projects />

            <Participation />

            <Experience />

            {/* <Education /> */}

            <Contact />


        </div>
    );
};

export default Home;