import React, { useState, } from 'react'
import { Form, Button, } from "semantic-ui-react"
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import Zoom from 'react-reveal/Zoom'


const Contact = () => {
    const [name, setName] = useState('')
    const [toggle, setToggle] = useState(false)
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("test")

    }
    
    const handleAlert = () => {
       return <> this isnt connected to email yet </>
    }

    return (
        <>
        <ContactStyle>
                <Zoom><hr /></Zoom>
            <h1>Contact Me Directly</h1>
        </ContactStyle>               
            <Button inverted textAlign="center" text-color="green" color='black' onClick={()=> setToggle(!toggle)}><p>Contact Form</p></Button>
                <Zoom><hr /></Zoom>
                {handleAlert}
        

        <Fade top opposite when={ toggle === true}> 
            <h1>Note: this will only send your info directly to my email. This is NOT the sign up for an automated mailing list.</h1>
        <Form>
        <Zoom><hr /></Zoom>
        
            <Form.Input 
                label="Name"
                required="true"
                placeholder="Name"
                value={name}
                
                onChange={(e) => setName(e.target.value)}
                />
                 <Zoom><hr /></Zoom>
        
             <Form.Input 
                label="Email"
                required="true"
                placeholder="Email"
                value={email}
                
                onChange={(e) => setEmail(e.target.value)}
                />
                 <Zoom><hr /></Zoom>
        
                 <Form.TextArea 
                 type="text-field"
                label="Comments"
                placeholder="Comments"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                />
                 <Zoom><hr /></Zoom>
        

                <Form.Button inverted onClick={()=> setToggle(!toggle)} onSubmit={handleSubmit}>Submit</Form.Button>
        </Form>

        

        </Fade>

       

        
        
        
        
        </>
    )
}

const ContactStyle = styled.div`

color: white;

`;


export default Contact