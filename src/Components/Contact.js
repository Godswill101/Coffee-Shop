import React from 'react'
import styled from 'styled-components';

const ContactSec = styled.section``
const Container = styled.div`
    display: flex;
    background: #13131a;
    flex-wrap: wrap;
    gap: 1rem;

    .map{
        flex: 1 1 45rem;
        width: 100%;
        object-fit: cover;
    }

    form{
        flex: 1 1 45rem;
        padding: 5rem 2rem;
        text-align: center;

        h3{
            text-transform: uppercase;
            font-size: 3.5rem;
            color: #fff;
        }

        .inputBox{
            display: flex;
            align-items: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
            background: #010103;
            border: 0.1rem solid rgba(255, 255, 255, 0.3);

            span{
                color: #fff;
                font-size: 2rem;
                padding-left: 2rem;
            }

            input{
                width: 100%;
                padding: 2rem;
                font-size: 1.7rem;
                color: #fff;
                text-transform: none;
                background: none;
            }
        }
    }
`

const Contact = () => {
  return (
    <ContactSec id='contact'>
        <Container>
            <iframe className="gmap_iframe map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Dawaki Modern Market&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            
            <form action="">
                <h3>get in touch</h3>
                
                <div className="inputBox">
                    <span className="fas fa-user"></span>
                    <input type="text" placeholder="name"/>
                </div>
                <div className="inputBox">
                    <span className="fas fa-envelope"></span>
                    <input type="email" placeholder="email" />
                </div>
                <div className="inputBox">
                    <span className="fas fa-phone"></span>
                    <input type="number" placeholder="number" />
                </div>
                <input type="submit" value="contact now" className="btn" />
            </form>
        </Container>
    </ContactSec>
  )
}

export default Contact;