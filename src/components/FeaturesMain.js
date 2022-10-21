import React from 'react'
import {FeaturesMainData} from '../data'
import styled from 'styled-components'

function FeaturesMain() {
  return (
    <Main>
        {
            FeaturesMainData && FeaturesMainData.map(featuresMain => {
                return(
                    <div className="main-data" key={featuresMain.featuresId}>
                        <h2>{featuresMain.featuresTitle}</h2>
                        <h1>{featuresMain.featuresSlogan}</h1>
                    </div>
                )
            })
        }
    </Main>
  )
}

const Main = styled.div`
    text-align: center;
    h2{
        color: rgb(91, 94, 93);
        font-weight: 700;
        margin-bottom: 40px;
    }
    @media screen and (max-width:620px){
        h2{
            margin-top: 120px;
            margin-bottom: 30px;
        }
        h1{
            font-size: 42px;
        }
    }
`

export default FeaturesMain