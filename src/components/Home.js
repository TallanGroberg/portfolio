import React, {useState, } from 'react'
import styled from 'styled-components'
import { Card, } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide'
import LightSpeed from 'react-reveal/LightSpeed'
import Tilt from 'react-tilt'
import logo from  './IMG_2284.jpg'
import book from './IMG_3610.jpg'


const Home = () => {
    const [side, setSide] = useState(false)

    
    

    



    return (
        <>
            <HomeStyle>
            <Roll right cascade collapse >
                <h1 id="header">Hello</h1>
            </Roll>
            <Slide right >
                 <img src={logo} id="selfy"align="left" />
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
            </Slide>
                    <span id="break"></span>
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


                <h1 id="novel">I also like to write Novels, <Slide right><h1>Click the cover to read the back!</h1></Slide></h1>
                    <br />
                    <br />
                {side === false ? 

<Tilt  className="Tilt" options={{ max : 25 }} style={{ height: 750, width: 750 }} >
                     <div  onClick={ () => setSide(!side)} className="Tilt-inner"> <img id="cover" src={book} /> </div>
                </Tilt>

                    :

<Tilt className="Tilt" options={{ max : 25 }} style={{ height: 700, width: 700 }} >
                     <div onClick={ () => setSide(!side)} className="Tilt-inner"> <Card inverted id="cover">
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

                
                {console.log(side)}
              
            </HomeStyle>
           
        </>
    )
}

const HomeStyle = styled.div`
    @media only screen and (max-width: 800px) {
        text-align: center;
        img {
            text-align: center;
           
        }
                .Tilt {
                    margin-left: -25%;
                }
    }
    img {
        height: 15%;
        width: 15%;
        
    }

    #selfy {
        margin-top: 10em;
    }

    #header {
        text-align: center
    }

    #introduce {
        text-align: center
        margin-right: 5em;
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
        margin-top: 5%
        margin-left: 45%;
        box-shadow: 22px 20px 12px 0px rgba(0,0,0,0.75);
        border: solid black 5px;
        border-style: outset;
    }
    
`;




export default Home;