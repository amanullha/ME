import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import './Banner.css'
import { TbListDetails } from 'react-icons/tb'
import { MdOutlineLiveTv } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const SingleProject = ({ project }) => {


    const { darkMode, bgColor } = useContext(ThemeContext);

    const aosList = ['fade-up', 'fade-down', 'fade-fight', 'fade-left', 'fade-up-right', 'fade-up-left', 'fade-up-right', 'fade-down-left', 'fade-down-right', 'fade-zoom-in', 'flip-left', 'flip-right']

    const fadeIdx = () => {

        const maximum = aosList.length;
        const minimum = 0;
        let idx = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


        return aosList[idx % maximum];

    }
    const navigate = useNavigate();

    const handleProjectDetails = (p) => {

        navigate(`/project/${p.id}`)
    }

    return (
        <div
            className={`skill-shadow px-5 py-12 m-5 col-span-1 flex flex-col hover:shadow-2xl`}
            data-aos={fadeIdx()}
            data-aos-duration="2000"
            data-aos-delay="200"
        >
            <div className='project-image '>
                <img  src={project.image} alt="" srcset="" />
            </div>


            <div className='flex justify-between py-5'>

                <h1 className={`text-2xl font-bold tracking-wider ${darkMode ? 'text-blue-300' : 'text-yellow-200'}`} >{project.title}</h1>
                <h1 className={`text-xl font-bold tracking-wider ${darkMode ? 'text-blue-700' : 'text-yellow-600'}`} >{project.technology.stack}</h1>

            </div>




            <div>
                <h1 className='text-gray-400 tracking-wide px-2'>{

                    project.shortDescription

                }</h1>
            </div>

            <div className='flex justify-between py-5  '>

                <div onClick={() => handleProjectDetails(project)} className='hover-shadow flex justify-between items-center gap-2 cursor-pointer px-2 py-1'>

                    <div className={`${darkMode ? 'text-green-700' : 'text-green-500'} `}><TbListDetails size={25} /></div>
                    <h1 className='text-gray-300'>Details</h1>

                </div>

                <a href={project.links.live} target='_blank' className='hover-shadow  flex justify-between items-center gap-2 cursor-pointer px-2 py-1'>

                    <div className={`${darkMode ? 'text-red-900' : 'text-red-600'} `}>< MdOutlineLiveTv size={25} /></div>
                    <h1 className='text-gray-300 pt-1'>Live</h1>

                </a>

            </div>




        </div>
    );
};

export default SingleProject;