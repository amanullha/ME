import React, { useContext, useRef } from 'react';
import imgContact from '../../assets/contact.jpg'
import { ThemeContext } from '../../ThemeContext';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';



const Contact = () => {
    const { bgColor, darkMode } = useContext(ThemeContext);

    const form = useRef();


    const sendEmail = (e) => {

        e.preventDefault();
        console.log(form.current);

        emailjs.sendForm('service_0mqmbvm', 'template_xhgggwo', form.current, 'bx3LqpRvfNsPPVdyG')

            .then((result) => {
                console.log(result.text);

                swal("Message sent", "Thanks for messaging me. You will get my feedback very soon", "success");
                form.current.name.value = ""
                form.current.email.value = ""
                form.current.sentMessage.value = ""


            }, (error) => {
                console.log(error.text);
            });
    };





    return (
        <div id='contact' className={`relative overflow-hidden w-full`}>



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



                        <form ref={form} onSubmit={sendEmail} className=" lg:ml-5 flex flex-col  gap-5 ">


                            <div className='flex flex-col gap-2 '>

                                <label className='text-blue-300 font-thin'>Full name</label>

                                <input
                                    className={`pl-2 py-2 ${darkMode ? ' border-black' : 'border-gray-400'} border-2 ${bgColor} rounded-md  focus:outline-transparent focus:border-none focus:bg-gray-700 text-white`}

                                    type="text" name="name" required />
                            </div>


                            <div className='flex flex-col gap-2 '>

                                <label className='text-blue-300 font-thin'>Email</label>

                                <input
                                    className={`pl-2 py-2 ${darkMode ? ' border-black' : 'border-gray-400'} border-2 ${bgColor} rounded-md  focus:outline-transparent focus:border-none focus:bg-gray-700 text-white`}

                                    type="email" name="email" required />
                            </div>


                            <div className='flex flex-col gap-2 '>

                                <label className='text-blue-300 font-thin'>Message</label>

                                <input
                                    className={`pl-2 py-2 ${darkMode ? ' border-black' : 'border-gray-400'} border-2 ${bgColor} rounded-md  focus:outline-transparent focus:border-none focus:bg-gray-700 text-white`}

                                    type="text" name="sentMessage" required />
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