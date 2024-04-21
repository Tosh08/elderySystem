import React from 'react'
import Button from '../layouts/Button'
import assets from "../assets/img/home.png";


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-black md:bg-opacity-100 bg-cover bg-center" style={{ backgroundImage: `url(${assets})` }}>

      <div className=' w-full lg:w-4/5 space-y-5 mt-10'>
        <h1 className='text-5xl font-bold leading-tight'>Empowering the Seniors for a Vibrant Life at the GOLDEN AGE..</h1>
        <p>
        Welcome to Elderly Companions,
        where caring support and reliable medication reminders come together to provide peace of mind for you and your loved ones. 
        We understand the importance of staying on top of medication schedules, 
        and our compassionate caregivers are here to offer gentle reminders and assistance, ensuring that medications are taken on time and as prescribed. 
        Beyond just reminders, we prioritize building meaningful connections with our elderly clients, 
        engaging in heartfelt conversations and activities that bring joy to their lives. 
        </p>
        <Button title='Check Live Chat'/>
      </div>
    </div>
  )
}

export default Home
