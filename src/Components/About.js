import React from 'react'
import styled from 'styled-components';

const AboutUs = styled.section``
const Row = styled.div`
    display: flex;
    align-items: center;
    background: #13131a;
    flex-wrap: wrap;

    .image{
        flex: 1 1 45rem;

        img{
            width: 100%;
        }
    }

    .content{
        flex: 1 1 45rem;
        padding: 2rem;

        h3{
            font-size: 3rem;
            color: #fff;
        }

        p{
            font-size: 1.6rem;
            color: #ccc;
            padding: 1rem 0;
            line-height: 1.8;
        }
    }
    
`

const About = ({ heading, headingSpan, content, paragraph, paragraphI, button, image }) => {
  return (
    <AboutUs id='about'>
        <h2 className='heading'><span>{headingSpan} </span>{heading} </h2>
        <Row>
            <div className='image'>
                <img src={image} alt='' />
            </div>
            <div className='content'>
                <h3>{content}</h3>
                <p>{paragraph}</p>
                <p>{paragraphI}</p>
                <button type='button' className='btn'>{button}</button>
            </div>
        </Row>
    </AboutUs>
  )
}

export default About;