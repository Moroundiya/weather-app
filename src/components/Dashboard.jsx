import React, { useContext, useEffect } from 'react'
import errorImg from '../assets/images/error.png';
import per from '../assets/images/pressure.png';
import humid from '../assets/images/humid.svg';
import speed from '../assets/images/speed.svg';
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';
import { CityContext } from '../App';

function Dashboard() {

    const { data, error } = useContext(CityContext)

    const daytime = data?.weather[0].icon?.includes('d')


    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <>
            {data ?
                <div className="font-poppins animation-show py-10 flex flex-col text-white items-center md:bg-left w-full min-h-full bg-weather-bg bg-cover bg-no-repeat bg-bottom relative">
                    <p className='text-lg capitalize'>{data?.weather[0].description}</p>
                    <div className='w-full h-[270px] flex justify-center items-center'>
                        <WeatherIcon iconId={data?.weather[0]?.id} name="owm" night={!daytime} className='text-[10rem]' />
                    </div>
                    <h1 className='text-8xl font-semibold relative custom-shadow'>{Math.floor(data?.main.temp) - 273}
                        <span className='absolute -top-0 text-6xl right'>° </span>&nbsp;C
                    </h1>
                    <p className='text-xl font-semibold relative mb-5 custom-text-shadow'>
                        {data?.name}, <span>{data?.sys?.country}.</span>
                    </p>
                    <p className='text-md'>Friday, 26 August 2022</p>

                    <div className='w-full px-4 sm:px-8 md:w-[550px]'>
                        <div className='bg-stat-bg flex justify-between items-center px-5 rounded-xl bg-center bg-cover bg-no-repeat w-full h-[120px] mt-6'>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={per} className='mb-2 w-[28px]' alt="" />
                                <p className='font-semibold'>{data?.main.pressure} hPa</p>
                                <p className='font-regular text-sm'>Pressure</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={humid} className='mb-3' alt="" />
                                <p className='font-semibold'>{data?.main?.humidity}%</p>
                                <p className='font-regular text-sm'>Humidity</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <img src={speed} className='mb-3' alt="" />
                                <p className='font-semibold'>{data?.wind?.speed} km/h</p>
                                <p className='font-regular text-sm'>Wind Speed</p>
                            </div>
                        </div>
                    </div>

                    <p className='text-[#3B247B] font-sans  absolute bottom-2 text-custom-shadow font-bold copyright text-sm'>Designed by Moroundiya 😎</p>

                </div>
                :
                <div className="capitalize animation-show py-10 flex flex-col text-white items-center justify-center md:bg-left w-full min-h-full bg-weather-bg bg-cover bg-no-repeat bg-bottom relative">

                    <img src={errorImg} alt="" className='-mt-10' />
                    <p className='text-xl font-semibold custom-text-shadow'>
                        {error}
                    </p>

                    <p className='text-[#3B247B] font-sans  absolute bottom-2 text-custom-shadow font-bold copyright text-sm'>Designed by Moroundiya 😎</p>

                </div>}

        </>
    )
}

export default Dashboard