import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import { useParams } from "react-router-dom";
import imgPaintingVila from "../../assets/paintingVila.png";
import imgStockBinder from "../../assets/stockBinder.png";
import imgSolidHumidiy from "../../assets//solidHumidity.png";
import { TbListDetails } from "react-icons/tb";
import { MdOutlineLiveTv } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import './Banner.css'

const ProjectDetails = () => {
  let { id } = useParams();
  const { darkMode, bgColor } = useContext(ThemeContext);

  const [project, setProject] = useState();

  const projects = [
    {
      id: 1,
      title: "Painting Vila",
      shortDescription: "Manufacturer Company Website",
      longDescription:
        "This is a manufacturer's website. The owner/admin of the website will be selling their manufacturing tools and users will order to maintain a minimum range.",
      image: imgPaintingVila,
      links: {
        live: "https://painting-vila.web.app/home",
        client: "https://github.com/amanullha/PaintingVila_Client_MERN",
        server: "https://github.com/amanullha/PaintingVila_Server_MERN",
      },
      technology: {
        type: "web",
        stack: "MERN",
        featuresList: [
          "Authentication user validation using firebase",
          "Supper Admin provides be an admin to user",
          "Add/Delete/Update product by an admin",
          "Delete unpaid orders by admin",
          "Add product to the cart by the user",
          "Cancel unpaid order/update product quantity via user and also take reviews",
          "Check my orders via user and all theorder / admin / users via admin",
          "Check and update the profile of the user/admin",
          "Project deploy on firebase(frontEnd) and heroku(backEnd) ",
        ],

        frontEnd: [
          "React JS",
          "Tailwind",
          "HTML",
          "CSS",
          "JavaScript",
          "DaisyUi",
          "Firebase",
        ],

        backEnd: ["Node JS", "Express JS", "MongoDB"],
        others: [],
      },
    },
    {
      id: 2,
      title: "StockBinder",
      shortDescription: "Inventory management website to manage company Stock",
      longDescription:
        "This is an inventory management website. user will be able to add items and update items.but a user can only delete those items which were added by this user.",
      image: imgStockBinder,
      links: {
        live: "https://stock-binder-ef7f4.web.app/",
        client: "https://github.com/amanullha/StockBinder_Client_MERN",
        server: "https://github.com/amanullha/StockBinder_Server_MERN",
      },
      technology: {
        type: "web",
        stack: "MERN",
        featuresList: [
          "Authentication user validation using firebase",
          "Authentication user validation using firebase",
          "Explore and Show all the product",
          "Show my product and Delete just my products",
          "Project deploy on firebase(frontEnd) and heroku(backEnd) ",
          "Checking the Humidity of the Solid automatic",
          "Implemented using Arduino and Assembly language",
        ],

        frontEnd: [
          "React JS",
          "Tailwind",
          "HTML",
          "CSS",
          "JavaScript",
          "DaisyUi",
          "Firebase",
        ],

        backEnd: ["Node JS", "Express JS", "MongoDB"],
        others: [],
      },
    },
    {
      id: 3,
      title: "Solid Humidity Sensing System",
      shortDescription: "Solid Humidity Sensing System Using Arduino",
      longDescription:
        "This is a mini project which can be  used to sense the moisture of soil and to display the percentage on the LCD monitor",
      image: imgSolidHumidiy,
      links: {
        live: "https://github.com/amanullha/Projects/tree/main/Solid%20Humidity%20sensing%20using%20Ardunio",
        client: "",
        server: "",
      },
      technology: {
        type: "EEE",
        stack: "IOT",
        featuresList: [
          "Checking the Humidity of the Solid automatic",
          "Implemented using Arduino and Assembly language",
        ],

        frontEnd: [],

        backEnd: [],

        others: [
          "Analog",
          "Moisture sensor",
          "Sensor",
          "Serial",
          "soil",
          "Arduino",
          "Assembly language",
        ],
      },
    },
  ];

  useEffect(() => {
    const p = projects.find((p) => p.id == id);

    setProject(p);
    console.log("porject des: ", p);
  }, [id]);

  const aosList = [
    "fade-up",
    "fade-down",
    "fade-fight",
    "fade-left",
    "fade-up-right",
    "fade-up-left",
    "fade-up-right",
    "fade-down-left",
    "fade-down-right",
    "fade-zoom-in",
    "flip-left",
    "flip-right",
  ];

  const fadeIdx = () => {
    const maximum = aosList.length;
    const minimum = 0;
    let idx = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    return aosList[idx % maximum];
  };

  console.log("project: ", project);

  return (
    <div
      id="projects"
      className={`${bgColor} hero min-h-screen flex flex-col py-16 relative overflow-hidden`}
    >
      <div className="w-full hero-content  justify-center items-center">
        <div className="w-full ">
          <h1 className="text-blue-200 text-3xl font-bold tracking-wider text-center">
            Project Details
          </h1>
        </div>
      </div>

      <div className="w-full hero-content justify-center items-center">
        <div
          className={`skill-shadow px-5 py-12 m-5 col-span-1 grid grid-cols-1 lg:grid-cols-2 hover:shadow-2xl`}
          data-aos={fadeIdx()}
          data-aos-duration="2000"
          data-aos-delay="200"
        >
          <div className="description-image lg:pr-12 px-2">
            <img className='h-[400px] lg:h-[800px] w-full object-cover' src={project?.image} alt="" srcSet="" />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between py-5">
              <h1
                className={`text-2xl font-bold tracking-wider ${darkMode ? "text-yellow-300" : "text-yellow-200"
                  }`}
              >
                {project?.title}
              </h1>
              <h1
                className={`text-xl font-bold tracking-wider ${darkMode ? "text-blue-700" : "text-yellow-600"
                  }`}
              >
                {project?.technology?.stack}
              </h1>
            </div>

            <div>
              <h1 className="text-blue-200 text-xl font-bold">
                Project overview:
              </h1>
              <h1 className="text-gray-300 tracking-wide p-2 pl-5">
                {project?.longDescription}
              </h1>
            </div>

            <div>
              <h1 className="text-blue-200 text-xl font-bold">
                Project features:
              </h1>
              <ul className="text-gray-400 tracking-wide p-2 pl-5">
                {project?.technology?.featuresList?.map((t) => (
                  <li className="my-1 list-decimal text-gray-300">{t}</li>
                ))}
              </ul>
            </div>

            <div className='flex flex-col'>
              <h1 className="text-blue-200 text-xl font-bold">
                Technology used:
              </h1>

              {/* for 'web' project  */}
              {
                project?.technology?.type === 'web' ? <>

                  <div className='flex justify-between items-center my-5'>

                    <h1 className="text-blue-200 py-5 pr-5 border-r-2 border-gray-500 ">FrontEnd</h1>

                    <ul className=" text-gray-400 tracking-wide p-2 pl-5 flex flex-wrap gap-5">

                      {

                        project?.technology?.frontEnd?.map(skill => <div
                          className={`skill-shadow rounded-xl text-blue-400 font-bold py-2 px-5`}
                          data-aos="zoom-in"
                          data-aos-duration="1000"
                          data-aos-delay="500"
                        >
                          {skill}

                        </div>)
                      }
                    </ul>
                  </div>

                  <div className='flex justify-between items-center my-5'>

                    <h1 className="text-blue-200 py-5 pr-5 border-r-2 border-gray-500 ">BackendEnd</h1>

                    <ul className=" text-gray-400 tracking-wide p-2 pl-5 flex flex-wrap gap-5">

                      {

                        project?.technology?.backEnd?.map(skill => <div
                          className={`skill-shadow rounded-xl text-blue-400 font-bold py-2 px-5`}
                          data-aos="zoom-in"
                          data-aos-duration="1000"
                          data-aos-delay="500"
                        >
                          {skill}

                        </div>)
                      }
                    </ul>
                  </div>




                </> : <></>
              }



              {/* for 'EEE/IOT' project  */}
              {
                project?.technology?.type === 'EEE' ? <>

                  <div className='flex justify-between items-center my-5'>



                    <ul className=" text-gray-400 tracking-wide p-2 pl-5 flex flex-wrap gap-5">

                      {

                        project?.technology?.others?.map(skill => <div
                          className={`skill-shadow rounded-xl text-blue-400 font-bold py-2 px-5`}
                          data-aos="zoom-in"
                          data-aos-duration="1000"
                          data-aos-delay="500"
                        >
                          {skill}

                        </div>)
                      }
                    </ul>
                  </div>







                </> : <></>
              }




            </div>

            <div className="flex justify-between items-center py-5  ">

              {
                project?.technology?.type === 'web' ? <>

                  <a target="_blank" href={project?.links?.client} className="hover-shadow flex justify-between items-center gap-2 cursor-pointer px-2 py-1">

                    <div
                      className={`${darkMode ? "text-green-700" : "text-green-500"} `}
                    >
                      <TbListDetails size={25} />
                    </div>

                    <h1 className="text-gray-300">FrontEnd</h1>
                  </a>

                  <a target="_blank" href={project?.links?.server} className="hover-shadow flex justify-between items-center gap-2 cursor-pointer px-2 py-1">
                    <div
                      className={`${darkMode ? "text-green-700" : "text-green-500"} `}
                    >
                      <TbListDetails size={25} />
                    </div>

                    <h1 className="text-gray-300">BackEnd</h1>
                  </a>


                </>

                  :

                  <></>
              }

              <a
                href={project?.links?.live}
                target="_blank"
                className="hover-shadow  flex justify-between items-center gap-2 cursor-pointer px-2 py-1"
              >
                <div className={`${darkMode ? "text-red-900" : "text-red-600"} `}>
                  <MdOutlineLiveTv size={25} />
                </div>

                <h1 className="text-gray-300 pt-1">Live</h1>
              </a>


            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
