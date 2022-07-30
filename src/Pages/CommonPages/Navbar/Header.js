import React, { useContext, useState } from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link'
import { backgroundContext } from '../../../App';
import { ThemeContext } from '../../../ThemeContext';
import { useNavigate } from "react-router-dom";



const Header = () => {




    const { darkMode, setDarkMode, bgColor, setBgColor } = useContext(ThemeContext);

    const [navbar, setNavbar] = useState(false);

    const navigate = useNavigate();

    const changeBg = () => {
        if (window.scrollY >= 200) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener("scroll", changeBg);

    const handleTheme = () => {
        console.log("ck :", darkMode);
        setDarkMode(!darkMode);

        console.log("color1: ", bgColor);
        if (darkMode) {
            // setBgColor('bg-[#9CA3AF]');
            setBgColor('bg-[#475569]');
        }
        else {
            setBgColor('bg-[#212428cb]');
        }

        console.log("color2: ", bgColor);
    }






    const headerList = [
        {
            path: '/portfolio#home',
            name: 'Home'
        },

        {
            path: '/portfolio#skills',
            name: 'Skills'
        },
        {
            path: '/portfolio#projects',
            name: 'Projects'
        },
        {
            path: '/portfolio#experiences',
            name: 'Experiences'
        },
        {
            path: '/portfolio#contact',
            name: 'Contact'
        },
        {
            path: '/portfolio/education',
            name: 'Education'
        },
        {
            path: '/portfolio/blogs',
            name: 'Blogs'
        },

    ]

    const bgControl = <label className="swap swap-rotate text-white ">

        {/* <!-- this hidden checkbox controls the state --> */}
        <input type="checkbox" />


        {/* <!-- moon icon --> */}
        <svg onClick={handleTheme} className="swap-on fill-current w-10 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>


        {/* <!-- sun icon --> */}
        <svg onClick={handleTheme} className=" swap-off fill-current w-10 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>



    </label>


    const menuBar = <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
            {
                headerList.map((h, i) => <li key={i}><Link className="text-white" smooth to={h.path}>{h.name}</Link></li>)
            }
            {
                bgControl
            }
        </ul>
    </div>







    const dropDown = <div className="navbar-end lg:hidden ">
        <div className="dropdown ">

            <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLineCap="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

            </label>

            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box -left-12 bg-black">
                <div className="ml-1">
                    {
                        bgControl
                    }
                </div>

                {
                    headerList.map((h, i) => <li key={i}><Link className="text-white" smooth to={h.path}>{h.name}</Link></li>)
                }
            </ul>

        </div>



    </div>






    const handleGoToHome = () => {
        navigate('/portfolio#home');
    }

    const logoText = <div className="">

        <div className='inline-flex'>
            <div className=''><img onClick={handleGoToHome} className='cursor-pointer w-full h-16' src="logo1.png" alt="" /></div>
            <h1 onClick={handleGoToHome} className="cursor-pointer ml-2 pt-8 hidden md:block font-extrabold tracking-wider normal-case text-xl text-yellow-600">MD.AMAN-ULLHA</h1>
        </div>
    </div>


    return (
        <>
            <nav className={navbar ? 'hidden ' : 'block bg-[#212428cb] hero'}>

                <div className="hero-content p-0  mx-auto">

                    <div className=" navbar  flex justify-between bg-[#212428cb] px-5">

                        {logoText}



                        {menuBar}

                        {dropDown}


                    </div>
                </div>
            </nav>



            {/* <nav className={navbar ? 'hidden ' : 'block bg-[#212428cb] hero'}>

                <div className=" navbar  flex justify-between bg-[#212428cb] px-5">

                    {logoText}



                    {menuBar}

                    {dropDown}


                </div>
            </nav> */}







            <Fade className="">
                <nav className={navbar ? 'bg-[#212428cb] block sticky top-0 z-50 py-1 hero ' : 'hidden -top-36'}>

                    <div className="hero-content  mx-auto p-0 ">

                        <div className="navbar flex justify-between px-5 ">

                            {logoText}




                            {menuBar}


                            {dropDown}


                        </div>


                    </div>


                </nav>

            </Fade>

        </>
    );
};

export default Header;


//transition duration-5000 ease-in

//   {/* <li><Link smooth to='/portfolio#home'>Home</Link></li>

//                                 <li><Link smooth to='/portfolio#about'>About </Link></li>

//                                 <li><Link smooth to='/portfolio#skills'>Skills </Link></li>

//                                 <li><Link smooth to='/portfolio#projects'>Projects</Link></li>



//                                 <li><Link smooth to='/portfolio#contact'>Contact </Link></li>

//                                 <li><Link smooth to='/portfolio#education'>Education </Link></li> */}