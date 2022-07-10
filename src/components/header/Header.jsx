import React, { useState } from 'react'
// import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
import avatar from '../header/avatar.png'
import Button from 'react-bootstrap/Button';
import '../header/Header.css'
import LoginForm from './LoginForm'
import Teams from './Teams';


const Header = () => {

    // const btnClick = () => {
        
    // }
    const [show, setShow] = useState(false);

  return (
    <>
      <div className="navFlex">
            <h3>Paktolus</h3>
            <ul className='list'>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>

            </ul>
            <img
              alt=""
              src={avatar}
              width="30"
              height="30"
              className=" Avatarimg"/>
      </div>

      <div className='main-data'>
      <p style={{color: 'white'}} className='main-para'><span>Indian Premier League</span> <br/> also officially known as TATA IPL for sponsorship reasons,  is a professional <br/>men's Twenty20 cricket league, contested by ten teams based<br/> out of seven Indian cities and three Indian states.<br/> The league was founded by the Board of Control<br/> for Cricket in India in<br/> 2007.</p>
      
      </div>

      <button className='add-btn'>Prev</button>
      <button className='add-btn'>Next</button>

      <div className='openform'>
          <Button variant="primary"
            style = {{ position: "absolute", zindex: 1 }}
            className='btn-primary btnlogin'
            onClick={ () => setShow(true)}>
            Click here to select your team
          </Button>
        <LoginForm show={show} onClose={ () => setShow(false)}/>

      </div>


    </>
  )
}

export default Header