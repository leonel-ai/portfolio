import React, { Component } from 'react';

import self from './assets/self.jpg';
import water from './assets/bgwater.webp';

// case studies
import caseStudy from './assets/drdelicacy.png';
import caseStudy2 from './assets/markowitz-services.gif';

// social icons
import tw from './assets/icons/twitter.png';
import li from './assets/icons/linkedin.png';
import pin from './assets/icons/pinterest.png';
import tum from './assets/icons/tumblr.png';
import insta from './assets/icons/instagram.png';
import git from './assets/icons/github.png';

import Fade from 'react-reveal/Fade';
import Footer from './components/footer';

// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">

      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="/">LG</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <Fade top delay={400} duration={1200}>
            <li className="nav-item active">
              <a className="nav-link" href="http://linkedin.com/in/leonelaguzman/" target="_blank">CV</a>
            </li>
          </Fade>
          <Fade top delay={440} duration={1200}>
            <li className="nav-item">
              <a className="nav-link" href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">Let's Email</a>
            </li>
          </Fade>
          <Fade top delay={480} duration={1200}>
            <li className="nav-item">
              <a className="nav-link" href="sms:3372400858">Text Me</a>
            </li>
          </Fade>

            <div className="mobile-social">
                <Fade top delay={500} duration={2000}>
              <a href="http://linkedin.com/in/leonelaguzman/" target="_blank"><span>
                <img src={li} alt=""/></span></a>
                </Fade>
                <Fade top delay={560} duration={2000}>
                <a href="http://github.com/leonel-ai/" target="_blank"><span>
                <img src={git} alt=""/></span></a>
                </Fade>
                <Fade top delay={620} duration={2000}>
              <a href="http://twitter.com/leonel_ai/" target="_blank"><span>
                <img src={tw} alt=""/></span></a>
                </Fade>
                <Fade top delay={680} duration={2000}>
              <a href="https://www.pinterest.com/leonel_ai/design/" target="_blank"><span>
                <img src={pin} alt=""/></span></a>
                </Fade>
                <Fade top delay={740} duration={2000}>
              <a href="http://laesquinalatina.tumblr.com/" target="_blank"><span>
                <img src={tum} alt=""/></span></a>
                </Fade>
                <Fade top delay={800} duration={2000}>
              <a href="http://instagram.com/leonel.ai/" target="_blank"><span>
                <img src={insta} alt=""/></span></a>
                </Fade>
            </div>
          </ul>
        </div>
      </nav>


        <header className="row page-header">
        <Fade bottom delay={400}>
          <div className="col-xs-2 col-md-2 offset-md-1" id="tab">
            Perfil
          </div>
        </Fade>

          <div className="col-md-6 page-headline">
          <Fade bottom delay={500}>
            <h1 className="page-title">Leonela Guzmán</h1>
            <h1 className="page-subtitle">Design + Development</h1>
          </Fade>
          </div>
        </header>

        <div className="row profile">
        <Fade bottom delay={500} duration={1300}>
          <div className="col-xs-2 col-md-7 backdrop-profile">
            <img src={water} alt="" className="img-fluid rounded"/>
          </div>
        </Fade>
        <Fade bottom delay={500} duration={2000}>
          <div className="col-xs-6 col-md-7 offset-md-4 offset-xl-3 backdrop-image">
            <img src={self} alt="" className="img-fluid rounded self"/>
          </div>
        </Fade>
        </div>


        <div className="row about">
        <Fade bottom delay={500} duration={1800}>
          <div className="col-xs-2 col-md-2 offset-md-1" id="tab">
            Sobre Mí
          </div>
        </Fade>

        <Fade bottom delay={500} duration={1800}>
          <div className="col-md-5 about-text">
            <p className="about-me">I'm a web and interaction designer that believes in meaningful work, turning ideas into user-friendly solutions.
            I work with clients, large or small, to design exceptional brands and web experiences that challenge the norm
            and contribute positively to the local and global community.</p>
            <p className="about-me">Let's create something together.</p>
            <a href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Get to know me
            </button></a>
          </div>
        </Fade>
        </div>

        <div className="row services">
        <Fade bottom delay={200}>
          <div className="col-xs-2 col-md-2 offset-md-1" id="tab">
            Servicios
          </div>
        </Fade>

         <div className="col-md-6">
         <Fade bottom delay={500} duration={1300}>
            <h1>The Process</h1>
            <p className="service-details">Forget templates or pre-designed UI kits. I research, design, and develop
            solutions tailored to each of my client's needs.<br/><br/>Expect transparent, honest and professional communication.
            Working with me cuts out the middlemen. You'll be talking directly to the strategist, the creator, and the partner invested in the success of your business.
            </p>
            <h3>Design</h3>
            <p className="service-item">UX/UI Design<br/>Responsive Web Design<br/>Mobile App Design<br/>Print Design</p>
            <h3>Web Development</h3>
            <p className="service-item">HTML/CSS, React/Node, Jquery, C++<br/>Client and Server-Side Scripting<br/>CMS and Cloud Services Platforms<br/>SEO and Bandwidth Optimization</p>
            <h3>Brand Strategy</h3>
            <p className="service-item">Art Direction<br/>Branding and Identity<br/>Digital Marketing and Copywriting<br/>Event Coordination</p>
            <a href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Let's get started</button></a>
          </Fade>
          </div>

        <Fade bottom delay={200}>
          <div className="col-xs-2 col-md-2 offset-md-1 tab-p" id="tab">
            Proyectos
          </div>
        </Fade>

          <div className="col-md-6 work">
          <Fade bottom delay={500}>
            <h1>The Work</h1>
            <p className="project-details">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore ipsum nostrum, quia reprehenderit ipsam nam labore sed impedit. Ab quia eum autem consequatur,
            molestias nemo aspernatur iure. Voluptatum, nemo incidunt. </p>
            <h3>Industry Experience</h3>
            <p className="project-xp">Art / Architecture / B2B+B2C / Fashion / Film /<br/>
            Food / Lifestyle / Music / News / Photography /<br/>Radio / Travel / Law / Tech / Apps</p>
          </Fade>
          </div>

            <div className="col-md-12 case1">
              <div className="row">
                <div className="col-md-6 case1-img">
                  <img src={caseStudy} alt="" className="img-fluid rounded"/>
                </div>
                <div className="col-md-6 case1-col">
                  <h4>Client — DR Delicacy</h4>
                  <p>Building a new brand and minimalist landing page designed to convert B2B and Wholesale.</p>
                  <h5>Responsibilities</h5>
                  <p>Art Direction<br/>Product Shoot<br/>Branding and Identity<br/>Responsive Web / UI Design</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 case2">
              <div className="row">
                <div className="col-md-6 col-xl-7 case2-col order-12 order-md-first">
                  <h4>Client — Markowitz Law</h4>
                  <p>Building a minimalist landing page designed to convert B2B and Wholesale.</p>
                  <h5>Responsibilities</h5>
                  <p>Art Direction<br/>Product Shoot<br/>Branding and Identity<br/>Responsive Web / UI Design</p>
                </div>
                <div className="col-md-6 col-xl-5 case2-img">
                  <img src={caseStudy2} alt="" className="img-fluid rounded"/>
                </div>
              </div>
            </div>


        </div>

      <div className="row footer">
        <Fade bottom delay={200}>
          <div className="col-xs-2 col-md-2 offset-md-1" id="tab">
            Contacto
          </div>
        </Fade>

        <div className="col-md-6">
          <Fade bottom delay={500}>
            <h1>The Next Step</h1>
            <p className="contact-details">Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quibusdam repellat vel voluptas totam dignissimos optio ut pariatur,
            laboriosam, veritatis est ab! Harum quos voluptatum optio, sequi nisi aliquid
            voluptatem consectetur.</p>
            <a href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Vámonos</button></a>
          </Fade>
        </div>
      </div>

      <Footer/>
      </div>
    );
  }
}

export default App;
