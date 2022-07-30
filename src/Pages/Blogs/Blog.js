import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';



const Blog = () => {

    const { darkMode, bgColor } = useContext(ThemeContext);




    return (
        <div className='relative overflow-hidden'>


            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">

                </div>
            </div>


        </div>
    );
};

export default Blog;