import React from 'react'
import styled from 'styled-components';

const BlogSec = styled.section`
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
    border: 0.1rem solid rgba(255, 255, 255, 0.3);

    .image{
        height: 25rem;
        overflow: hidden;
        width: 100%;

        img{
            height: 100%;
            object-fit: cover;
            width: 100%;
        }
    }

    &:hover .image img{
        transform: scale(1.2);
    }

    .content{
        padding: 2rem;

        .title{
            font-size: 2.5rem;
            line-height: 1.5;
            color: #fff;

            &:hover{
                color: ##d3ad7f;
            }
        }

        span{
            color: #d3ad7f;
            display: block;
            padding-top: 1rem;
            font-size: 2rem;
        }

        p{
            font-size: 1.6rem;
            line-height: 1.8;
            color: #ccc;
            padding: 1rem 0;
        }
    }
`

const Blog = ({ heading, headingSpan, contentTitle, contentSpan, paragraph, button, imageX, imageY, imageZ }) => {
  return (
    <BlogSec id='blogs'>
        <h2 className='heading'>{heading} <span>{headingSpan}</span></h2>
        <Container>
            <Box>
                <div className="image">
                    <img src={imageX} alt=""/>
                </div>
                <div class="content">
                    <div className="title">{contentTitle}</div>
                    <span>{contentSpan}</span>
                    <p>{paragraph}</p>
                    <button className="btn">{button}</button>
                </div>
            </Box>
            <Box>
                <div className="image">
                    <img src={imageY} alt=""/>
                </div>
                <div class="content">
                    <div className="title">{contentTitle}</div>
                    <span>{contentSpan}</span>
                    <p>{paragraph}</p>
                    <button className="btn">{button}</button>
                </div>
            </Box>
            <Box>
                <div className="image">
                    <img src={imageZ} alt=""/>
                </div>
                <div class="content">
                    <div className="title">{contentTitle}</div>
                    <span>{contentSpan}</span>
                    <p>{paragraph}</p>
                    <button className="btn">{button}</button>
                </div>
            </Box>
            
        </Container>
    </BlogSec>
  )
}

export default Blog;