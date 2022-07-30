import React, { useContext } from 'react';
import imgContact from '../../assets/contact.jpg'
import { ThemeContext } from '../../ThemeContext';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";


const Contact = () => {
    const { bgColor, darkMode } = useContext(ThemeContext);


    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("data: ", data);

        emailjs.sendForm('service_0mqmbvm', 'template_xhgggwo', data, 'bx3LqpRvfNsPPVdyG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error);
                console.log(error.text);
            });
    }


    return (
        <div className='relative overflow-hidden'>



            <div className={`hero min-h-screen  ${bgColor}  py-0 flex flex-col`}>

                <div
                    className="w-full hero-content  justify-start items-start mb-16 mt-20">

                    <div className="w-full ">
                        <h1
                            data-aos="fade-left"
                            data-aos-duration="1500"

                            className='text-blue-200 text-3xl font-bold tracking-wider '>Get in touch</h1>

                    </div>

                </div>


                <div
                    data-aos="fade-up-right"
                    data-aos-duration="1500"

                    className=" hero-content flex-col lg:flex-row skill-shadow mx-4 lg:mx-0 px-8 md:px-20 py-24 ">

                    <div className='w-full lg:w-1/2 relative'>
                        <img src={imgContact} className="w-full md:h-96 rounded-lg shadow-2xl" />
                    </div>


                    <div className='w-full lg:w-1/2 mx-auto'>



                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  gap-5 ">


                            <div className='flex flex-col gap-2 '>

                                <label className='text-blue-300 font-thin'>Full name</label>

                                <input {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"

                                    }
                                })}
                                    type='text'
                                    className={`pl-2 py-2 ${darkMode ? ' border-black' : 'border-gray-400'} border-2 ${bgColor} rounded-md  focus:outline-transparent focus:border-none focus:bg-gray-700 text-white`}
                                />

                                {
                                    errors.name && (
                                        <span className='text-red-500'>{errors.name.message}</span>
                                    )
                                }

                            </div>

                            <div className='flex flex-col gap-2'>

                                <label className='text-blue-300 font-thin'>Email</label>

                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Your email"

                                    }
                                })}
                                    type='email'
                                    className={`pl-2 py-2 ${darkMode ? ' border-black' : 'border-gray-400'} border-2 ${bgColor} rounded-md  focus:outline-transparent focus:border-none focus:bg-gray-700 text-white`}
                                />

                                {
                                    errors.email && (
                                        <span className='text-red-500'>{errors.email.message}</span>
                                    )
                                }

                            </div>


                            <div className='flex flex-col gap-2'>

                                <label className='text-blue-300 font-thin'>Message</label>

                                <textarea {...register("sentMessage", {
                                    required: {
                                        value: true,
                                        message: "Please write your message"

                                    }
                                })}
                                    type='text'
                                    className={`pl-2 py-2 ${darkMode ? ' border-black' : 'border-gray-400'} border-2 ${bgColor} rounded-md  focus:outline-transparent focus:border-none focus:bg-gray-700 text-white`}
                                />

                                {
                                    errors.sentMessage && (
                                        <span className='text-red-500'>{errors.sentMessage.message}</span>
                                    )
                                }

                            </div>


                            <div className='flex flex-col gap-2'>

                                <input className={`text-blue-400 cursor-pointer tracking-wider font-bold py-2 px-5 skill-shadow rounded-lg hover:bg-gray-900 active:text-red-500`} type="submit" value={'Send Message'} />

                            </div>

                        </form>








                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;