import React from 'react'
import img from "../assets/img/about.jpg"

const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap 5'>
            <div className='w-full lg:w-3/4 space-y-4'>
                <h1 className='text-4xl font-semibold text-center lg:text-start'>About us</h1>
                <p className='text-justify lg:text-start'>
                    Introducing an innovative feature to our elderly app, 
                    we are thrilled to announce the integration of personalized medication reminders. 
                    Designed with the utmost care and consideration for the unique needs of our elderly users, 
                    this feature ensures that medication management becomes effortless and stress-free. 
                    Through gentle reminders and easy-to-follow instructions, users can stay on track with their medication schedules, 
                    promoting better health outcomes and peace of mind. With customizable settings tailored to individual preferences and medication regimens,
                    our app empowers seniors to take control of their health while offering reassurance to caregivers and loved ones. Embracing technology to enhance the quality of life for the elderly,
                    our app continues to evolve as a trusted companion in their wellness journey.
                </p>
                    <p className='text-justify lg:text-start'>
                    In response to the growing demand for connectivity and social engagement among seniors, 
                    our elderly app introduces a vibrant community feature. 
                    This exciting addition creates a digital space where older adults can connect, 
                    share experiences, and forge meaningful friendships. 
                    Through discussion forums, interest-based groups, and virtual events, 
                    users can engage in lively conversations, discover new hobbies, 
                    and stay connected with like-minded individuals from the comfort of their homes.
                    With a focus on inclusivity and accessibility, our app fosters a sense of belonging and camaraderie, 
                    combating feelings of isolation and loneliness often experienced by the elderly.
                    By harnessing the power of technology to cultivate a supportive community, 
                    we aim to enrich the lives of seniors and promote social well-being in every interaction.
                </p>
                <p className='text-justify lg:text-start'>
                    Empowering independence and safety, our elderly app introduces a cutting-edge emergency assistance feature. 
                    With just a tap of a button, users can swiftly access emergency services and notify designated contacts in times of need. 
                    Whether it's a medical emergency or a safety concern, 
                    our app provides peace of mind knowing that help is readily available at their fingertips. 
                    Equipped with GPS tracking and vital medical information, 
                    emergency responders can quickly locate and assist users, ensuring swift and effective response times.
                    By prioritizing user safety and well-being, 
                    our app not only enhances the quality of life for seniors but also offers reassurance to their families and caregivers.
                    With this innovative feature, we continue our commitment to leveraging technology for the betterment of aging individuals, 
                    promoting independence and security every step of the way.
                </p>
            </div>
            <div className='w-full lg:w-3/4'>
                <img src={img}alt="img" className='rounded-lg'/>
            </div>
        </div>
    )
}

export default About
