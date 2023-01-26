import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import styled from 'styled-components';

const ReviewSec = styled.section`
    margin: 70px 0;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
const Box = styled.div`
    text-align: center;
    padding: 3rem 2rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.3);

    h3{
        padding:1rem 0;
        font-size: 2rem;
        color:#fff;
    }

    p{
        font-size: 1.5rem;
        line-height: 1.8;
        color: #ccc;
        padding: 2rem 0;
    }

    .user{
        height: 7rem;
        width: 7rem;
        border-radius: 50%;
        object-fit: cover;
    }

    .stars .fa{
        font-size: 1.5rem;
        color: #d3ad7f;
    }
`

const Review = ({ heading, headingSpan, paragraph, name, imageA, imageB, imageC, imageX }) => {
  return (
    <ReviewSec id='review'>
        <h2 className='heading'> {heading} <span>{headingSpan}</span></h2>
        <Container>
            <Box>
                <img src={imageX} alt="" className="quote" />
                <p>{paragraph}</p>
                <img src={imageA} className="user" alt="" />
                <h3>{name}</h3>
                <div className="stars">
                    <FaStar className='fa'/>
                    <FaStar className='fa'/>
                    <FaStar className='fa'/>
                    <FaStar className='fa'/>
                    <FaStarHalfAlt className='fa' />
                </div>
            </Box>
            <Box>
                <img src={imageX} alt="" className="quote" />
                <p>{paragraph}</p>
                <img src={imageB} className="user" alt="" />
                <h3>{name}</h3>
                <div className="stars">
                    <FaStar className='fa'/>
                    <FaStar className='fa'/>
                    <FaStar className='fa'/>
                    <FaStar className='fa'/>
                    <FaStarHalfAlt className='fa' />
                </div>
            </Box>
            <Box>
                <img src={imageX} alt="" className="quote" />
                <p>{paragraph}</p>
                <img src={imageC} className="user" alt="" />
                <h3>{name}</h3>
                <div className="stars">
                    <FaStar className='fa'/>
                    <FaStar className='fa'/>
                    <FaStar className='fa'/>
                    <FaStar className='fa'/>
                    <FaStarHalfAlt className='fa' />
                </div>
            </Box>
        </Container>
    </ReviewSec>
  )
}

export default Review;