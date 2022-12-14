import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import SingleProject from './SingleProject';
import imgPaintingVila from '../../assets/paintingVila.png'
import imgStockBinder from '../../assets/stockBinder.png'
import imgSolidHumidiy from '../../assets//solidHumidity.png'

const Projects = () => {

    const { darkMode, bgColor } = useContext(ThemeContext);


    const projects = [
        {
            id: 1,
            title: 'Paint House',
            shortDescription: "Manufacturer Company Website",
            longDescription: "This is a manufacturer's website. The owner/admin of the website will be selling their manufacturing tools and users will order to maintain a minimum range.",
            image: imgPaintingVila,
            links: {
                live: "https://paint-house-e0a95.web.app/",
                client: "https://github.com/amanullha/Paint-House-Frontend-Side_MERN",
                server: "https://github.com/amanullha/Paint-House-Backend-Side_MERN",
            },
            technology: {
                type: 'web',
                stack: 'MERN',
                featuresList: ['Authentication user validation using firebase', 'Implement role-based routing', 'Add/Delete/Update product by an admin', 'Delete unpaid orders by admin', 'Add product to the cart by the user', 'Cancel unpaid order/update product quantity via user and also take reviews', 'Check my orders via user and all the order / admin / users via admin', 'Check and update the profile of the user/admin','Used JWT for secure API', 'Project deploy on firebase(frontEnd) and render(backEnd) '],

                frontEnd: ['React JS', 'Tailwind', 'HTML', 'CSS', 'JavaScript', 'DaisyUi', 'Firebase'],

                backEnd: ['Node JS', 'Express JS', 'MongoDB'],
                others: []


            }
        },
        {
            id: 2,
            title: 'StockBinder',
            shortDescription: "Inventory management website to manage company Stock",
            longDescription: "This is an inventory management website. Users will be able to add items and update items. but a user can only delete those items which were added by this user.",
            image: imgStockBinder,
            links: {
                live: "https://stock-binder-update.web.app/",
                client: "https://github.com/amanullha/StockBinder_Client_Side_MERN",
                server: "https://github.com/amanullha/StockBiner_Server_Side_MERN",
            },
            technology: {
                type: 'web',
                stack: 'MERN',
                featuresList: ['Authentication user validation using firebase', '. Manage inventories', ' Add/update/delete product via valid admin', 'Dashboard design', ' Role-based route', 'Super admin can be made admin to super', 'admin and super admin to admin', 'Super admin can be deleted admin or a super admin','Used JWT for secure API','Project deploy on firebase(frontEnd) and render(backEnd) '],

                frontEnd: ['React JS', 'Tailwind', 'HTML', 'CSS', 'JavaScript', 'DaisyUi', 'Firebase'],

                backEnd: ['Node JS', 'Express JS', 'MongoDB'],
                others: []


            }
        },
        {
            id: 3,
            title: 'Solid Humidity Sensing System',
            shortDescription: "Solid Humidity Sensing System Using Arduino",
            longDescription: "This is a mini project which can be  used to sense the moisture of soil and to display the percentage on the LCD monitor",
            image: imgSolidHumidiy,
            links: {
                live: "https://github.com/amanullha/Projects/tree/main/Solid%20Humidity%20sensing%20using%20Ardunio",
                client: "",
                server: "",
            },
            technology: {
                type: 'EEE',
                stack: 'IOT',
                featuresList: ['Checking the Humidity of the Solid automatic', 'Implemented using Arduino and Assembly language'],

                frontEnd: [],

                backEnd: [],

                others: ['Analog', 'Moisture sensor', 'Sensor', 'Serial', 'soil', 'Arduino', 'Assembly language']

            }
        },

    ];





    return (
        <div id='projects' className={`${bgColor} hero min-h-screen flex flex-col py-16 relative overflow-hidden`}>

            <div className="w-full hero-content  justify-start items-start">

                <div className="w-full ">
                    <h1 className='text-blue-200 text-3xl font-bold tracking-wider '>Projects that I have done</h1>

                </div>
            </div>

            <div className="w-full hero-content justify-center items-center">



                <div className=' container grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-5 '>

                    {

                        projects.map((p, i) =>
                            <SingleProject
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

export default Projects;