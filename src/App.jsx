// import { useEffect, useState } from 'react';
import React, { useState, useEffect, createContext } from "react";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

export const CityContext = createContext();

function App() {

  const [nextPage, showNextPage] = useState(false)
  const [city, setCity] = useState("");
  const [data, setData] = useState({})




  useEffect(() => {
    // console.log('NextPage is ' + nextPage)


  }, [nextPage])


  return (
    <>
      <CityContext.Provider value={{ city, setCity, data, setData }}>
        {nextPage ? <Dashboard /> : <Welcome showNextPage={showNextPage} />}

        {/* <Welcome showNextPage={showNextPage} /> */}
      </CityContext.Provider>
    </>
  )

}

export default App
