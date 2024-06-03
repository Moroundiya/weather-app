// import { useEffect, useState } from 'react';
import React, { useState, useEffect } from "react";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

function App() {

  const [nextPage, showNextPage] = useState(false)


  useEffect(() => {
    console.log('NextPage is ' + nextPage)

  }, [nextPage])


  return (
    <>
      {nextPage ? <Dashboard /> : <Welcome showNextPage={showNextPage} />}

      {/* <Welcome showNextPage={showNextPage} /> */}
    </>
  )

}

export default App
