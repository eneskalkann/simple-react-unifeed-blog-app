import React from 'react'
import { Data } from "../data"
import "../Design/designSummary/Summary.css"
import styled from 'styled-components'

function Summary() {
    return (
        <div className='summary' style={{ display: 'flex' }}>
            {
                Data && Data.map(data => {
                    return (
                        <div className="blog-summary" key={data.id}>
                            <Image className='blog-summary-image' src={data.image}/>
                            <h1>{data.title}</h1>
                            <p>{data.paragraph}</p>
                            <div className="blog-summary-author">
                                <img className='avatar' src={data.authorImage} />
                                <div className="blog-summary-author-span">
                                    <span>{data.author}</span>
                                    <span className='position'>{data.position}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

const Image = styled.img`
    opacity: 1;
    :hover{
        opacity: .5;
        transition: all .5s;
    }
    
`

export default Summary