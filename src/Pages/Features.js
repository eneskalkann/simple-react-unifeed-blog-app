import React from 'react'
import FeaturesCards from '../components/FeaturesCards'
import FeaturesMain from '../components/FeaturesMain'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'

function Features() {
  return (
    <FeaturesPage>
        <Navbar/>
        <FeaturesMain/>
        <FeaturesCards/>
        <Footer/>
    </FeaturesPage>
  )
}

const FeaturesPage = styled.div`
    overflow: hidden;
`

export default Features