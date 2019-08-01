import React, { useState, } from 'react'
import { Form, Button, } from "semantic-ui-react"
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import Zoom from 'react-reveal/Zoom'


const Contact = () => {
    const [toggle, setToggle] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
       e.preventDefault()
        axios.post(`/api/people`, {  name, email, comment, })
        .then( res => {
            console.log(res)
        })
        .catch( res => {
            console.log(res)
        })
    }

   const handleChange = (e) => {
        setName(e.target.value)
    }
    
    const handleAlert = () => {
       return <> this isnt connected to email yet </>
    }

    return (
        <>
        <ContactStyle>
                <Zoom><hr /></Zoom>
            <h1 id="contact" onClick={()=> setToggle(!toggle)}>send me an email</h1>
        </ContactStyle>               
        <Fade top opposite when={ toggle === true}> 
          <h1>Tallan.taven@gmail.com</h1>
        </Fade>
           
         
        


       

        
        
        
        
        </>
    )
}

const ContactStyle = styled.div`

color: white;
#contact:hover {
    color: black;
}
`;


export default Contact