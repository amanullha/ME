import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';



const Blog = () => {

    const { darkMode, bgColor } = useContext(ThemeContext);




    return (
        <div className='relative overflow-hidden'>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">

                </div>
            </div>


        </div>
    );
};

export default Blog;