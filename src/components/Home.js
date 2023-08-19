import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleLeft, faArrowCircleRight, faArrowLeft, faArrowRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rihana3 from "./rihana3.jpg";
import Aos from "aos";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        Aos.refresh();
    })
    return ( 
        <div className="m-[40px]" data-aos="fade-in">
            <div className="flex flex-row space-x-4 md:justify-normal justify-center ">
                <div className="space-x-2 flex items-center hover:bg-gray-300 transition duration-300 ease bg-white rounded-2xl p-[6px] text-black">
                    <FontAwesomeIcon icon={faFacebook} className="text-xl"/> 
                    <a href="" >Facebook</a>     
                </div>

                <div className="flex space-x-2 items-center hover:bg-gray-300 transition duration-300 ease bg-white rounded-2xl p-[6px] text-black">
                    <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                    <a href="" >Instagram</a>
                </div>
            </div>

            <div className="md:justify-normal justify-center">
                <div className="flex flex-col md:ml-auto md:m-0 m-auto md:items-end items-center md:text-right max-w-[400px] text-center md:justify-end mt-[40px]">
                    <p>The sun set behind the mountains, casting a warm orange glow across the sky. Birds chirped as they flew home for the night. A gentle breeze rustled the leaves, bringing a sense of tranquility to the surroundings."

                        Please note that this text was generated at random and doesn't have any specific meaning or context.</p>
                    
                    <div className="flex items-center hover:bg-gray-400 duration-300 ease border rounded-xl mt-[7px] p-[4px] space-x-3">
                        <a href="" className="">Learn more</a>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                    </div>
                </div>
            </div>


        <div className="flex flex-col md:flex-row mt-[40px]">
            <div className="left mb-[20px]">
                <div className="flex flex-row space-x-2 justify-center md:justify-normal md:mb-[20px]">
                    <a href="" className="border border-white rounded-xl p-1 hover:bg-gray-400 transition duration-300 ease-in-out">Stylish</a>
                    <a href="" className="border border-white rounded-xl p-1 hover:bg-gray-400 transition duration-300 ease-in-out">Futirish</a>
                    <a href="" className="border border-white rounded-xl p-1 hover:bg-gray-400 transition duration-300 ease-in-out">Modern</a>
                </div>

                <div className="mt-[40px] md:mt-0">
                    <h1 className="font-bold text-6xl text-center md:text-left">Shop Our Latest Arrivals </h1>
                    <div className="flex md:flex-row flex-col items-center space-x-6 mt-[10px] mb-[10px]">
                        <h1 className="text-6xl font-bold  text-center md:text-left">For The Perfect </h1>
                    </div>
                        <div className="flex md:flex-row flex-col space-x-4 items-center">
                            <h1 className="text-6xl occasion"> Outfil Occasion</h1>
                            <div className="flex space-x-4 items-center my-[30px]">
                                <a href="" className="p-[6px] hover:bg-gray-400 duration-300 ease border rounded-3xl ">Start Shoping</a>
                                <FontAwesomeIcon icon={faArrowLeft} className="p-[6px] hover:bg-gray-400 duration-300 ease rounded-3xl border" />
                            </div>
                        </div>
                </div>
            </div>

            <div className="right md:ml-auto mb-[40px] flex items-center justify-center m-auto md:m-0">
                <div className="px-[80px] pb-[120px] bg-gray-200 rounded-3xl text-black">
                    <h1 className="font-bold text-7xl">4.7 <span className="text-xl">(389)</span></h1>
                    <p>Happy client score</p>
                    <img src={rihana3} className="w-[150px] rounded-3xl absolute ml-[70px] mt-[70px]" alt="" />
                </div>
            </div>
        </div>

        <div className="text-center justify-center mt-[40px] m-auto max-w-[500px]">
            <p>Amidst rolling hills and tranquil lakes, nature's beauty beckons. Birds serenade with melodic tunes while sunsets paint the horizon with hues of gold. In this peaceful haven, worries dissipate and the soul finds solace.</p>
        </div>
    </div>
    );
}
 
export default Home;