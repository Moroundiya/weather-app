import React, { useContext, useEffect } from 'react'
import cloud from '../assets/images/cloudy.svg';
import sunny from '../assets/images/sunny.svg';
import storm from '../assets/images/storm.svg';
import thunder from '../assets/images/thunder2.svg';
import rain from '../assets/images/rain.svg';
import snow from '../assets/images/snow.svg';
import per from '../assets/images/per.svg';
import humid from '../assets/images/humid.svg';
import speed from '../assets/images/speed.svg';
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';
import { CityContext } from '../App';

function Dashboard() {

    const { data } = useContext(CityContext)

    const daytime = data?.weather[0].icon?.includes('d')

    console.log('daytime is ' + daytime)
    // var getDaytime;

    // if (daytime) {
    //     getDaytime = 'night'
    // } else {
    //     getDaytime = null
    // }


    // useEffect(() => {
    //     console.log(daytime)
    // }, [daytime])


    return (
        <>
            <div className="font-poppins animation-show py-10 flex flex-col text-white items-center w-full min-h-full bg-weather-bg bg-cover bg-no-repeat bg-bottom relative">
                <p className='mb-3 text-lg capitalize'>{data?.weather[0].description}</p>
                <div className='w-full h-[270px] flex justify-center items-center pt-5'>
                    {/* <img src={cloud} alt="" className='w-[270px]' /> */}
                    <WeatherIcon iconId={data?.weather[0]?.id} name="owm" night={!daytime} className='text-[10rem]' />
                </div>
                <h1 className='text-8xl font-semibold relative mt-4 custom-shadow'>{Math.floor(data?.main.temp) - 273}
                    <span className='absolute -top-0 text-6xl right'>° </span>&nbsp;C
                </h1>
                <p className='text-xl font-semibold relative mb-5 custom-text-shadow'>
                    {data?.name}, <span>{data?.sys?.country}.</span>
                </p>
                <p className='text-md'>Friday, 26 August 2022 | 10:00</p>

                <div className='w-full px-8'>
                    <div className='bg-stat-bg flex justify-between items-center px-5 rounded-xl bg-center bg-cover bg-no-repeat w-full h-[120px] mt-6'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={per} className='mb-3' alt="" />
                            <p className='font-semibold'>{data?.rain ? data?.rain['1h'] + 'mm' : 'N/A'}</p>
                            <p className='font-regular text-sm'>Chance of rain</p>
                            <p className='text-[.6rem]'>(Rain guage)</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={humid} className='mb-3' alt="" />
                            <p className='font-semibold'>{data?.main?.humidity}%</p>
                            <p className='font-regular text-sm'>Humidity</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={speed} className='mb-3' alt="" />
                            <p className='font-semibold'>{data?.wind?.speed}km/h</p>
                            <p className='font-regular text-sm'>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard