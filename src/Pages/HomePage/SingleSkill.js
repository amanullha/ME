import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import './Banner.css'
import { SiJavascript } from "react-icons/si";


const SingleSkill = ({ skill }) => {

    const { bgColor, darkMode } = useContext(ThemeContext);




    return (
        <div
            className='skill-shadow rounded-xl'
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500">
            <p className="flex items-center relative bottom-0 hover:bottom-2 transition-all duration-300 py-4 px-5">
                <img className='rounded-md mr-2' width={35} height={30} src={skill.icon} alt="" srcset="" />
                <span className={`${darkMode ? 'text-blue-100' : 'text-yellow-500'} font-bold`}>{skill.name}</span>
            </p>
        </div>
    );
};

export default SingleSkill;