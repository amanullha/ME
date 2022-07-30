
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import './Banner.css'
import { FcOrganization } from 'react-icons/fc'
import { RiTeamFill } from 'react-icons/ri'


const SingleExperience = ({ project }) => {


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
            className={`skill-shadow px-5 py-12 m-5 col-span-1 flex flex-col hover:shadow-2xl relative  z-10`}
            data-aos={fadeIdx()}
            data-aos-duration="2000"
            data-aos-delay="200"
        >
            <div className=' '>
                <img className=' h-40 w-full rounded-md' src={project.image} alt="" srcSet="" />
            </div>


            <div className='flex justify-between py-5'>

                <h1 className={`text-2xl font-bold tracking-wide ${darkMode ? 'text-blue-300' : 'text-yellow-200'}`} >{project.title}

                    <sub><span className='text-yellow-600 text-sm px-2' >{project.time.start} </span> - <span className='text-yellow-600 text-sm px-2' >{project.time.end}</span ></sub>

                </h1>


            </div>

            <div className='flex flex-col gap-5 justify-between pt-5 pb-20'>

                <h1 className={`text-lg font-bold tracking-wide text-gray-300`} >
                    Responsibility:
                </h1>
                <ul className='ml-5'>
                    {
                        project.responsibilities.map((r,i) => <li key={i} className='text-gray-400 list-disc'>{r}</li>)
                    }
                </ul>


            </div>


            <div className='flex flex-col justify-between py-5 absolute bottom-0 w-full z-20 pr-10'>

                <div title='Team' className='paticipation-hover-shadow flex  items-center gap-2  px-2 py-1'>


                    <div className=''>
                        <img className='w-16' src={project.organizationLogo} alt="" srcSet="" />
                    </div>

                    <h1 className='text-gray-300'>{project.organization}</h1>

                </div>



            </div>








        </div>
    );
};

export default SingleExperience;






