import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsGithub,  BsInstagram } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us</h3>
                    <ul className='socialIconsList'>
                        
                        <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/sharanappab" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://github.com/SharanappaM" target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                        
                        <li>
                          <a rel="noreferrer" href="https://www.instagram.com/sharan_hbd/" target="_blank" >
                            <BsInstagram/>
                          </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100014240491559" target="_blank">
                                <BsFacebook />
                            </a>
                        </li>
                    </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>Developed and Designed  by <a href="https://github.com/SharanappaM" target="_blank" rel="noreferrer">Sharanappa</a>.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;


