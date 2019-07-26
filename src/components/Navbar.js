import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, } from 'react-router-dom'
 
const Navbar = (props) => {
    const [screenWidth, setScreenWidth] = useState('')

    const getWidth = () => {
        setInterval( function() {setScreenWidth(window.innerWidth)}, 1000)
        
    }
    useEffect( () => {
        window.addEventListener("getWidth", getWidth() )
    }, [])


    const navbar = () => {
        if (screenWidth > 800) {
            return <NavStyle>
                    <h4> 
                        <Link to="/">Home | </Link>
                        <Link to='/about'>About | </Link>
                        <Link to='/projects'>Projects</Link>
                    </h4>
                  </NavStyle>
        } else {
            return    <PhoneStyle>

            <div class="dropdown">
                         <button class="dropbtn"><hr /></button>
              <div class="dropdown-content">
                <h4 class="link-style"> <li>
             <Link to="/" >Home</Link> | 
          </li>
          <li>
              <Link to="/about">About</Link> |
          </li>
          <li>  
               <Link to="/projects">Projects</Link> </li></h4>
          
              </div>
          </div>
            </PhoneStyle> 
        }
    }
  


    return (
        <>
       { console.log( screenWidth)}
        {navbar()}
       
        

        </>
    )
}

export default Navbar;


const NavStyle = styled.div `


h4 {
    margin-left: 0.5em
    position: right;
    
}





position: -webkit-sticky;
background: linear-gradient(135deg, rgba(194,210,182,1) 0%, rgba(59,112,15,1) 100%);
display: flex;
padding-top: 0.5em;


`;

const PhoneStyle = styled.div`
@media only screen and (max-width: 800px) {
 .dropdown {
     position: relative;
     display: inline-block;
     background-color: linear-gradient(to-left, rgba(194,210,182,1), rgba(59,112,15,1));
  }
  
  .dropbtn {
      background-color: #4CAF50;
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
  }
  
  .dropdown-content {
      display: none;
      position: absolute;
      background-color: linear-gradient(to-left, rgba(194,210,182,1), rgba(59,112,15,1));
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
  }
  .dropdown-content h4:hover {background: linear-gradient(135deg, rgba(194,210,182,1) 0%, rgba(59,112,15,1) 100%);}
  
  .dropdown:hover .dropdown-content {display: block;}
  
  .dropdown:hover .dropbtn {background-color: #3e8e41;}
}
`;