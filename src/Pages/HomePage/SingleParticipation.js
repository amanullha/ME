
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import './Banner.css'
import { TbListDetails } from 'react-icons/tb'
import { MdOutlineLiveTv } from 'react-icons/md'
import { RiTeamFill } from 'react-icons/ri'


const SingleParticipation = ({ project }) => {


    const { darkMode, bgColor } = useContext(ThemeContext);

    const aosList = ['fade-up', 'fade-down', 'fade-fight', 'fade-left', 'fade-up-right', 'fade-up-left', 'fade-up-right', 'fade-down-left', 'fade-down-right', 'fade-zoom-in', 'flip-left', 'flip-right']


    const fadeIdx = () => {

        const maximum = aosList.length;
        const minimum = 0;
        let idx = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


        return aosList[idx % maximum];

    }


    return (
        <div
            className={`skill-shadow px-5 py-12 m-5 col-span-1 flex flex-col hover:shadow-2xl relative pb-44 z-10`}
            data-aos={fadeIdx()}
            data-aos-duration="2000"
            data-aos-delay="200"
        >
            <div className=' '>
                <img className=' h-60 w-full rounded-md' src={project.image} alt="" srcSet="" />
            </div>


            <div className='flex justify-between py-5'>

                <h1 className={`text-2xl font-bold tracking-wide ${darkMode ? 'text-blue-300' : 'text-yellow-200'}`} >{project.title}</h1>


            </div>


            <div className='flex flex-col justify-between py-5 absolute bottom-0 w-full z-20 pr-10'>

                <div title='Team' className='paticipation-hover-shadow flex  items-center gap-2  px-2 py-1'>


                    <div className={`${darkMode ? 'text-green-700' : 'text-green-500'} `}><RiTeamFill size={25} /></div>
                    <h1 className='text-gray-300'>{project.team}</h1>

                </div>

                <a href={project.link} target='_blank' className='mt-5 paticipation-hover-shadow  flex  items-center gap-2 cursor-pointer px-2 py-1'>

                    <div className={`${darkMode ? 'text-red-900' : 'text-red-600'} `}>< MdOutlineLiveTv size={25} /></div>
                    <h1 className='text-gray-300 pt-1'>Live standing</h1>

                </a>

            </div>








        </div>
    );
};

export default SingleParticipation;






