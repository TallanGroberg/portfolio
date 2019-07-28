import React from 'react';
import { Route, Switch } from "react-router-dom"
import styled from 'styled-components'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import NoMatch from './components/NoMatch'
import Projects from './components/Projects'


 const App = (props) => {


  return (

    <>
        <Navbar />
     <AppStyle>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route path='*' component={NoMatch} />
        </Switch>
    </AppStyle>
    </>
  );
}

const AppStyle = styled.div`

html {
  height: 100%;
  width: 100%;
}

background-image: linear-gradient(135deg, rgba(194,210,182,1) 0%, rgba(59,112,15,1) 100%);
 
border: solid black 10px;
font-family: "Times New Roman", Times, serif;


padding: 1em;





  
`;

export default App;
