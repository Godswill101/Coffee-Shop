import React from 'react'
import { FaEnvelopeOpenText, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaRegClock, FaSnapchat, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const FooterSec = styled.div`
    background: #13131a;
    text-align: center;
    
    .share{
        padding: 1.2rem 0;

        .fa{
            font-size: 3rem;
            margin: 2rem;
            color: #fff;

            &:hover{
                color: #d3ad7f;
            }
        }
    }

    .links{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 2rem 0;
        gap: 1rem;

        a{
            padding: 0.7rem 2rem;
            color: #fff;
            border: 0.1rem solid rgba(255, 255, 255, 0.3);
            font-size: 2rem;
            
            &:hover{
                background: #d3ad7f;
            }
        }
    }

    .credit{
        font-size: 2rem;
        color:#fff;
        font-weight: lighter;
        padding:1.5rem;

        span,a{
            color: #d3ad7f;
        }
    }

    .box{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-evenly;
        padding: 2rem 0;
        margin: 1rem;
        font-size: 1.5rem;
        color: #d3ad7f;

        h2{
            color: #eee;
            padding: 2rem;
        }

        .box-con div{
            padding: 1.5rem 0;
        }

        @media (max-width: 768px){
            display: block;
        }
    }

    img{
        width: 10rem;
        padding-right: 2rem;
    }
`

const Footer = ({ imageW, imageX, imageY, imageZ }) => {
  return (
    <FooterSec>Footer
        <div className='share'>
            <FaTwitter className='fa'/>
            <FaInstagram className='fa'/>
            <FaFacebook className='fa'/>
            <FaPinterest className='fa'/>
            <FaSnapchat className='fa'/>
            <FaLinkedin className='fa'/>
        </div>
        <div className="links">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#menu">menu</a>
            <a href="#services">services</a>
            <a href="#products">products</a>
            <a href="#review">review</a>
            <a href="#contact">contact</a>
            <a href="#blogs">blogs</a>
        </div>
        <div className='nuts'>
            <img src={imageW} alt='' />
            <img src={imageX} alt='' />
            <img src={imageY} alt='' />
            <img src={imageZ} alt='' />
        </div>
        <div className='box'>
            <div className="box-con">
                <h2 className="">Keep In Touch With Us:</h2>
                <div className="">
                    <h3 className=""><FaPhoneAlt /> Phone Number</h3>
                    <p>(+234)-(0)-8075752554</p>
                </div>
                <div className="">
                    <h3 className=""><FaEnvelopeOpenText /> Email Address</h3>
                    <p>coffee_shop01@gmail.com</p>
                </div>
                <div className=''>
                    <h3 className=''> <FaMapMarkerAlt/> Location</h3>
                <p>06 Gowon Street, Off Barrack Road By Waterboard, Abuja</p>
                </div>
            </div>

            <div className="box-con">
                <h2>Opening Hours: </h2>
            
                <div><FaRegClock /> Monday To Friday - 8am to 5pm</div>
            
                <div><FaRegClock /> Saturday and Sunday - 9am to 4pm</div>

                <div className='follow'>
                    <h3>Follow Us</h3>
                    <div className='icons'>
                        <FaTwitter className='fa'/>
                        <FaFacebook className='fa'/>
                        <FaPinterest className='fa'/>
                        <FaInstagram className='fa'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='credit'>
            <p> Copyright &copy;  <span> coffee shop </span> 2023, All Rights Reserved <a href="https://github.com/Godswill101"><FaGithub className=''/> </a><a href='https://www.linkedin.com/in/chukwudi-godswill-68b35b214/'><FaLinkedin /></a> </p>
      </div>
    </FooterSec>
  )
}

export default Footer;