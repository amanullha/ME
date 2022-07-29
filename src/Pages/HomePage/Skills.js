import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

import { FaJsSquare, FaHtml5, FaCss3, FaReact, FaBootstrap, FaNodeJs, } from 'react-icons/fa'
import "./Banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SingleSkill from './SingleSkill';

import imgC from '../../assets/c.png'
import imgCpp from '../../assets/cpp.png'
import imgJavascript from '../../assets/javascript.png'
import imgHtml from '../../assets/html.png'
import imgCss from '../../assets/css.png'
import imgReactjs from '../../assets/reactjs.png'
import imgTailwind from '../../assets/tailwind.png'
import imgEs6 from '../../assets/es6.png'
import imgExpressjs from '../../assets/expressjs.png'
import imgBootstrap from '../../assets/bootstrap.png'
import imgRestapi from '../../assets/restapi.png'










import imgNodejs from '../../assets/nodejs.png'
import imgMongodb from '../../assets/mongodb.png'
import imgMysql from '../../assets/mysql.png'
import imgReactquery from '../../assets/reactquery.png'
import imgAxios from '../../assets/axios.png'
import imgDaisyui from '../../assets/daisyui.png'
import imgReactrouter from '../../assets/reactrouter.png'
import imgPython from '../../assets/python.png'
import imgScikitlearn from '../../assets/scikitlearn.png'
import imgTensorflow from '../../assets/tensorflow.png'
import imgPandas from '../../assets/pandas.png'






import imgFirebase from '../../assets/firebase.png'
import imgHeroku from '../../assets/heroku.png'
import imgGithub from '../../assets/github.png'
import imgVscode from '../../assets/vscode.png'
import imgNetlify from '../../assets/netlify.png'
import imgFigma from '../../assets/figma.png'
import imgGit from '../../assets/git.png'
import imgNlp from '../../assets/nlp.png'




import imgTypescript from '../../assets/typescript.png'
import imgMongoose from '../../assets/mongoose.png'
import imgRedux from '../../assets/redux.png'
import imgNextjs from '../../assets/nextjs.png'





