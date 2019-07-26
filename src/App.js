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
 
border: solid black 10px;
display: flex

@media only screen and (max-width: 800px) {
  body {
    background-color: lightblue;
  }
  text-align: center
}
  
`;

export default App;
