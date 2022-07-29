import React, { useContext } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { VscGithub } from 'react-icons/vsc';
import { ImLinkedin2, ImFacebook } from 'react-icons/im';
import { ThemeContext } from '../../ThemeContext';

const Footer = () => {
    const { bgColor, darkMode } = useContext(ThemeContext);


    const stayTuned = <div className='my-10'>
        <h1 className='text-gray-300 text-2xl tracking-wider py-5'>Follow me</h1>
        <div className=' flex items-center justify-start gap-5'>


            <a
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

    const logoText =
        <div className="">

            <div className='inline-flex'>
                <div className=''>
                    <img className=' w-full h-16' src="logo1.png" alt="" />
                </div>
                <div className=''>
                    <h1 className='text-blue-100 mt-7 text-xl font-bold '>MD. AMAN-ULLHA</h1>
                </div>
            </div>
            <div>
                <p className='text-sm text-gray-400'>Copyright © 2022 - All right reserved</p>
            </div>
        </div>

    return (
        <div className={bgColor}>

            <div className="hero  ">


                <div className="hero-content flex-col sm:flex-row justify-evenly items-center w-full">

                    <div>{logoText}</div>
                    <div>{stayTuned}</div>

                </div>






            </div>



        </div>
    );
};

export default Footer;