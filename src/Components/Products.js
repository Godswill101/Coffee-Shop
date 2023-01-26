import React from 'react'
import { FaEye, FaHeart, FaShoppingCart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import styled from 'styled-components';

const ProductsSec = styled.section`
    margin: 70px 0;
`
const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
const Box = styled.div`
    text-align: center;
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    padding: 2rem;

    .image{
        padding: 2.5rem 0;

        img{height: 25rem;}
    }

    .icons .fa{
        height: 4rem;
        width: 4rem;
        line-height: 5rem;
        font-size: 2rem;
        border: 0.1rem solid rgba(255, 255, 255, 0.3);
        color: #eee;
        margin: 1rem;

        &:hover{
            background: #d3ad7f;
        }
    }

    .content{
        h3{
            color: #fff;
            font-size: 2.5rem;
        }

        .stars{
            padding: 1.5rem;

            .fa{
                font-size: 1.7rem;
                color: #d3ad7f;
            }
        }

        .price{
            color: #fff;
            font-size: 2.5rem;

            span{
                text-decoration: line-through;
                font-weight: lighter;
                font-size: 1.5rem;
            }
        }
    }
`

const Products = ({ heading, headingSpan, text, price, priceSpan, imageA, imageB, imageC }) => {
  return (
    <ProductsSec id='products'>
        <h2 className='heading'>{heading} <span>{headingSpan}</span></h2>
        <Container>
            <Box>
                <div className="icons">
                    <FaShoppingCart className='fa'/>
                    <FaHeart className='fa'/>
                    <FaEye className='fa'/>
                </div>
                <div className="image">
                    <img src={imageA} alt=""/>
                </div>
                <div className="content">
                    <h3>{text}</h3>
                    <div className="stars">
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStarHalfAlt className='fa'/>
                    </div>
                    <div className="price">{price} <span>{priceSpan}</span></div>
                </div>
            </Box>
            <Box>
                <div className="icons">
                    <FaShoppingCart className='fa'/>
                    <FaHeart className='fa'/>
                    <FaEye className='fa'/>
                </div>
                <div className="image">
                    <img src={imageB} alt=""/>
                </div>
                <div className="content">
                    <h3>{text}</h3>
                    <div className="stars">
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStarHalfAlt className='fa'/>
                    </div>
                    <div className="price">{price} <span>{priceSpan}</span></div>
                </div>
            </Box>
            <Box>
                <div className="icons">
                    <FaShoppingCart className='fa'/>
                    <FaHeart className='fa'/>
                    <FaEye className='fa'/>
                </div>
                <div className="image">
                    <img src={imageC} alt=""/>
                </div>
                <div className="content">
                    <h3>{text}</h3>
                    <div className="stars">
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStarHalfAlt className='fa'/>
                    </div>
                    <div className="price">{price} <span>{priceSpan}</span></div>
                </div>
            </Box>
            <Box>
                <div className="icons">
                    <FaShoppingCart className='fa'/>
                    <FaHeart className='fa'/>
                    <FaEye className='fa'/>
                </div>
                <div className="image">
                    <img src={imageB} alt=""/>
                </div>
                <div className="content">
                    <h3>{text}</h3>
                    <div className="stars">
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStarHalfAlt className='fa'/>
                    </div>
                    <div className="price">{price} <span>{priceSpan}</span></div>
                </div>
            </Box>
            <Box>
                <div className="icons">
                    <FaShoppingCart className='fa'/>
                    <FaHeart className='fa'/>
                    <FaEye className='fa'/>
                </div>
                <div className="image">
                    <img src={imageC} alt=""/>
                </div>
                <div className="content">
                    <h3>{text}</h3>
                    <div className="stars">
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStarHalfAlt className='fa'/>
                    </div>
                    <div className="price">{price} <span>{priceSpan}</span></div>
                </div>
            </Box>
            <Box>
                <div className="icons">
                    <FaShoppingCart className='fa'/>
                    <FaHeart className='fa'/>
                    <FaEye className='fa'/>
                </div>
                <div className="image">
                    <img src={imageA} alt=""/>
                </div>
                <div className="content">
                    <h3>{text}</h3>
                    <div className="stars">
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStar className='fa' />
                        <FaStarHalfAlt className='fa'/>
                    </div>
                    <div className="price">{price} <span>{priceSpan}</span></div>
                </div>
            </Box>
        </Container>
    </ProductsSec>
  )
}

export default Products;