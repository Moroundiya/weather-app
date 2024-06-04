import React, { useContext, useEffect, useState } from 'react'
import { CrossFade } from "react-crossfade-simple";
import cloud from '../assets/images/cloudy.svg';
import sunny from '../assets/images/sunny.svg';
import storm from '../assets/images/storm.svg';
import thunder from '../assets/images/thunder.svg';
import rain from '../assets/images/rain.svg';
import snow from '../assets/images/snow.svg';
import axios from 'axios';
import { CityContext } from '../App';

// export const DataContext = createContext()

function Welcome({ showNextPage }) {
    const images = [sunny, rain, storm, thunder, snow, cloud]
    const { city, setCity, data, setData } = useContext(CityContext)

    const [swapped, setSwapped] = useState(0);
    const [count, setCount] = useState(0);

    // const [info, setInfo] = useState()


    // const [weather, setWeather] = useState("Hello")
    // const [name, setName] = useState()
    // const [description, setDescription] = useState()
    // const [country, setCountry] = useState()
    // const [icon, setIcon] = useState()
    // let tagElement;
    // const tagElement = <img src={cloud} alt="" className='w-[300px]' />

    let tagElement = <div role="status" className="h-full w-full flex justify-center items-center">
        <svg aria-hidden="true" class="inline w-10 h-10 text-white animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
    </div>

    for (let i = 0; i < count; i++) {
        tagElement = <img src={`${images[i]}`} alt="" className='w-[300px]' />
    }

    const showDashboard = async (e) => {
        e.preventDefault()

        var response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c56ae9a936fced91c931c585e16966f8`)
            .then(res => {
                // console.log(res.data);
                return res.data;
            })
            .catch(err => console.log(err))
        setData(response)
        showNextPage(true)
    }


    useEffect(() => {
        // console.log('effect data weather is ' + data?.name)
        // setInfo(JSON.stringify(data))


    }, [data])


    useEffect(() => {

        const intervalId = setInterval(
            () => {
                if (count < 6) {
                    setCount(count => count + 1)
                } else if (count == 6) {
                    setCount(1)
                }
                setSwapped(count)
            },
            2000 // every 3 seconds
        );



        // setUrl(images[count])
        // console.log(tagElement)
        return () => clearTimeout(intervalId);
    }, [count, city])


    return (
        <>
            <div className="w-full min-h-full bg-weather-bg bg-cover bg-no-repeat bg-bottom relative">
                <div className='h-1/6 flex justify-center items-center'>
                    <h1 className='text-white text-5xl pt-[40px] font-shan text-3d'>MyWeather</h1>
                </div>
                <div className='w-full h-5/6 flex flex-col items-center pt-16'>
                    <div className="h-[300px]">
                        <CrossFade contentKey={swapped.toString()} timeout={2000}>
                            {tagElement}
                        </CrossFade>
                    </div>
                    <div className="px-5 w-full mt-12">
                        <form class="flex items-center max-w-sm mx-auto" onSubmit={showDashboard}>
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="30px" viewBox="0 0 24 24"><path fill="#3B247B" d="M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19" /></svg>
                                </div>
                                <input type="text" id="simple-search" value={city} onChange={(e) => setCity(e.target.value)} class="bg-gray-70 border h-[48px] border-gray-300 text-gray-900 text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter city name..." required />
                            </div>
                            <button type="submit" class="h-[48px] w-[48px] flex justify-center items-center p-2.5 ms-2 text-sm font-medium text-white bg-[#3B247B] rounded-lg border border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </form>

                        <div className="w-full flex justify-center">
                            <button className="mt-8 text-center w-auto shadow-md bg-[#3B247B] text-gray-300 px-3 py-2 rounded">Use my current location </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome