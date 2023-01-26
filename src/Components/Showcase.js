import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import './Style.css'


const ShowcaseArea = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;

    @media (max-width: 768px){
        background-position: left;
        justify-content: center;
        text-align: center;
    }
`
const Content = styled.div`
    max-width: 100rem;
    padding: 0 7.5em;
    z-index: 1;

    h3{
        font-size: 6rem;
        text-transform: uppercase;
        color: #fff;

        @media (max-width: 768px){
            font-size: 4.5rem;
            text-align: start;
        }
    }

    p{
        font-size: 2rem;
        font-weight: lighter;
        line-height: 1.8;
        padding: 1rem 0;
        color: #eee;

        @media (max-width: 768px){
            font-size: 2rem;
            text-align: start;
        }
    }

    .icons{
        font-size: 3rem;
        color: #eee;
        cursor: pointer;

        .fa{
            margin-right: 2rem;
        }
    }
`

const Showcase = ({ content, text, button }) => {
  return (
    <ShowcaseArea className='bg'>
        <Content>
            <h3>{content}</h3>
            <p>{text}</p>
            <div className='icons'>
                <FaFacebook className='fa'/>
                <FaInstagram className='fa'/>
                <FaTwitter className='fa'/>
                <FaLinkedin className='fa'/>
            </div>
            <button type='button' className='btn'>{button}</button>
        </Content>
        
    </ShowcaseArea>
  )
}

export default Showcase;