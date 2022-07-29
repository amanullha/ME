import React, { useContext } from 'react';
import imgIeee15 from '../../assets/ieee15.png'
import imgIcpc2020 from '../../assets/icpc2020.jpg'
import imgIcpc2019 from '../../assets/icpc2019.jpg'
import imgLucse2019 from '../../assets/lucse2019.png'
import { ThemeContext } from '../../ThemeContext';
import SingleParticipation from './SingleParticipation';

const Participation = () => {

    const { darkMode, bgColor } = useContext(ThemeContext);



    const participation = [

        {
            title: 'IEEEXtreme15.0 at 2021,8th position out of 111 teams in Bangladesh and 318th position out of 5570 teams around the world.',

            image: imgIeee15,

            team: 'DisjointSkillUnion (with 3 member[R,S])',

            link: 'https://ieeextreme.org/ieeextreme-15-0-ranking/'

        },
        {
            title: 'ACM International Collegiate Programming Contest(ACM ICPC)2020 at the University of Dhaka',

            image: imgIcpc2020,

            team: 'ULAB_Disjoint_Skill_Union (with 3 member[R,S])',

            link: 'https://algo.codemarshal.org/contests/icpc-dhaka-20/standings'

        },
        {
            title: 'ACM International Collegiate Programming Contest(ACM ICPC)2019 at Southeast University',

            image: imgIcpc2019,

            team: 'ULAB_DaalBhaat (with 3 member[S,T])',

            link: 'https://algo.codemarshal.org/contests/icpc-dhaka-19-onsite-main/standings'

        },
        {
            title: 'LU CSE Carnival 2019 Inter University Programming Contest',

            image: imgLucse2019,

            team: 'ULAB_DaalBhaat (with 3 member[S,T])',

            link: 'https://toph.co/c/lu-cse-carnival-iupc-2019/standings'

        },
    ]









    return (
        <div id='participation' className={`${bgColor} hero min-h-screen flex flex-col py-16 `}>

            <div className="w-full hero-content  justify-start items-start">

                <div className="w-full ">
                    <h1 className='text-blue-200 text-3xl font-bold tracking-wider '>My Participation</h1>

                </div>
            </div>

            <div className="w-full hero-content justify-center items-center">



                <div className=' container grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-5 '>

                    {

                        participation.map((p, i) =>
                            <SingleParticipation
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

export default Participation;