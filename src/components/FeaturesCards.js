import React from 'react'
import {FeaturesCardsData} from '../data'
import styled from 'styled-components'

function FeaturesCards() {
  return (
    <Cards>
        {
            FeaturesCardsData && FeaturesCardsData.map(featuresCards=>{
                return(
                    <div className="cards-data" key={featuresCards.cardsId}>
                        <img src={featuresCards.cardsIcon} alt="" />
                        <h2>{featuresCards.cardsTitle}</h2>
                        <p>{featuresCards.cardsParagraph}</p>
                    </div>
                )
            })
        }
    </Cards>
  )
}

const Cards = styled.div`
    display: flex;
    justify-content: center;
    .cards-data{
        text-align: center;
        margin:40px 0 123.8px 0;
        border: 2px solid #e38811;
        border-radius: 18px;
        width: 370px;
        height: 270px;
        margin-right: 20px;
        img{
            margin-top: 20px;
        }
        h2{
            font-weight:bold;
        }
        p{
            color: rgb(91, 94, 93);
        }
    }
    @media screen and (max-width:1340px){
        .cards-data{
            width: 290px;
            height: 270px;
        }
    }
    @media screen and (max-width:1005px){
        flex-direction: column;
        align-items: center;
        .cards-data{
            width: 570px;
            height: 270px;
            margin: 10px 0 20px 0;
        }
    }
    @media screen and (max-width:620px){
        .cards-data{
            width: 420px;
        }
    }
    @media screen and (max-width:435px){
        .cards-data{
            width: 300px;
        }
    }
`

export default FeaturesCards