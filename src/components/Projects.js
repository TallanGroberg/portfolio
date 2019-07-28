import React from 'react' 
import styled from 'styled-components'



const Projects = () => {


    return (
        <>
          <ProjectStyle>
            <h1>Projects</h1>
          </ProjectStyle>
        </>
    )
}

const ProjectStyle = styled.div`
@media only screen and (max-width: 800px) {
    text-align: center;
}



`;

export default Projects