import React from 'react'
import { Data } from "../data"
import "../Design/designSummary/Summary.css"

function Summary() {
    return (
        <div className='summary' style={{ display: 'flex' }}>
            {
                Data && Data.map(data => {
                    return (
                        <div className="blog-summary" key={data.id}>
                            <img className='blog-summary-image' src={data.image} />
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

export default Summary