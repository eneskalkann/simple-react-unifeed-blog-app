import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Svg from '../Assets/404-pics.svg'
import { BiArrowFromRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <PageNotFound className='container'>
            <Navbar></Navbar>
            <div className='container-main'>
                <div className="container-main-header">
                    <h1>Oooopps</h1>
                    <h3>Sorry Page Not Found</h3>
                    <p>The page you are looking for might have been removed or temporarily unavailable.</p>
                    <div className="container-main-button">
                    <BiArrowFromRight className='icon' />
                        <Link to={"/"} className="link-button">Go back home..</Link>
                    </div>
                </div>
                <img src={Svg} alt="notFound" className='svg' />
            </div>
        </PageNotFound>
    )
}

const PageNotFound = styled.div`
    .container-main{
        justify-content: center;
        display: flex;
        align-items: center;
        margin-top: 100px;
        &-header{
            h1{
                font-size: 66px;
                color: #e38811;
            }
            h3{
                font-size: 32px;
            }
            p{
                width: 500px;
                color: rgb(91, 94, 93);
            }
        }
        &-button{
            display: flex;
            align-items: center;
            .icon{
                color: #e38811;
                width: 20px;
                height: 20px;
                align-items: center;
            }
            .link-button{
                text-decoration: none;
                color: #e38811;
                font-size: 17px;
                margin-left: 7px;
                border-bottom: 3px dashed #e38811;
                :hover{
                    color: rgb(91, 94, 93);
                    transition: all .3s;
                    border-bottom-color: rgb(91, 94, 93);
                }
            }
        }
        .svg{
        width: 500px;
        }
    }
    @media screen and (max-width:1036px) {
        .container-main{
            margin-top: 80px;
        &-header{
            h1{
                font-size: 56px;
                color: #e38811;
            }
            h3{
                font-size: 28px;
            }
            p{
                width: 300px;
                color: rgb(91, 94, 93);
            }
        }
        .svg{
        width: 300px;
        }
        }
    }
    @media screen and (max-width:620px) {
        .container-main{
            flex-direction: column;
            margin-top: 0;
            &-header{
                h1{
                    margin-top: 120px;
                }
            }
            &-button{
                margin-bottom: 60px;
            }
        }
    }
`

export default NotFound