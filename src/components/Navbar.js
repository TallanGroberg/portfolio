import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce'
import Shake from 'react-reveal/Shake';
import Zoom from 'react-reveal/Zoom'
 
const Navbar = (props) => {
    const [screenWidth, setScreenWidth] = useState('')
    const [mouse, setMouse] = useState([])

    const getWidth = () => {
        setInterval( function() {setScreenWidth(window.innerWidth)}, 1000)
        
    }
    useEffect( () => {
        window.addEventListener("getWidth", getWidth() )
    }, [])

     const mousin = () => {
         setMouse(!mouse)
     }

    

    // onMouseenter={setMouseenter(true)}

    const navbar = () => {
        if (window.innerWidth > 800) {
            return <NavStyle>

                      <div className="nav">
                          
                        
                            <Link id="home" to="/">
                      
                                Home</Link>|
                        <Link id="about" to='/about'>About  </Link>|
                        <Link id="projects" to='/projects'>Projects</Link>
                       
                      </div>
                    
                  </NavStyle>
        } else {
            return    <NavStyle>

        <div class="position">
            <div class="dropdown">
                     <button class="dropbtn"> Menu</button>
              <div class="dropdown-content">
                <h4 class="link-style">
                
          
             <Link id="home" to="/" >
                    <Bounce left opposite cascade collapse >
                 Home
                 </Bounce>
                 </Link> 
                 <Zoom right cascade collapse>
                <hr />
            </Zoom>
            <Zoom left cascade collapse>
                <hr />
                
                </Zoom>
              <Link id="about" to="/about"> 
              <Bounce right opposite cascade collapse >
                 About
                 </Bounce>
                 </Link> 
                 <Zoom right cascade collapse>
                <hr />
            </Zoom>
            <Zoom left cascade collapse>
                <hr />
                
                </Zoom>
               <Link id="projects" to="/projects"> 
               <Bounce left opposite cascade collapse >
                 Projects
                 </Bounce>
                 </Link>   <Zoom right cascade collapse>
                <hr />
            </Zoom>
            <Zoom left cascade collapse>
                <hr />
                
                </Zoom> </h4>
              
              </div>
          </div>
        </div>
            </NavStyle> 
        }
    }

    return (
        <>
        {navbar()}
        </>
    )
}

export default Navbar;


const NavStyle = styled.div `

font-size: 20px;
font-family: "Times New Roman", Times, serif;
border: solid black 2px;


/*test for gradient */



@keyframes color-changer {
    0% {
        color: black;
    }
    50% {
        color: green;
    }
    
    100% {
        color: black;
    }
    
   
  }

.nav {
   text-align: right;
   transition: 0.5s;
}

#home { 
    color: black;
    text-decoration: none;
    position: right;
    margin-right: 0.5em
}
#home:hover {
    animation-name: color-changer;
    animation-duration: 2s;
    animation-iteration-count: 1;
}
#about {
    color: black;
    text-decoration: none;
    text-align: center;
    margin: 0.5em
    
}
#about:hover {
    animation-name: color-changer;
    animation-duration: 2s;
    animation-iteration-count: 1;
}

#projects {
    color: black;
    text-decoration: none;
    text-align: right;
    margin: 0.5em
}
#projects:hover {
    animation-name: color-changer;
    animation-duration: 2s;
    animation-iteration-count: 1;
}


background: linear-gradient(135deg, rgba(194,210,182,1) 0%, rgba(59,112,15,1) 100%);

padding-top: 0.5em;



@media only screen and (max-width: 800px) {

    #home { 
        text-decoration: none;
        position: right;
        margin-right: 0.5em
        color: black;
        
    }
    #home:hover {
        animation-name: color-changer;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }
    #about {
        text-decoration: none;
        text-align: center;
        margin: 0.5em
        color: black;
    }
    #about:hover {
        animation-name: color-changer;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }
    
    #projects {
        color: black;
        text-decoration: none;
        text-align: center;
        margin: 0.5em
    }
    #projects:hover {
        
      
        
        animation-name: color-changer;
         animation-duration: 2s;
         animation-iteration-count: 1;
        animation-iteration-count: infinite;
    }

    
    
    
    
    @keyframes color-changer {
        0% {
            transform: translateY(-30px);
            color: black;
        }
        50% {
            color: green;
        }
        
        100% {
            color: black;
            transform: translateY(-15px);
        }
        
       
      }


 .dropdown {
     text-align: center;
     positon: relative;
     background-color: linear-gradient(to-left, rgba(194,210,182,1), rgba(59,112,15,1));
    }
    
    .dropbtn {
        display: block;
        width: 100%;
        
        background: linear-gradient(135deg, rgba(194,210,182,1) 0%, rgba(59,112,15,1) 100%);
        color: black;
        border: solid black 2px
        font-size: 1.5em;
        cursor: pointer;
        text-align: center;
    }
    
    .dropdown-content {
        display: none;
        background-color: black;
        z-index: 1;
        width: 100%;
        background: linear-gradient(135deg, rgba(194,210,182,1) 0%, rgba(59,112,15,1) 100%);
        border: solid black 10px;
        transform: translateY(-10em);

        
        
    }
    
    .dropdown-content h4:hover {
        border: solid black 30px;
        
        background: linear-gradient(135deg, rgba(194,210,182,1) 0%, rgba(59,112,15,1) 100%);
        transition: 1s;
        margin-bottom: -13.5%;  
        
    }
    
    .dropdown:hover .dropdown-content {
        border: solid black 2px
        display: block;
        text-align: center;
        opacity: 1;
        z-index: 1;
        transform: translateY(-3em);
        transition-timing-function: ease;
        transition: 1s;
    }
  
  .dropdown:hover .dropbtn {
      background-color: #3e8e41;
      overflow:hidden;
      height:-5em;
  
    }
}
`;