import React from 'react'
import { SubsData } from "../data"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import image from '../Assets/outer-space.svg'

function Subs() {
    return (
        <div className='subs'>
            <Navbar />
            {
                SubsData && SubsData.map(subs => {
                    return (
                        <SubsContainer className="subs-container" key={subs.subsId}>
                            <div className="content">
                                <h2>{subs.subsTitle}</h2>
                                <p>{subs.subsParagraph}</p>
                            </div>
                            <img src={image} alt="launch" />
                        </SubsContainer>
                    )
                })
            }
            <Footer />
        </div>
    )
}

const SubsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 133.1px;
    overflow: hidden;
    max-width: 100%;
    gap: 10px;
    h2{
        max-width: 550px;
        margin-bottom: 40px;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
        background-color: #f3ec78;
        background-image: linear-gradient(45deg, #c4a21b, #e38811);
        font-size: 27px;
    }
    p{
        color: #000;
        font-size: 19px;
        font-weight: 700;
    }
    img{
        max-width: 450px;
    }

    @media screen and (max-width:1200px){
        margin-top: 80px;
        margin-bottom: 150px;
    img{
        max-width: 450px;
    }
    }
    @media screen and (max-width:1090px){
    gap: 0px;
    margin-top: 70px;
    margin-bottom: 130px;
    img{
        max-width: 350px;
    }
        h2{
            font-size: 24px;
            
        max-width: 440px;
        }
        p{
            font-size: 16px;
        }
    }
    @media screen and (max-width:920px) {
        flex-direction: column;
        margin-top: 0px;
        margin-bottom: 70px;
        gap: 40px;
    }
    @media screen and (max-width:620px) {
        flex-direction: column;
        margin-top: 0px;
        margin-bottom: 45px;
        gap: 40px;
        text-align: center;
        img{
            max-width: 300px;
        }
        h2{
            margin-top: 140px;
        }
    }
`

export default Subs