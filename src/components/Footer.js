import React from 'react'
import image from '../Assets/Logo.svg'
import styled from 'styled-components'

function Footer() {
  return (
    <Container className='footer'>
        <img src={image}/>
        <span className='footer-span'>Unifeed &#169; 2017 All Copyrights Not Reserved</span>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    img{
        cursor: pointer;
    }
    span{
        margin-left: 32%;
        white-space: nowrap;
        color: rgb(91, 94, 93);
    }
`

export default Footer