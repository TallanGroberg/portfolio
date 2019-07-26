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
        if (window.innerWidth > 800) {
            return <NavStyle>

                      <div className="nav">
                        <Link id="home" to="/">Home  </Link>|
                        <Link id="about" to='/about'>About  </Link>|
                        <Link id="projects" to='/projects'>Projects</Link>
                      </div>
                    
                  </NavStyle>
        } else {
            return    <PhoneStyle>

        <div class="position">


            <div class="dropdown">
                         <button class="dropbtn"><hr /> menu</button>
              <div class="dropdown-content">
                <h4 class="link-style">
                <hr />
             <Link id="home" to="/" >Home</Link> 
             <hr /> 
          
          
              <Link id="about" to="/about">About</Link> 
              <hr /> 
        
            
               <Link id="projects" to="/projects">Projects</Link>  <hr /> </h4>
              
              </div>
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

.nav {
   text-align: right;
   transition: 0.5s;
}

#home { 
    text-decoration: none;
    position: right;
    margin-right: 0.5em
}
#home:hover {
    color: skyblue;
    transition: 0.5s;
}
#about {
    text-decoration: none;
    text-align: center;
    margin: 0.5em
    
}
#about:hover {
    color: skyblue;
    transition: 0.5s;
}

#projects {
    text-decoration: none;
    text-align: right;
    margin: 0.5em
}
#projects:hover {
    color: skyblue;
    transition: 0.5s;
}


background: linear-gradient(135deg, rgba(194,210,182,1) 0%, rgba(59,112,15,1) 100%);

padding-top: 0.5em;


`;

const PhoneStyle = styled.div`
@media only screen and (max-width: 800px) {

    #home { 
        text-decoration: none;
        position: right;
        margin-right: 0.5em
        
    }
    #home:hover {
        transition: 0.5s;
        color: skyblue;
    }
    #about {
        text-decoration: none;
        text-align: center;
        margin: 0.5em
    }
    #about:hover {
        color: skyblue;
        transition: 0.5s;
    }
    
    #projects {
        text-decoration: none;
        text-align: right;
        margin: 0.5em
    }
    #projects:hover {
        color: skyblue;
        transition: 0.5s;

    }

    .position {
        text-align: left;
    }


 .dropdown {
     text-align: center;
     positon: relative;
     background-color: linear-gradient(to-left, rgba(194,210,182,1), rgba(59,112,15,1));
  }
  
  .dropbtn {
    display: block;
    width: 100%;
    border: none;
    background-color: #4CAF50;
    color: white;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    text-align: center;
      
      
   
  }
  
  .dropdown-content {
      display: none;
      background-color: skyblue;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      width: 100%;
      background: linear-gradient(135deg, rgba(194,210,182,1) 0%, rgba(59,112,15,1) 100%);
      border: solid black 2px;
      transform: translateY(-3.4em);
      
    }
    .dropdown-content h4:hover {
        
        
        background: linear-gradient(135deg, rgba(194,210,182,1) 0%, rgba(59,112,15,1) 100%);
        transition: 0.5s;
        
    }
    
    .dropdown:hover .dropdown-content {
        
     
        display: block;
        text-align: center;
        opacity: 1;
        z-index: 2;
        transform: translateY(-3em);
        transition-delay: 1s, 1s, 1s;
        
     
    }
  
  .dropdown:hover .dropbtn {
      background-color: #3e8e41;
      overflow:hidden;
      height:0;
    
      
    }
}
`;