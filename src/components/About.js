import React from 'react' 
import styled from 'styled-components'

const About = () => {
    return (
        <>
          <AboutStyle>
            <h1>About</h1>
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