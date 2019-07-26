import React from 'react'
import styled from 'styled-components'

const Home = () => {


    return (
        <>
            <HomeStyle>
                <h1>Home</h1>
            </HomeStyle>
        </>
    )
}

const HomeStyle = styled.div`
 

@media only screen and (max-width: 800px) {
    text-align: center;
     
    }
    
`;


export default Home;