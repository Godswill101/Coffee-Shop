import { createGlobalStyle } from 'styled-components'

const Globalstyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');

    *{
        font-family: 'Roboto', sans-serif;
        margin: 0; padding: 0;
        box-sizing: border-box;
        outline: none; border: none;
        text-decoration: none;
        text-transform: capitalize;
        transition: .2s linear;
    }

    html{
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-padding-top: 9rem;
        scroll-behavior: smooth;

        @media (max-width: 991px){
            font-size: 55%;
        }

        @media (max-width: 450px){
            font-size: 50%;
        }
    }

    html::-webkit-scrollbar{
        width: 0.8rem;
    }

    html::-webkit-scrollbar-track{
        background: transparent;
    }

    html::-webkit-scrollbar-thumb{
        background: #fff;
        border-radius: 5rem;
    }

    section{
        padding: 2rem 7%;

        @media (max-width: 991px){
            padding:2rem;
        }
    }

    .heading{
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        padding-bottom: 3.5rem;
        font-size: 4rem;
    }

    .heading span{
        color: #d3ad7f;
        text-transform: uppercase;
    }

    .btn{
        margin-top: 1rem;
        display: inline-block;
        padding: 0.9rem 3rem;
        font-size: 1.7rem;
        color: #fff;
        background: #d3ad7f;
        cursor: pointer;

        @media (max-width:768px){
            background: #0bb6fc;
        }
    }

    .btn:hover{
        letter-spacing: 0.2rem;
    }

    @media (max-width:768px){

        #menu-btn{
            display: inline-block;
        }

    }

    .roll{
        animation: logo-spin infinite 20s linear;
    }

    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

`

export default Globalstyle;