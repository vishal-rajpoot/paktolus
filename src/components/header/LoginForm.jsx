import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Teams from './Teams';
import csk from './images/csk.png'
import kkr from './images/kkr.jpg'
import mi from './images/mi.jfif'
import rcb from './images/rcb.png'
import rr from './images/rr.jpg'

import '../header/LoginForm.css'
import { useState } from 'react';

const LoginForm = ({show , onClose}) => {

    const [active, setActive] = useState(false)
    if(!show){
        return null;
    }

    

  return (
    <div className=' m-5 loginwrapper'>
        <section className = 'loginwrapper'>
            <div className="left-data mt-3 form">
            <button className="btn-close btnClose" onClick={onClose}/>
                <h3 className='text-center col-lg-4'>Select Team to create</h3>
                {/* <Form className=''>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    
                    <Form.Group className="mb-3 " controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> */}
                <div className='images'>
                    <img src={csk} alt='' value = 'CSK'  className='bannerimg' onClick={ (event) => {setActive(true)}}/>
                    <img src={rcb} alt='' value = 'RCB' className='bannerimg'  onClick={ () => setActive(true)}/>
                    <img src={mi} alt=''  value = 'MI' className='bannerimg' onClick={ () => setActive(true)}/>
                    <img src={rr} alt=''  value = 'RR' className='bannerimg' onClick={ () => setActive(true)}/>
                    <img src={kkr} alt='' value = 'KKR' className='bannerimg'  onClick={ () => setActive(true)}/>

                </div>

            </div>

        </section>
        
        <div className='Teams-column'>
            {active === true && <Teams onClose={ () => setActive(false)}/> }
        </div>

    </div>
  )
}

export default LoginForm