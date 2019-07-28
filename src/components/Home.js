import React from 'react'
import styled from 'styled-components'

const Home = () => {




    return (
        <>
            <HomeStyle>
                <h1>Home</h1>
                <h5>scroll down</h5>
                <p>
                    Citizens of distant epochs invent the universe Jean-François Champollion
                    circumnavigated laws of physics corpus callosum. From which we spring network 
                    of wormholes the only home we've ever known intelligent beings something incredible
                    is waiting to be known star stuff harvesting star light. Across the centuries tingling 
                    of the spine two ghostly white figures in coveralls and helmets are soflty dancing made
                    in the interiors of collapsing stars two ghostly white figures in coveralls and helmets
                    are soflty dancing the sky calls to us.
                </p>

                   
                    <br />


               <p>
                    Vangelis trillion corpus callosum made in the interiors of collapsing stars
                    venture permanence of the stars. Gathered by gravity vastness is bearable only 
                    through love paroxysm of global death Cambrian explosion quasar vastness 
                    is bearable only through love. Inconspicuous motes of rock and gas ship of 
                    the imagination courage of our questions a very small stage in a vast cosmic
                    arena not a sunrise but a galaxyrise emerged into consciousness.
                </p>
                 
                <br />

               <p > 
                    A billion trillion as a patch of light kindling the energy hidden in matter
                    the ash of stellar alchemy Flatland cosmos. Bits of moving fluff colonies another
                    world shores of the cosmic ocean dispassionate extraterrestrial observer are creatures
                    of the cosmos. Something incredible is waiting to be known how far away a mote of dust
                    suspended in a sunbeam the only home we've ever known courage of our questions hundreds 
                    of thousands and billions upon billions upon billions upon billions upon billions upon
                    billions upon billions.
                </p>
                <section class='sticky'>

                <blockquote>this is a test paragraph to see if if I can make an epic scroll event</blockquote>
        

                <img id="office" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/office1.png"></img>
                <img id="building" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/sky.jpg"></img>
                <div id="box"></div>
                </section>
                <h5>scroll up</h5>
            </HomeStyle>
        </>
    )
}

const HomeStyle = styled.div`
    @media only screen and (max-width: 800px) {
        text-align: center;
    }
   section {
       padding: 3em;
       height: 100vm
   }
   

    
`;




export default Home;