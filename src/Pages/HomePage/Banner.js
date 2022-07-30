import React, { useContext } from 'react';
import icpc from '../../assets/icpc.png'
import './Banner.css'
import { Fade } from 'react-reveal';
import Typed from "react-typed";
import { HashLink as Link } from "react-router-hash-link";
import { VscGithub } from 'react-icons/vsc';
import { ImLinkedin2, ImFacebook } from 'react-icons/im';
import { ThemeContext } from '../../ThemeContext';







const Banner = () => {


    const { bgColor, darkMode } = useContext(ThemeContext);



    const stayTuned = <div className='my-10'>
        <h1 className='text-gray-400 font-bold tracking-wider my-5 text-2xl '>Stay Tuned</h1>
        <div className=' flex items-center justify-start gap-5'>


            <a
                data-aos="zoom-in" data-aos-duration="1000"
                href="https://www.linkedin.com/in/md-aman-ullha-9a9527161/"
                target="_blank"
                rel="noreferrer"
                className=''
            >
                <div className="social ">
                    <div className=' p-2 bg-gray-400 rounded-full'>
                        < ImLinkedin2 size={15} />

                    </div>
                </div>

            </a>

            <a
                data-aos="zoom-in" data-aos-duration="1000"
                href="https://github.com/amanullha"
                target="_blank"
                rel="noreferrer"
                className=''
            >
                <div className="social">
                    <div className=' bg-gray-400 rounded-full'>
                        < VscGithub size={35} />

                    </div>
                </div>

            </a>
            <a
                data-aos="zoom-in" data-aos-duration="1000"
                href="https://www.facebook.com/Aman7649"
                target="_blank"
                rel="noreferrer"
                className=''
            >
                <div className="social">
                    <div className=' bg-gray-400 rounded-full p-2'>
                        < ImFacebook size={18} />

                    </div>
                </div>

            </a>

        </div>
    </div>



    return (



        <div className={`${bgColor} relative overflow-hidden w-full`} >

            <div className={`hero min-h-screen ${bgColor}`}>


                <div className="hero-content flex-col lg:flex-row-reverse ">

                    <Fade top>
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            className={`mask mask-pentagon  flex justify-items-center drop-shadow-2xl p-1 ${darkMode ? 'bg-[#1e2024]' : 'bg-[#3843540e]'}`}>

                            <div className={`mask mask-pentagon  flex justify-items-center drop-shadow-2xl ${bgColor}`}>

                                <div className={`px-5 sm:px-32 ${bgColor}`}>
                                    <img src={icpc} className=" imgSize px-5 py-10  max-w-sm " />
                                </div>

                            </div>
                        </div>
                    </Fade>




                    <div className="">




                        <h1
                            data-aos="fade-right" data-aos-duration="1000"
                            className="font-bold text-transparent text-xl my-4 tracking-wider bg-clip-text text-blue-200"
                        >Thanks for reaching out to me!</h1>

                        <div
                            data-aos="fade-left" data-aos-duration="1000"
                            className="text-3xl sm:text-5xl font-bold flex ">
                            <h1 className="text-gray-500">I'M </h1>
                            <h1 className="ml-5 font-extrabold text-transparent text-3xl sm:text-5xl bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-900">MD: AMAN-ULLHA </h1>
                        </div>

                        <span
                            data-aos="fade-left" data-aos-duration="1000"
                            className={`text-2xl  tracking-widest text-gray-400`}>
                            <Typed
                                strings={[
                                    "A MERN Developer",
                                    "A Frontend Developer",
                                    "A Backend Developer",
                                    "A React.JS Developer",
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </span>


                        <p
                            data-aos="fade-left" data-aos-duration="1000"
                            className="py-6 text-gray-300">I always like to engage with new tech-related and competitive problems. I really enjoy overcoming
                            challenges. I have a genuine interest in software programming, database management. And I am
                            looking for a position where I can contribute my knowledge and experiences related to the tech field</p>


                        <div className="flex gap-3 ">

                            <div data-aos="zoom-in" data-aos-duration="1000">
                                <a target='_blank' href='https://drive.google.com/file/d/1Zi4BMhUyyOBPLa8Bs5Z70Kxd0SoQ2KHW/view?usp=sharing' className={`btn  bg-opacity-10 ${darkMode ? 'text-gray-200 btn-primary' : ' bg-white'}`}>My Resume</a>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1000">
                                <Link
                                    smooth
                                    className={`btn  bg-opacity-10 ${darkMode ? 'text-gray-200 btn-primary' : ' bg-white'}`}
                                    to="/portfolio#contact"
                                >
                                    Hire me
                                </Link>
                            </div>

                        </div>





                        {stayTuned}




                    </div>
                </div>






            </div>



        </div>

    );
};

export default Banner;