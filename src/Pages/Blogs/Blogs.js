import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const Blogs = () => {

    const { darkMode, bgColor } = useContext(ThemeContext);




    return (
        <div class={`hero min-h-screen ${bgColor}`}>
            <div class="hero-content text-center">

                <div class="max-w-md">

                    <h1 class="text-5xl font-bold text-green-500">Coming soon...</h1>

                </div>


            </div>
        </div>
    );
};

export default Blogs;