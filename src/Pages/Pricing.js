import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingMain from '../components/PricingMain'

function Pricing() {
    return (
        <div className='pricingContainer'>
            <Navbar/>
            <PricingMain/>
            <br /><br /><br /><br />
            <Footer/>
        </div>
    )
}


export default Pricing