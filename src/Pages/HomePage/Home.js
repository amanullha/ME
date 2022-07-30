import React from 'react';
import Banner from './Banner'
import Contact from './Contact';
import Experience from './Experience';
import Participation from './Participation';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div id="home" className='flex flex-col justify-center items-center relative overflow-hidden'>
            <Banner />


            <Skills />

            <Projects />

            <Participation />

            <Experience />


            <Contact />


        </div>
    );
};

export default Home;