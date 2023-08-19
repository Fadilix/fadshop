import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import i1 from "./img/riri1.webp"
import i2 from "./img/riri2.webp"
import i3 from "./clothes/1.jpg";
import i4 from "./clothes/2.jpg";
import i5 from "./clothes/3.jpg";
import i6 from "./clothes/4.jpg";
import i7 from "./clothes/5.jpg";
import i8 from "./clothes/6.jpg";
import i9 from "./img/nbadraft.webp";
import i10 from "./img/logo.png";
import Aos from "aos";

const Products = () => {
  const images = [i3, i4, i5, i6, i7, i8];
  
  // Generate random prices for each image t'as capté Oui je parle anglais choco
  const randomPrices = images.map(() => {
    const minPrice = 20; // Minimum price
    const maxPrice = 100; // Maximum price
    const randomPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    return randomPrice;
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() =>{
    Aos.refresh();
  })

  return (
    <div className="overflow-hidden">

        <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index}>
            <img src={image} alt={`Slide ${index}`} width={200} className="w-full p-2 rounded-2xl" />
            <p className="text-center">Price: ${randomPrices[index]}</p>
            </div>
        ))}
        </Slider>
    
        <div className="my-[100px] flex justify-center flex-col space-x-3 m-auto" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">   
            <h1 className="uppercase text-center text-bold font-bold text-6xl">Style is in the pocket</h1>
            <p className="m-auto uppercase text-center">We are evolving to give you the best experience of our products</p>
        </div>

        <div className="" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
            <h1 className="font-bold text-3xl text-center">Our collaboration with NBA</h1>
            <img src={i9} className="rounded-t-[40%] rounded-b-xl border shadow-xl shadow-white" />
        </div>

        <div className="flex md:flex-row flex-col items-center m-[40px] justify-evenly md:space-y-0 space-y-4" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
            <div className="flex flex-col text-center">
                <h2 className=" font-bold text-6xl">Rihanna</h2>
                <p className="text-xl max-w-[800px] mr-auto">"We love all of our beautiful brands here at Hebe but there is a special place in our heart for the New Zealand brands. We have made it easy for you to find a little about each of these amazing brands. Head over to our Homegrown page where we give you a little insight into what makes each of these brands so special."</p>
            </div>

            <div>
                <img src={i1} className="w-[600px] rounded-3xl border border-white shadow-xl shadow-white" />
            </div>
        </div>

        <div className="my-[60px] flex flex-col md:flex-row items-center justify-evenly m-[50px] bg-black p-4 rounded-3xl md:space-y-0 space-y-4" data-aos="zoom-in" data-aos-duration="1000">
            <a href="" className="bg-white text-black rounded-3xl p-4 hover:bg-gray-400 transition duration-300 ease">
                <h2 className="text-4xl font-bold uppercase">join us</h2>
            </a>
            <img src={i10} className="shadow-2xl rounded-[50%] shadow-white" />
        </div>

        
    </div>

    
  );
};

export default Products;
