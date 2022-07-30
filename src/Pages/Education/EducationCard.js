import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import './Education.css'




const EducationCard = ({ e }) => {


    const { darkMode, bgColor, } = useContext(ThemeContext);


    const aosList = ['fade-up', 'fade-down', 'fade-fight', 'fade-left', 'fade-up-right', 'fade-up-left', 'fade-up-right', 'fade-down-left', 'fade-down-right', 'fade-zoom-in', 'flip-left', 'flip-right']

    const fadeIdx = () => {

        const maximum = aosList.length;
        const minimum = 0;
        let idx = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


        return aosList[idx % maximum];

    }




    return (
        <div
            data-aos={fadeIdx()}
            data-aos-duration="2000"
            data-aos-delay="200"


            className={`col relative flex  justify-center parent-card  py-20 px-10  gap-5 `}>

            <div className={`rounded-full  card-moving-animation z-20 ${bgColor} p-2 box-shadow`}>
                <img className='w-16 h-16 rounded-full ' src={e?.institutionLogo} alt="" />
            </div>


            <div className={`border-2 border-black border-l-[15px] px-16 py-4 z-20 box-shadow ${bgColor}`} >

                <div className={`border-b-2 pt-8 pb-5 border-gray-500 flex`}>

                    <h1 className='text-yellow-300 text-3xl lg:text-2xl font-bold'>{e.degree}</h1>

                </div>


                <div className='flex flex-col justify-start gap-3 py-8'>

                    <div className="text-left">
                        <h1 className='text-blue-200 text-xl lg:text-2xl '>{e.institution}</h1>
                    </div>

                    <h1 className='text-blue-200 text-md  text-left'>
                        <span className='' >{e.duration.start}</span>
                        -
                        <span className='' >{e.duration.end}</span>
                    </h1>

                </div>

            </div>



            <div className='items-center py-5 absolute h-full w-full z-10'>

                {/* <div className="divider text-black items-center"></div> */}
                {/* <span className="h-1 w-full bg-purple-600 lg:w-1/3"></span> */}

                <h1 className='bg-gray-400 py-1 w-3/4 mx-12'></h1>

            </div>





        </div>
    );
};

export default EducationCard;