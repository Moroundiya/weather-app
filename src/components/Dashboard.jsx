import React from 'react'
import cloud from '../assets/images/cloudy.svg';
import sunny from '../assets/images/sunny.svg';
import storm from '../assets/images/storm.svg';
import thunder from '../assets/images/thunder2.svg';
import rain from '../assets/images/rain.svg';
import snow from '../assets/images/snow.svg';
import per from '../assets/images/per.svg';
import humid from '../assets/images/humid.svg';
import speed from '../assets/images/speed.svg';

function Dashboard() {
    return (
        <>
            <div className="font-poppins animation-show py-10 flex flex-col text-white items-center w-full min-h-full bg-weather-bg bg-cover bg-no-repeat bg-bottom relative">
                <p className='mb-3 text-lg'>Mostly Sunny</p>
                <div className='w-full h-[270px] flex justify-center items-center'>
                    <img src={cloud} alt="" className='w-[270px]' />
                </div>
                <h1 className='text-8xl font-semibold relative mt-4 custom-shadow'>23
                    <span className='absolute -top-0 text-6xl'>°</span>
                </h1>
                <p className='text-xl font-semibold relative mb-5 custom-text-shadow'>
                    Lagos, <span>NG.</span>
                </p>
                <p className='text-md'>Friday, 26 August 2022 | 10:00</p>

                <div className='w-full px-8'>
                    <div className='bg-stat-bg flex justify-between items-center px-5 rounded-xl bg-center bg-cover bg-no-repeat w-full h-[120px] mt-6'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={per} className='mb-3' alt="" />
                            <p className='font-semibold'>30%</p>
                            <p className='font-regular text-sm'>Precipitation</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={humid} className='mb-3' alt="" />
                            <p className='font-semibold'>20%</p>
                            <p className='font-regular text-sm'>Humidity</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={speed} className='mb-3' alt="" />
                            <p className='font-semibold'>9km/h</p>
                            <p className='font-regular text-sm'>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard