import React from 'react'
import image from '../Assets/Logo.svg'
import styled from 'styled-components'

function Footer() {
  return (
    <Container className='footer'>
      <img src={image} />
      <span className='footer-span'>Unifeed &#169; 2017 All Copyrights Not Reserved</span>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    gap: 470px;
    img{
        cursor: pointer;
    }
    span{
        white-space: nowrap;
        color: rgb(91, 94, 93);
    }
    @media screen and (max-width:1247px) {
      gap: 380px;
    }
    @media screen and (max-width:1005px) {
      margin-top: 20px;
      gap: 150px;
    }
    @media screen and (max-width:620px){
      flex-direction: column;
      gap: 10px;
      span{
        font-size: 14px;
      }
    }
`

export default Footer