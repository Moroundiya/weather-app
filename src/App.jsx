// import { useEffect, useState } from 'react';
import React, { useState, useEffect, createContext } from "react";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

export const CityContext = createContext();

function App() {

  const [nextPage, setNextPage] = useState(false)
  const [city, setCity] = useState("");
  const [data, setData] = useState({})
  const [error, setError] = useState("")
  const [geoerror, setGeoerror] = useState("")
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [geo, setGeo] = useState({});
  const [loadgeo, setLoadgeo] = useState(false);
  const [checkdata, setCheckdata] = useState("");
  const [network, setNetwork] = useState(false);
  const [detectNetwork, setDetectNetwork] = useState(false);
  const [currentCityTime, setcurrentCityTime] = useState();
  const [currentCityDate, setcurrentCityDate] = useState();
  const [currentGeoTime, setcurrentGeoTime] = useState();
  const [currentGeoDate, setcurrentGeoDate] = useState();



  // var showContent

  // if (nextPage) {
  //   showContent = <Dashboard />
  // } else if (nextPage == false) {
  //   showContent = <Welcome />
  // } else if (nextPage == null) {
  //   showContent = <h1> Null</h1>
  // } else {
  //   <Welcome />
  // }


  useEffect(() => {
    // console.log('NextPage is ' + nextPage)


  }, [nextPage])


  return (
    <>
      <CityContext.Provider value={{ city, setCity, data, setData, setcurrentCityDate, setcurrentGeoTime, currentGeoTime, setcurrentGeoDate, currentGeoDate, currentCityDate, setcurrentCityTime, currentCityTime, setGeoerror, geoerror, error, setNetwork, network, detectNetwork, setDetectNetwork, setError, checkdata, setCheckdata, setNextPage, loadgeo, setLoadgeo, geo, setGeo }}>
        {nextPage ? <Dashboard /> : <Welcome />}
      </CityContext.Provider>
    </>
  )

}

export default App
