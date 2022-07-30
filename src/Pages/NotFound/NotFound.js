import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const Blogs = () => {

    const { darkMode, bgColor } = useContext(ThemeContext);




    return (
        <div className={`hero min-h-screen ${bgColor} relative overflow-hidden`}>
            <div className="hero-content text-center">

                <div className="max-w-md">

                    <h1 className="text-5xl font-bold text-red-500">Page not found</h1>

                </div>


            </div>
        </div>
    );
};

export default Blogs;