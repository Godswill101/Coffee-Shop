import React, { useState } from 'react';
import { FaBars, FaRegTimesCircle, FaShoppingBag } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  background: #010103;
  color: #fff;
  align-items: center;
  justify-content: space-around;
  padding: 2.5rem 7%;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.3);
  position: fixed;
  top:0; left: 0; right: 0;
  z-index: 1000;

  &.active {transform: translateY(0rem);}

  .logo img{
    height: 6rem;
  }

  @media (max-width: 991px){
    padding: 1.5rem 2rem;
  }
`
const NavItems = styled.div`
  a{
    margin: 0 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;

    &:hover{
      color: #d3ad7f;
      border-bottom: .1rem solid #d3ad7f;
      padding-bottom: .7rem;
    }

    @media (max-width: 768px){
      display: block;
      margin: 2rem;
      font-size: 2rem;
    }
  }

  
  @media (max-width:768px){
    position: absolute;
    top: 99%;left: 0;right: 0;
    background: #13131a;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    -webkit-transition: .2s linear;
            transition: .2s linear;
    display: block;

    &.active {
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
              clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`

const IconsBox = styled.div`
  display: flex;
`

const Icon = styled.div`
  font-size: 3.5rem;
  margin-left: 2rem;
  padding: 0 1.5rem;
  color: #fff;
  cursor: pointer;
  display: none;
`

const Cart = styled.div`
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
`

const Navbar = ({ image }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <Nav>
      <h1 className='logo'><a href='#'><img src={image} alt='' /></a></h1>

      <NavItems className={menuOpen ? 'navbar active' : 'navbar'}> 
        <a href="#">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#services">services</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
      </NavItems>

      <IconsBox>
        <Icon className='icon' id='menu-btn'  onClick={menuToggler}>
          {!menuOpen ? <FaBars /> : <FaRegTimesCircle />}
        </Icon>
        <Cart id='cart'>
          <FaShoppingBag />
        </Cart>
      </IconsBox>
    </Nav>
    
  )
}

export default Navbar;