import React from 'react' 
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';


const About = () => {
    return (
        <>
          <AboutStyle>
          <Zoom left opposite cascade collapse >
                <h1>About</h1>
            </Zoom>
          </AboutStyle>
        </>
    )
}

const AboutStyle = styled.div`
@media only screen and (max-width: 800px) {
    text-align: center;
}




`;

export default About;