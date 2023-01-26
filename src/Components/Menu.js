import React from 'react'
import styled from 'styled-components';

const MenuSec = styled.section`
    margin: 70px 0;
`;
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;
const Box = styled.div`
    padding: 5rem;
    text-align: center;
    border: 0.1rem solid rgba(255, 255, 255, 0.3);

    &:hover{
        background: #eee;

        > *{color: #13131a}
    }

    h3{
        color: #fff;
        font-size: 2rem;
        padding: 1rem 0;
    }

    .price{
        color: #a1a1a1;
        font-size: 2.5rem;
        padding: 0.5rem 0;

        span{
            font-size: 1.5rem;
            text-decoration: line-through;
            font-weight: lighter;
        }
    }

    img{
        height: 10rem;
    }
`;

const Menu = ({ heading, headingSpan, text, price, priceSpan, button, imageA, imageB, imageC, imageD, imageE, imageF }) => {
  return (
    <MenuSec id='menu'>
        <h2 className='heading'>{heading} <span>{headingSpan}</span></h2>
        <Container>
            <Box>
                <h3>{text}</h3>
                <img src={imageA} alt='' className='roll'/>
                <div className='price'>{price} <span>{priceSpan}</span></div>
                <button type='button' className='btn'>{button}</button>
            </Box>
            <Box>
                <h3>{text}</h3>
                <img src={imageB} alt='' className='roll'/>
                <div className='price'>{price} <span>{priceSpan}</span></div>
                <button type='button' className='btn'>{button}</button>
            </Box>
            <Box>
                <h3>{text}</h3>
                <img src={imageC} alt='' className='roll'/>
                <div className='price'>{price} <span>{priceSpan}</span></div>
                <button type='button' className='btn'>{button}</button>
            </Box>
            <Box>
                <h3>{text}</h3>
                <img src={imageD} alt='' className='roll'/>
                <div className='price'>{price} <span>{priceSpan}</span></div>
                <button type='button' className='btn'>{button}</button>
            </Box>
            <Box>
                <h3>{text}</h3>
                <img src={imageE} alt='' className='roll'/>
                <div className='price'>{price} <span>{priceSpan}</span></div>
                <button type='button' className='btn'>{button}</button>
            </Box>
            <Box>
                <h3>{text}</h3>
                <img src={imageF} alt='' className='roll'/>
                <div className='price'>{price} <span>{priceSpan}</span></div>
                <button type='button' className='btn'>{button}</button>
            </Box>
            <Box>
                <h3>{text}</h3>
                <img src={imageB} alt='' className='roll'/>
                <div className='price'>{price} <span>{priceSpan}</span></div>
                <button type='button' className='btn'>{button}</button>
            </Box>
            <Box>
                <h3>{text}</h3>
                <img src={imageA} alt='' className='roll'/>
                <div className='price'>{price} <span>{priceSpan}</span></div>
                <button type='button' className='btn'>{button}</button>
            </Box>
        </Container>
    </MenuSec>
  )
}

export default Menu;