const Skills = () => {

    const { darkMode, bgColor } = useContext(ThemeContext);


    const expertise = [
        {
            name: "C",
            icon: imgC,
            color: "text-yellow-500"
        },
        {
            name: "C++",
            icon: imgCpp,
            color: "text-yellow-500",
        },
        {
            name: "Javascript",
            icon: imgJavascript,
            color: "text-yellow-500",
        },
        {
            name: "HTML5",
            icon: imgHtml,
            color: "text-red-500",
        },
        {
            name: "CSS",
            icon: imgCss,
            color: "text-blue-500",
        },
        {
            name: "React.Js",
            icon: imgReactjs,
            color: "text-blue-500",
        },
        {
            name: "ES6",
            icon: imgEs6,
            color: "text-black",
        },
        {
            name: "Tailwind",
            icon: imgTailwind,
            color: "",
        },
        {
            name: "Bootstrap",
            icon: imgBootstrap,
            color: "",
        },
        {
            name: "Rest API",
            icon: imgRestapi,
            color: "text-yellow-500",
        },
        {
            name: "Express.js",
            icon: imgExpressjs,
            color: "text-black",
        },
    ];

    const comfortable = [
        {
            name: "Node.js",
            icon: imgNodejs,
            color: "text-green-500",
        },
        {
            name: "MongoDB",
            icon: imgMongodb,
            color: "text-green-500",
        },
        {
            name: "MySql",
            icon: imgMysql,
            color: "text-green-500",
        },

        {
            name: "React Query",
            icon: imgReactquery,
            color: "text-red-500",
        },
        {
            name: "Axios",
            icon: imgAxios,
            color: "text-yellow-500",
        },
        {
            name: "DaisyUI",
            icon: imgDaisyui,
            color: "text-yellow-500",
        },

        {
            name: "React Router",
            icon: imgReactrouter,
            color: "text-yellow-500",
        },
        {
            name: "NLP",
            icon: imgNlp,
            color: "text-yellow-500",
        },
        {
            name: "Python",
            icon: imgPython,
            color: "text-yellow-500",
        },
        {
            name: "Pandas",
            icon: imgPandas,
            color: "text-yellow-500",
        },
        {
            name: "Scikit Learn",
            icon: imgScikitlearn,
            color: "text-yellow-500",
        },
        {
            name: "Tensor Flow",
            icon: imgTensorflow,
            color: "text-yellow-500",
        },
    ];

    //     const familiar = [
    //         {
    //             id: 1,
    //             name: "Typescript",
    //             icon: ,
    //             color: "text-white",
    //         },
    //         {
    //             id: 2,
    //             name: "React Native",
    //             icon:,
    //             color: "text-blue-400",
    //         },
    //         {
    //             id: 3,
    //             name: "Mongoose",
    //             icon: ,
    //             color: "text-yellow-500",
    //         },
    //         {
    //             id: 4,
    //             name: "Next.Js",
    //             icon:,
    //             color: "text-yellow-500",
    //         },
    //         {
    //             id: 5,
    //             name: "MaterialUI",
    //             icon: ,
    //             color: "text-yellow-500",
    //         },
    //         {
    //             id: 6,
    //             name: "Framer Motion",
    //             icon: ,
    // ,
    //             color: "text-purple-500",
    //         },
    //     ];




    const learning = [
        {
            name: "Typescript",
            icon: imgTypescript,
            color: "text-white",
        },

        {
            name: "Mongoose",
            icon: imgMongoose,
            color: "text-yellow-500",
        },
        {
            name: "Next.Js",
            icon: imgRedux,
            color: "text-yellow-500",
        },
        {
            name: "Redux",
            icon: imgNextjs,
            color: "text-yellow-500",
        }
    ];

    const tools = [
        {
            name: "Firebase",
            icon: imgFirebase,
            color: "text-yellow-500",
        },
        {
            name: "Heroku",
            icon: imgHeroku,
            color: "text-yellow-500",
        },
        {
            name: "Github",
            icon: imgGithub,
            color: "text-gray-500",
        },
        {
            name: "Vs Code",
            icon: imgVscode,
            color: "text-yellow-500",
        },
        {
            name: "Git",
            icon: imgGit,
            color: "text-orange-500",
        },
        {
            name: "Netlify",
            icon: imgNetlify,
            color: "text-yellow-500",
        },

        {

            name: "Figma",
            icon: imgFigma,
            color: "text-teal-500",
        },
    ];


    const aosList = ['fade-up', 'fade-down', 'fade-fight', 'fade-left', 'fade-up-right', 'fade-up-left', 'fade-up-right', 'fade-down-left', 'fade-down-right', 'fade-zoom-in', 'flip-left', 'flip-right']


    const fadeIdx = () => {

        const maximum = aosList.length;
        const minimum = 0;
        let idx = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


        return aosList[idx % maximum];

    }


    return (
        <div id='skills' className={`${bgColor} hero min-h-screen flex flex-col py-16 `}>

            <div className="hero-content flex flex-col">

                <div className="w-full ">
                    <h1 className='text-blue-200 text-3xl font-bold tracking-wider '>My Skills</h1>

                </div>
                <br></br>
                <div className=' container grid grid-cols-1 lg:grid-cols-2 gap-5'>

                    <div
                        className='skill-shadow p-5 m-5 col-span-1 flex flex-col '
                        data-aos={fadeIdx()}
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 className='text-gray-400 text-2xl font-bold tracking-wider'>EXPERTISE</h1>
                        <div className='flex flex-wrap justify-center gap-5 py-12 '>
                            {
                                expertise.map((s, i) => <SingleSkill key={i} skill={s} />)
                            }
                        </div>
                    </div>


                    <div
                        className='skill-shadow p-5 m-5 col-span-1 flex flex-col '
                        data-aos={fadeIdx()}
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 className='text-gray-400 text-2xl font-bold tracking-wider'>COMFORTABLE</h1>
                        <div className='flex flex-wrap justify-center gap-5 py-12 '>
                            {
                                comfortable.map((s, i) => <SingleSkill key={i} skill={s} />)
                            }
                        </div>
                    </div>

                    <div
                        className='skill-shadow p-5 m-5 col-span-1 flex flex-col '
                        data-aos={fadeIdx()}
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 className='text-gray-400 text-2xl font-bold tracking-wider'>LEARNING <sub className='text-yellow-200 font-thin'>(on going)</sub></h1>
                        <div className='flex flex-wrap justify-center gap-5 py-12 '>
                            {
                                learning.map((s, i) => <SingleSkill key={i} skill={s} />)
                            }
                        </div>
                    </div>


                    <div
                        className='skill-shadow p-5 m-5 col-span-1 flex flex-col '
                        data-aos={fadeIdx()}
                        data-aos-duration="500"
                        data-aos-delay="200"
                    >
                        <h1 className='text-gray-400 text-2xl font-bold tracking-wider'>TOOLS</h1>
                        <div className='flex flex-wrap justify-center gap-5 py-12 '>
                            {
                                tools.map((s, i) => <SingleSkill key={i} skill={s} />)
                            }
                        </div>
                    </div>










                </div>
            </div>

        </div>
    );
};

export default Skills;