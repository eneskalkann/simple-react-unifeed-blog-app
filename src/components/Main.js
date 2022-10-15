import React from 'react'
import { MainData } from '../data'
import '../Design/designMain/Main.css'

function Main() {
    return (
        <div className='main'>
            {
                MainData && MainData.map(main => {
                    return (
                        <div className="blog-main" key={main.mainId}>
                            <img className="blog-main-image" src={main.mainImage} />
                            <div className="blog-main-content">
                                <h1>{main.mainTitle}</h1>
                                <p>{main.mainParagraph}</p>
                                <div className="blog-main-content-author">
                                    <img className='avatar' src={main.mainAuthorImage} />
                                    <div className="blog-main-content-author-span">
                                        <span className='author'>{main.mainAuthor}</span>
                                        <span className='position'>{main.mainPosition}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main