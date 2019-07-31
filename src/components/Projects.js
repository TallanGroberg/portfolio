import React, { useState, } from 'react' 
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate'
import Fade from "react-reveal/Fade"


class ConnectedProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            showQueryApp: false,
            showAccomplish: false,
          };
        this.handleClick = this.handleClick.bind(this);
        this.handleAccomplishClick = this.handleAccomplishClick.bind(this)
      }
      handleClick() {
        this.setState({ 
            showQueryApp: !this.state.showQueryApp,
        });
    }
    handleAccomplishClick() {
        this.setState({
            showAccomplish: !this.state.showAccomplish,
        })
      }
      render() {
        return (

           <> 
           <ProjectStyle>
            <Projects />
           
          
            <Fade top opposite cascade collapse when={this.state.showQueryApp}>
              <p> The Query-app was my first project which I almost exclusively worked on the back-end portion.</p>
              <button
                onClick={this.handleAccomplishClick}
                type="button">
                { this.state.showAccomplish ? 'Hide Accomplishments' : 'See Accomplishments' } 
                   
                   </button>
            </Fade>
              
            
            <button
              className="btn btn-success my-5"
              type="button"
              onClick={this.handleClick}>
              { this.state.showQueryApp ? 'Hide' : 'Learn More About Query-app' } 
            </button>
            <Fade top opposite cascade collapse when={this.state.showAccomplish}>
                <ul>
                    <li>
                        I was responsable for the teachers side of the UI, and almost
                     all database intergration with the exeption of edit and delete Crud actions.
                     </li>
                     <hr />
                     <li>
                         software design of the grading system, including automatic and manual grading, 
                         teachers being able to comment on a student's answers  
                     </li>
                     <hr />
                     <li>
                         engineering protected routes for splitting the UI flow between teachers and students. 
                     </li>
                     <hr />
                     <li>
                         Leading the team in the push to production via Heroku.
                     </li>
                     <hr />
                     <li>
                        database design arcitecture with rails back-end 
                     </li>
                     <hr />
                     <li>
                         React-Native mobile adaption. 
                     </li>
                     <hr />
                     

                </ul>
                     
                     
                      
            </Fade>

            
        
          </ProjectStyle>
          </>
        );
      }
    }
    


const Projects = () => {
   

    


    return (
        <>
        
          <Zoom left opposite cascade collapse >
                <h1>My Projects</h1>
            </Zoom>

            <Rotate top left opposite cascade collapse >
            <h2><a id='link' href="https://query-app.herokuapp.com/">Query-app: See how it turned out</a></h2> 
            </Rotate>
           
           
          
          
        </>
    )
}

const ProjectStyle = styled.div`
@media only screen and (max-width: 800px) {
    text-align: center;
    btn {
        color: green;
        text-align: center;
    }


    

}


button  {
    display: block;
    width: 100%;
    background: linear-gradient(135deg, rgba(59,112,15,1) 0%, rgba(194,210,182,1) 100%);
    color: black;
    border: solid black 1px;
    font-size: 1.5em;
    cursor: pointer;
    text-align: center;
    box-shadow: none;
}

#link {
    text-decoration: none;
    color: black;
}
#link:hover {
    color: green;
}


`;

export default ConnectedProject