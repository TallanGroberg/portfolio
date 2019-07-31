import React, {useState, } from 'react'
import styled from 'styled-components'
import { Card, } from 'semantic-ui-react'
import { Link, } from "react-router-dom"
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'
import Spin from 'react-reveal/Spin'
import Shake from 'react-reveal/Shake';
import LightSpeed from 'react-reveal/LightSpeed'
import Tilt from 'react-tilt'
import logo from  './IMG_2284.jpg'
import book from './IMG_3610.jpg'
import beaker from './devpoint-labs.jpg'
import gitHub from './github.png'
import colorgithub from './colorgithub.png'
import south from './south.png'
import tv from './tv.png'

const Home = () => {
    const [side, setSide] = useState(false)
    const [shake, setShake] = useState(false)
    const [spin, setSpin] = useState(false)


    const shakeImage = () => {
        setShake(true)
    }

    const spinCompass = () => {
        setSpin(!spin)
    }
    return (
        <>
            <HomeStyle>
            <Roll right cascade collapse >
                <h1 id="header">Hello</h1>
            </Roll>
            <Slide right>
                 <img src={logo} id="selfy" align="left" />
            </Slide>
             


            <Zoom right cascade collapse>
                <hr />
            </Zoom>
            <Zoom left opposite cascade collapse >
                 <h1 id="introduce">
                   My Name Is  Tallan Groberg
                 </h1>
             </Zoom>
            <Zoom left cascade collapse>
                <hr />
            </Zoom>

            <Slide right  collapse>
                <p>I'm a software engineer</p>
                <br />
                <br />
                <br />
            </Slide>
                    <span id="break"></span>
                    <h4>I'm from Clearfield, Utah. I was enlisted in the United States Navy for 4 Years. I went to 
                        Salt Lake Community Collages to study computer science. Graduated from the University of Utah 
                        Professional Education Certification in full stack web developement. 
                    </h4>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Zoom>
                   <hr  />
                </Zoom>
                    { spin === true ? <Spin>
                        <img  onMouseEnter={spinCompass} 
                        src={south} 
                        id='compass'
                         align="center" />
                        </Spin> : <img onMouseLeave={spinCompass} onMouseEnter={spinCompass} 
                        src={south} 
                        id='compass'
                         align="center" /> }

                    

                <Zoom>
                   <hr  />
                </Zoom>


                <h1 id="novel">I also like to write Novels, <Slide right><h1>Click the cover to read the back!</h1></Slide></h1>
                    <br />
                    <br />
                {side === false ? 

<Tilt  className="Tilt" options={{ max : 25 }} style={{ height: 750, width: 750 }} >
                     <div  onClick={ () => setSide(!side)} className="Tilt-inner"> <img id="cover" src={book} /> </div>
                </Tilt>

                    :

<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 750, width: 750 }} >
                     <div onClick={ () => setSide(!side)} className="Tilt-inner"> <Card id="cover">
                         <Card.Header><h1>Thumbs and Thoroughfares</h1></Card.Header>
                         
                             <hr  />
                        
                         <Card.Content> 
                             <hr />
                             Richie Vegas has decided to go hitchhiking with his two most adventurous friends.
                              <br /> 
                              <br />
                              A beautiful fortuneteller, Sally Riddler, has a freak-out during his psychic reading. <br />
                          When his best friend goes home early,
                           <br />
                          <br />

                         frightening things start manifesting in the night and the hardships of the road itself take a toll on his sanity.
                         <br />
                         <br /> Richie realizes he is at the center of an initiation process for a dark brotherhood with sinister intent and considerable supernatural ability.
                         <br />
                         <br />
                          All the while Sally is hot on his trail, trying to save him from a fate worse than death.
                             <hr /> Thumbs and Thoroughfares is a masterwork of fiction. <hr /></Card.Content>
                        <br />
                        <br />
                        <Card.Meta textAlign="center"> <a 
href="https://www.amazon.com/Thumbs-Thoroughfares-Talon-Scott-ebook/dp/B07T8DXY32/ref=sr_1_1?crid=28Y028VDE22JH&keywords=thumbs+and+thoroughfares&qid=1564368336&s=gateway&sprefix=thumbs+and+%2Caps%2C163&sr=8-1">
                   <h1>Buy Now</h1></a>
                    </Card.Meta>

                         </Card> </div>
                </Tilt>
                        }

                        
                    <br />
                    <br />
                    <br />
                   
                    <br />
                    <br />
                    <br />
                    <br />
                    <Zoom>
                        <hr  />
                    </Zoom>
                    { spin === true ? <Spin>
                        <img  onMouseEnter={spinCompass} 
                        src={south} 
                        id='compass'
                         align="center" />
                        </Spin> : <img onMouseLeave={spinCompass} onMouseEnter={spinCompass} 
                        src={south} 
                        id='compass'
                         align="center" /> }
                           <Zoom>
                             <hr  />
                          </Zoom>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                <Zoom>
                   <hr  />
                </Zoom>



        <Roll bottom cascade>
               <h1> Please like and subscribe to my Podcast. </h1>
        </Roll>
        <br />
                    <br />
                    <br />
                    <br />
                   
                <Fade right>
                <img id="tv" src={tv} />
                </Fade>


               <Fade right>
                    <iframe width="515" height="360" 
                    src="https://www.youtube.com/embed/_rtrdj1uC8Q"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media;
                    gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
               </Fade>


                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Zoom>
                        <hr  />
                    </Zoom>
                    { spin === true ? <Spin>
                        <img  onMouseEnter={spinCompass} 
                        src={south} 
                        id='compass'
                         align="center" />
                        </Spin> : <img onMouseLeave={spinCompass} onMouseEnter={spinCompass} 
                        src={south} 
                        id='compass'
                         align="center" /> }
                    <Zoom>
                        <hr  />
                    </Zoom>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Link to='/projects'>
                         <h1 id="projects">See a list of my software engineering 
                         projects I made as a student at Devpoint Labs.</h1> 
                    </Link>
                        
                         <a id="devpoint" href="https://www.devpointlabs.com/" target="_blank">
                    <Slide right>
                        <div id="or">
                        <img src={beaker} id="beaker" align="left" /><h1 id="r">Or..</h1>
                        </div>
                            
                    </Slide>
                             <h1>Devpoint labs Visit their website</h1></a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                  
                        <Zoom>
                             <hr  />
                        </Zoom>

                    <a href="https://query-app.herokuapp.com/"><h2>see the learning management system I designed</h2></a>
                    

                    <Zoom>
                             <hr  />
                        </Zoom>

                    <a id="color" href="https://github.com/cicadapurp" 
                    onMouseEnter={shakeImage}> 
                    <h2>and you could visit my github</h2>
                    {shake === false ?  
                    <img id="devpoint" src={gitHub} /> 
                    : 
                        <Tilt options={{ max : 25 }} style={{ height: 750, width: 750 }} >
                    <Shake>
                        <img id='color' src={gitHub} />
                        </Shake> 
                        </Tilt>
                    }
                    </a>
                    
                    
            
            </HomeStyle>
           
        </>
    )
}

