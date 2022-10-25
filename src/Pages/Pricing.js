import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingMain from '../components/PricingMain'
import styled from 'styled-components'

function Pricing() {
    return (
        <div className='pricingContainer'>
            <Navbar/>
            <br /><br /><br /><br />
            <Header>Our Pricing</Header>
            <PricingMain/>
            <br /><br /><br /><br />
            <Footer/>
        </div>
    )
}

const Header = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 0px;
    margin-bottom: 40px;    
    color: rgb(91, 94, 93);
    @media screen and (max-width:620px){
        margin-bottom: -50px;
    }
`

export default Pricing