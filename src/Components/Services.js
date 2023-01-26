import React from 'react'
import styled from 'styled-components';
import { FaMugHot } from 'react-icons/fa';
import { IoFastFoodOutline } from 'react-icons/io5'
import { GiCakeSlice, GiFoodTruck } from 'react-icons/gi'

const ServicesSec = styled.section`
    margin: 70px 0;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
const Box = styled.div`
    padding: 2.5rem;
    text-align: center;
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    border-radius: 70% 67% 70% 60%/30% 30% 70% 70%;

    @media (max-width: 768px){
        padding: 4rem;
    }

    .fa{
        color: #d3ad7f;
        font-size: 5rem;
    }

    h3{
        color: #fff;
        font-size: 3rem;
        padding:1rem 0;
    }

    p{
        font-size: 1.6rem;
        color: #d3ad7f;
        padding: 1rem 0;
        line-height: 1.8;
    }

    &:hover {
        border-radius: 2rem;
    }
`

const Services = ({ heading, headingSpan, content, paragraph }) => {
  return (
    <ServicesSec id='services'>
        <h2 className='heading'>{heading} <span>{headingSpan}</span></h2>
        <Container>
            <Box>
                <FaMugHot className='fa'/>
                <h3>hot coffee</h3>
                <p>{paragraph}</p>
            </Box>
            <Box>
                <GiCakeSlice className='fa'/>
                <h3>cakes</h3>
                <p>{paragraph}</p>
            </Box>
            <Box>
            
                <IoFastFoodOutline className='fa'/>
                <h3>fast food</h3>
                <p>{paragraph}</p>
            </Box>
            <Box>
                <GiFoodTruck className='fa'/>
                <h3>home delivery</h3>
                <p>{paragraph}</p>
            </Box>
        </Container>
    </ServicesSec>
  )
}

export default Services;