import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Doctors = () => {
    const data = [
        {
            img: "/src/assets/img/doc1.jpg",
            name: "Dr. Dennis Kenya",
            specialties: "Orthopedic Surgeon",
        },
        {
            img: "/src/assets/img/doc2.jpeg",
            name: "Dr. Julius Arsenal",
            specialties: "Cardiologist",
        },
        {
            img: "/src/assets/img/doc3.jpeg",
            name: "Dr. Who Here",
            specialties: "Pediatrician",
        },
        {
            img: "/src/assets/img/doc4.jpg",
            name: "Dr. Ann Waithera",
            specialties: "Neurologist",
        },
        {
            img: "/src/assets/img/doc5.jpeg",
            name: "Dr. Jane Olivia",
            specialties: "Dermatologist",
        },
        {
            img: "/src/assets/img/doc6.jpg",
            name: "Dr. Gitonga Martinez",
            specialties: "Ophthalmologist",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16'>
            <div className='flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0'>
                <div>
                    <h1 className='text-4xl font-semibold text-center lg:text-start'>Our Doctors</h1>
                    <p className='mt-2 text-center lg:text-start'>
                    The "Doctors" link provides access to contact available doctors specializing in the indicated fields.
                    </p>
                </div>
                <div className='flex gap-5 mt-4 lg:mt-0'>
                    <button className='bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]'>
                        <FaArrowLeft size={25}/>
                    </button>
                    <button className='bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]'>
                        <FaArrowRight size={25}/>
                    </button>
                </div>
            </div>
            <div className='mt-5'>
                <Slider{...settings}>
                {data.map((e , index) => (
                    <div className='h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer'
                    key={index}>
                        <div>
                            <img src={e.img} alt='img' className='h-56 rounded-t-xl w-full'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='font-semibold text-xl pt-4'>{e.name}</h1>
                            <h3 className='pt-2'>{e.specialties}</h3>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    )
}

export default Doctors
