import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import SingleExperience from './SingleExperience';
import imgUlabLogo from '../../assets/ulab.png'
import imgCp from '../../assets/cp.jpg'
import imgTa from '../../assets/ta.png'

const Experience = () => {

    const { darkMode, bgColor } = useContext(ThemeContext);



    const experiences = [

        {
            title: 'Student Prefect',
            organization: 'University Of Liberal Arts Bangladesh',
            organizationLogo: imgUlabLogo,
            time: {
                start: 'Nov 2021',
                end: 'Feb 2022'
            }
            ,
            responsibilities: ['Checking students, exam papers, taking attendance, and others.'],
            image: imgCp,

        },
        {
            title: 'Competitive Programming Trainer For Beginners',
            organization: 'University Of Liberal Arts Bangladesh',
            organizationLogo: imgUlabLogo,
            time: {
                start: 'Nov 2021',
                end: '28 June'
            }
            ,
            responsibilities: ['Teaching basic algorithm and data structure and doing help to solve the problems'],
            image: imgTa,

        }
    ]









    return (
        <div id='experiences' className={`${bgColor} hero min-h-screen flex flex-col py-16 relative overflow-hidden`}>

            <div className="w-full hero-content  justify-start items-start">

                <div className="w-full ">
                    <h1 className='text-blue-200 text-3xl font-bold tracking-wider '>Professional Experiences</h1>

                </div>
            </div>

            <div className="w-full hero-content justify-center items-center">



                <div className=' container grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-5'>

                    {

                        experiences.map((p, i) =>
                            <SingleExperience
                                key={i}
                                project={p}
                            />
                        )


                    }











                </div>

            </div>

        </div>
    );
};

export default Experience;