import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsGithub,BsInstagram} from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
        {name:'Facebook', link:'https://www.facebook.com/profile.php?id=100014240491559', text:'Follow to my facebook.'},
        {name:'Facebook', link:'https://www.instagram.com/sharan_hbd/', text:'Follow to my Instagram.'},
        {name:'Linkedin', link:'https://www.linkedin.com/in/sharanappab', text:'Follow to my linkedin.'},
        {name:'GitHub', link:'https://github.com/SharanappaM', text:'Follow to my github account.'},
        {name:'Email', link:'mailto:hbdsharanappa52@gmail.com',  text:'write to me a mail'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
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
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;