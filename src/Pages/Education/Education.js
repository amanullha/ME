import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import imgUlabLogo from '../../assets/ulabLogo2.jpeg'
import imgAamcLogo from '../../assets/aamcLogo.jpg'
import './Education.css'
import EducationCard from './EducationCard';

const Education = () => {

    const { darkMode, bgColor, } = useContext(ThemeContext);

    const education = [

        {
            degree: 'B.Sc in Computer Science and Engineering',
            institution: 'University Of Liberal Arts Bangladesh',
            institutionLogo: imgUlabLogo,
            duration: {
                start: '2017',
                end: '2021'
            },
            result: ''
        },
        {
            degree: 'Higher Secondary School Certificate',
            institution: 'Adhyapak Abdul Majid College',
            institutionLogo: imgAamcLogo,
            duration: {
                start: '2015',
                end: '2016'
            },
            result: ''
        }
    ]











    return (

        <div>

            <div class="hero min-h-screen">

                <div class="hero-content text-center w-full  ">





                    <div className='container flex flex-col lg:flex-row gap-5'>
                        {
                            education.map((e, i) => <EducationCard

                                key={i}
                                e={e}

                            />)
                        }

                    </div>







                </div>

            </div>









        </div>
    );
};

export default Education;