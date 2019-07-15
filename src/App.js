import React from 'react';
import { Route, } from "react-router-dom"

import Home from './components/Home'
import Navbar from './components/Navbar'



 const App = (props) => {


  return (

    <>
      <Navbar />

      <Route exact path="/" component={Home} />

   

    </>
  );
}

export default App;
