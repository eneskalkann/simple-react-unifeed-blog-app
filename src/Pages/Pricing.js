import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { PricingData } from '../data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Pricing() {
    return (
        <div className='pricingContainer' >
            <Navbar />
            {PricingData && PricingData.map(pricingData => {
                return (
                    <div className="flex">
                        <PricingContainer className="content" key={pricingData.pricingId}>
                        <div className="content-div">
                            <h1>{pricingData.pricingTitle}</h1>
                            <span>{pricingData.pricingPrice}</span>
                            <p>{pricingData.pricingFeatures}</p>
                            <Link to="/subs">{pricingData.pricingSubs}</Link>
                        </div>
                    </PricingContainer>
                    </div>
                )
            })}
            <Footer />
        </div>  
    )
}


const PricingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

`

export default Pricing