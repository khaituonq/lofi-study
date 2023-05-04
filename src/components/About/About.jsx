import React from 'react';

import { Link } from 'react-router-dom';
import './About.scss';
import { Button } from 'react-bootstrap';

const About = () => {
  return (
    <div className='container'>
      <nav className='container__nav'>
        <Link to='/'>
          <img src='/assets/icons/lofi-logo.gif' alt='' />
        </Link>
        <div className='nav-menu'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/khaituonq/'
          >
            <i className='fab fa-linkedin'></i>
            <span>Linkedin</span>
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://github.com/khaituonq'
          >
            <i className='fab fa-github'></i>
            <span>GitHub</span>
          </a>
          <Link to='/about'>
            <i className='fas fa-info'></i>
            <span>About us</span>
          </Link>
        </div>
      </nav>
      <section className='description'>
        <h1>Welcome to the auto genrate lofi music cloned by Khai Tuong from https://github.com/phuclevinh2000</h1>
        <h1>The purpose of this application is for learning</h1>
        <h1>This is a web application inspired by Lofi.co.</h1>
        <h1>
          This web application can generate background noises, lofi music, focus
          mode, and you can set everything
        </h1>
        <h1>Hope this will help you guys work more effectively</h1>
        <Link to='/'>
          <Button variant='dark'>Back to homepage</Button>
        </Link>
      </section>
    </div>
  );
};

export default About;