const HomeStyle = styled.div`
    @media only screen and (max-width: 800px) {
        text-align: center;
        iframe {
            width: 80% 
            height: 110% 
        }
           #cover {
               position: right;
               display: block;
           }  
           #color {
            width: 25%;
            height: 25%;
               display: inline-block;
             margin-right: 40%;
             
           }
    }

    a {
        color: black;
        text-decoration: none;
    }
    a:hover {
        color: lightgray;
    }

    #projects {
        color: black;
        text-decoration: none;
       

    }
    #projects:hover {
        color: lightgray;
    }
   
    
    #selfy {
        margin-top: 10em;
        height: 15%;
        width: 15%;
        padding-right: 1em;
    }

    #header {
        text-align: center
    }

    #introduce {
        position: absolute;
        text-align: center
      
    }

    p {
        text-align: center;
        margin-right: 10em;
        font-size: 3em;
    }
   
    #break {
        height: 100%;
        width: 100%;
    }

    #novel {
        text-align: center
    }

    

    #cover {
        height: 80%;
        width: 50%;
       
        box-shadow: 22px 20px 12px 0px rgba(0,0,0,0.75);
        border: solid black 5px;
        border-style: outset;
    }

    #beaker {
        height: 25%;
        width: 25%;
        padding: 1em
        border-radius: 50%;
    }

    #devpoint {
        width: 25%;
        height: 25%;
    }

    #devpoint:hover {
        color: purple;
    }

    #or {
       
    }

    #color {
        border-radius: 50%;
        position: relative;
        width: 25%
        height: 25%
    }

    #compass {
        width: 10%;
        height: 10%;
        display: block;
        margin-left: 45%;
    }

    #tv {
        position: relative;
        text-align: center;
        top: -45px;
		left: 0;
    }
    iframe {
        boarder-radius: 5%;
        position: absolute;
		margin-top: 5px;
		left: 80px;
    }


    
`;




export default Home;