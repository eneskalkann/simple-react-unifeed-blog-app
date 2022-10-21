import React from 'react'
import { PricingData } from '../data'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HiCursorClick } from 'react-icons/hi'

function PricingMain() {
  return (
    <div>
        {PricingData && PricingData.map(pricingData => {
                return (
                        <PricingContainer className="content" key={pricingData.pricingId}>
                            <div className="content-div">
                                <h1>{pricingData.pricingTitle}</h1>
                                <span>{pricingData.pricingPrice}</span>
                                <p>{pricingData.pricingFeatures}</p>
                                <div className="button-content">
                                    <HiCursorClick className='icon'/>
                                    <Link className='buttons' to="/subs">{pricingData.pricingSubs}</Link>
                                </div>
                            </div>
                        </PricingContainer>
                )
            })}
    </div>
  )
}

const PricingContainer = styled.div`
    display: flex;
    justify-content: center;
    .content-div{
        display: flex;
        align-items: center;
        justify-content: left;
        width: 800px;
        gap: 40px;
        height: 155px;
        border: 2px solid #e38811;
        border-radius: 20px;
        background-color: #fff;
        text-align: end;
        margin-top:20px;
        :hover{
            background-image: linear-gradient(80deg, #e38811 50% , #fff);
            color: white;
        }
        h1{
            width: 200px;
            margin-left: 20px;
        }
        span{
            color: rgb(91, 94, 93);
            font-size: 19px;
            font-weight: 700;
        }
        p{     
            text-align: left;
            width: 300px;
            font-size: 14px;
            color: rgb(91, 94, 93);
        }
        .button-content{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            gap: 5px;
            padding: 2px 4px;
            border-radius: 4px;
            border: 2px solid #e38811;
            background: white;
            color: #e38811;
            white-space: nowrap;
            :hover{
                color: white;
                transition: all .3s;
                background: #e38811;
            }
            .icon{
                cursor: pointer;
            }
        }
        .buttons{
            justify-content: end;
            text-decoration: none;
            color: #e38811;
            display: block;
            font-weight: 700;
            :hover{
                color: white;
            }
        }
    }
    @media screen and (max-width:1024px){
        .content-div{
            width: 600px;
            margin-top: 10px;
            .button-content{
                margin-right: 20px;
            }
        }
    }
    @media screen and (max-width:620px){
        top: 80px;
        position: relative;
        .content-div{
            width: 300px;
            height: 160px;
            gap: 0px;
            text-align: center;
            justify-content: center;
            flex-direction: column;
            border-width: 4px;
            h1{
                font-size: 22px;
                margin-left: 0px;
                margin-top: 0;
            }
            span{
                font-size: 14px;
            }
            p{    
                text-align: center;
                font-size: 13px;
            }
            .button-content{
                margin-right: 0px;
            }
        }
    }
`

export default PricingMain