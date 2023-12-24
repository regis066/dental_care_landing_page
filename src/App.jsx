import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowDownLong, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { TbDentalBroken } from "react-icons/tb";
import { RiMenu5Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import image1 from './assets/image1.jpg';
import image2 from './assets/dayshift.jpg'
import image3 from './assets/panther.jpg'
import image4 from './assets/pan.jpg'
import image5 from './assets/swag.jpg'
import image6 from './assets/skull.jpg'
import image7 from './assets/swagboy.jpg'
import image8 from './assets/groot.jpg'
import { PiAtomLight } from "react-icons/pi";
import { TbAtomOff } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";

export default function App() {
  const [showDental, setShowDental] = useState(true);
  const [showAssistance, setShowAssistance] = useState(true);
  const [showDentTech , setShowDentTech] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDental(false);
      setShowAssistance(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures useEffect runs once on mount

  setTimeout(() => {
    setShowDentTech(true);
  } , 3000)
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen bg-gray-200">
      <div className=" flex justify-center items-center bg-white w-[70%] min-h-screen border rounded-xl drop-shadow-xl mt-20">
        {showDentTech ? (
          <div className="flex flex-col justify-center gap-3">
            <div className="border bg-orange-600  p-5 rounded-full text-white">
              <TbDentalBroken className="text-[50px]" />
            </div>
            <p className="text-orange-500">DENTYTECH</p>
          </div>
        ) : (
          <div>
            <motion.div>
              <div className="flex gap-4  items-center text-orange-700">
                <div className="border-2 border-orange-600 p-4 rounded-full">
                  <FaArrowRightLong />
                </div>
                <AnimatePresence>
                  {showDental ? (
                    <motion.button
                      className="bg-orange-600 px-6 py-4 rounded-full text-white"
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      DENTAL
                    </motion.button>
                  ) : (
                    <motion.button
                      className="bg-orange-600 p-5 rounded-full text-white"
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FaArrowRightLong />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
            <motion.div className="ml-[150px]">
              <div className="flex gap-4 items-center text-orange-700">
                <AnimatePresence>
                  {showAssistance ? (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      ASSISTANCE
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <FaArrowLeftLong />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="border bg-orange-600 p-1.5 rounded-full text-white">
                  <TbDentalBroken className="text-[50px]" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
      <div className="border p-5 bg-gray-400 rounded-full">
        <FaArrowDownLong className="text-gray-600 animate-bounce" />
      </div>

      {/* HOME */}

      <div className="flex flex-col w-[70%] min-h-screen bg-white drop-shadow-xl border rounded-xl px-10">
        <nav className="flex justify-between mt-4">
          <div className="flex items-center">
            <button className="border border-black px-3 py-1.5 rounded-full">
              Menu
            </button>
            <div className="border border-black p-2 rounded-full">
              <RiMenu5Fill />
            </div>
          </div>
          <div className="flex items-center">
            <div className="border bg-orange-600 p-1.5 rounded-full text-white">
              <TbDentalBroken className="text-[20px]" />
            </div>
            <p>DENTYTECH</p>
          </div>
          <div className="flex items-center">
            <button className="border border-black px-3 py-1 rounded-full">
              Log in
            </button>
            <button className="border bg-orange-500 text-white px-3 py-1 rounded-full">
              Sign Up
            </button>
          </div>
        </nav>

        <div className="flex flex-col justify-center items-center h-[80vh]">
          <p className="text-[100px] absolute">OUR ADVANTAGES </p>
          <img
            src={image1}
            alt="#"
            className="w-[300px] h-[40vh] object-cover absolute rounded-3xl "
          />
          <img
            src={image2}
            alt="#"
            className="w-[300px] h-[40vh] object-cover absolute rounded-3xl rotate-[-30deg]"
          />
          <img
            src={image3}
            alt="#"
            className="w-[300px] h-[40vh] object-cover absolute rounded-3xl rotate-[-25deg]"
          />
          <img
            src={image4}
            alt="#"
            className="w-[300px] h-[40vh] object-cover absolute rounded-3xl rotate-[-20deg]"
          />
          <img
            src={image5}
            alt="#"
            className="w-[300px] h-[40vh] object-cover absolute rounded-3xl rotate-[-15deg]"
          />
          <img
            src={image6}
            alt="#"
            className="w-[300px] h-[40vh] object-cover absolute rounded-3xl rotate-[-10deg]"
          />
          <img
            src={image7}
            alt="#"
            className="w-[300px] h-[40vh] object-cover absolute rounded-3xl rotate-[-5deg]"
          />
          <img
            src={image8}
            alt="#"
            className="w-[300px] h-[40vh] object-cover absolute rounded-3xl"
          />
        </div>
        <footer className="flex items-center justify-between">
          <div>
            <p>
              <span className="text-orange-500 font-bold text-[30px]">.</span>
              <br />
              Your Smile , Our Passion
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex gap-3">
              <FaInstagram />
              <FiYoutube />
              <CiFacebook />
            </div>

            <p>Best startup of 2023</p>
          </div>
        </footer>
        <div className="flex justify-center animate-bounce">
          <FaArrowDownLong />
        </div>
      </div>
      <div className="flex flex-col w-[70%] min-h-screen bg-white drop-shadow-xl border rounded-xl px-10">
        <nav className="flex justify-between mt-4">
          <div className="flex items-center">
            <button className="border border-black px-3 py-1.5 rounded-full">
              Menu
            </button>
            <div className="border border-black p-2 rounded-full">
              <RiMenu5Fill />
            </div>
          </div>
          <div className="flex items-center">
            <div className="border bg-orange-600 p-1.5 rounded-full text-white">
              <TbDentalBroken className="text-[20px]" />
            </div>
            <p>DENTYTECH</p>
          </div>
          <div className="flex items-center">
            <button className="border border-black px-3 py-1 rounded-full">
              Log in
            </button>
            <button className="border bg-orange-500 text-white px-3 py-1 rounded-full">
              Sign Up
            </button>
          </div>
        </nav>
        <div className="flex flex-col pt-20 gap-8 justify-center">
          <div className="flex gap-3 items-center">
            <p className="text-[100px]">REVOLUTIONIZING</p>
            <div className="flex flex-col">
              <div className="flex gap-3">
                <FaInstagram />
                <FiYoutube />
                <CiFacebook />
              </div>
              <p>
                Modern Solutions
                <br />
                Timeless Smiles
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="bg-blue-100 px-3 py-2 text-orange-400 border rounded-full">
              ASSISTANCE
            </button>
            <div className="border bg-orange-600 p-1.5 rounded-full text-white">
              <TbDentalBroken className="text-[35px]" />
            </div>
            <p className="text-[100px]">DENTAL</p>
            <div className="flex ">
              <img
                src={image1}
                alt=""
                className="w-20 h-20 object-cover rounded-full"
              />
              <img
                src={image2}
                alt=""
                className="w-20 h-20 object-cover rounded-full absolute ml-16"
              />
            </div>
            <p className="text-[100px] ml-16">CARE</p>
          </div>
          <div className="flex items-center">
            <p className="text-[100px]">WITH TECHNOLOGY</p>
            <div className="flex items-center">
              <img
                src={image3}
                alt=""
                className="w-10 h-10 rounded-full object-cover absolute ml-3"
              />
              <img
                src={image4}
                alt=""
                className="w-10 h-10 rounded-full object-cover absolute ml-6"
              />
              <img
                src={image5}
                alt=""
                className="w-10 h-10 rounded-full object-cover absolute ml-9"
              />
              <img
                src={image6}
                alt=""
                className="w-10 h-10 rounded-full object-cover absolute ml-12"
              />
            </div>
            <div
              id="add"
              className="flex items-center justify-center border w-6 h-6 bg-blue-100 rounded-full ml-[6rem]"
            >
              +
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 border border-orange-500 w-[9rem] h-[9rem] rounded-full mx-auto">
          <button className="w-[8rem] text-white font-bold h-[8rem] bg-orange-500 p-10 border rounded-full">
            GET STARTED
          </button>
        </div>
        <footer className="flex items-center justify-between mt-20">
          <div>
            <p>
              <span className="text-orange-500 font-bold text-[30px]">.</span>
              <br />
              Your Smile , Our Passion
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex gap-3">
              <FaInstagram />
              <FiYoutube />
              <CiFacebook />
            </div>
            <p>Best startup of 2023</p>
          </div>
        </footer>
        <div className="flex justify-center animate-bounce">
          <FaArrowDownLong />
        </div>
      </div>

      {/* MEET */}
      <div className="flex flex-col w-[70%] min-h-screen bg-white drop-shadow-xl border rounded-xl px-10">
        <nav className="flex justify-between mt-4 items-start">
          <div className="flex items-center">
            <button className="border border-black px-3 py-1.5 rounded-full">
              Menu
            </button>
            <div className="border border-black p-2 rounded-full">
              <RiMenu5Fill />
            </div>
          </div>
          <div className="flex items-center">
            <div className="border bg-orange-600 p-1.5 rounded-full text-white">
              <TbDentalBroken className="text-[20px]" />
            </div>
            <p>DENTYTECH</p>
          </div>
          <div className="flex items-center">
            <button className="border border-black px-3 py-1 rounded-full">
              Log in
            </button>
            <button className="border bg-orange-500 text-white px-3 py-1 rounded-full">
              Sign Up
            </button>
          </div>
        </nav>

        <div className="flex py-20 mt-20">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 border p-2 rounded-full">
                <TbAtomOff className="text-orange-500" />
              </div>
              <div className="bg-blue-100 border p-2 rounded-full">
                <TbDentalBroken className="text-orange-500" />
              </div>
              <div className="bg-blue-100 border p-2 rounded-full">
                <PiAtomLight className="text-orange-500" />
              </div>
            </div>
            <div>
              <p className="text-[100px]">
                EXPLORE OUR SERVICES, MAKE YOUR SMILE SHINE{" "}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="text-white px-3 py-2 border rounded-full bg-orange-500">
                Get The App
              </button>
              <button className="border border-black px-3 py-2 rounded-full">
                Meet The Team
              </button>
            </div>
            <footer className="flex items-center justify-between mt-20 px-6">
              <div>
                <p>
                  <span className="text-orange-500 font-bold text-[30px]">
                    .
                  </span>
                  <br />
                  Your Smile , Our Passion
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex gap-3">
                  <FaInstagram />
                  <FiYoutube />
                  <CiFacebook />
                </div>
                <p>Best startup of 2023</p>
              </div>
            </footer>
          </div>
          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4 flex-0.5">
            <div className="relative">
              <img
                src={image1}
                alt=""
                className="w-[700px] h-[400px] object-cover"
              />
              <div className="absolute top-0 right-0 p-2 flex gap-1">
                <div className="bg-white p-2 border rounded-full">
                  <GoHeart />
                </div>
                <div className="bg-white p-2 border rounded-full">
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={image2}
                alt=""
                className="w-[700px] h-[400px] object-cover rounded-3xl"
              />
              <div className="absolute top-0 right-0 p-2 flex gap-1">
                <div className="bg-white p-2 border rounded-full">
                  <GoHeart />
                </div>
                <div className="bg-white p-2 border rounded-full">
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={image3}
                alt=""
                className="w-[700px] h-[400px] object-cover rounded-3xl"
              />
              <div className="absolute top-0 right-0 p-2 flex gap-1">
                <div className="bg-white p-2 border rounded-full">
                  <GoHeart />
                </div>
                <div className="bg-white p-2 border rounded-full">
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={image4}
                alt=""
                className="w-[700px] h-[400px] object-cover rounded-3xl"
              />
              <div className="absolute top-0 right-0 p-2 flex gap-1">
                <div className="bg-white p-2 border rounded-full">
                  <GoHeart />
                </div>
                <div className="bg-white p-2 border rounded-full">
                  <GoArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
