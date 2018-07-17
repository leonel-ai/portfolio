import React, { Component } from 'react';

import self from './assets/self.jpg';
import water from './assets/bgwater.webp';
import slab from './assets/slab.jpg';

// case studies
import caseStudy from './assets/drdelicacy.png';
import caseStudy2 from './assets/markowitz-services.gif';
import case1 from './assets/sdw-sample.png';
import case2 from './assets/y-delicacies.gif';
import case3 from './assets/delta-journal.png';

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
            Profile
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
          <div className="col-xs-6 col-md-7 offset-md-5 backdrop-image">
            <img src={self} alt="" className="img-fluid rounded self"/>
          </div>
        </Fade>
        </div>


        <div className="row about">
        <Fade bottom delay={500} duration={1800}>
          <div className="col-xs-2 col-md-2 offset-md-1" id="tab">
            About
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
            Services
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
            <p className="service-item">HTML, CSS, JS (React/Node), Jquery<br/>Client and Server-Side Scripting<br/>CMS and Cloud Services Platforms<br/>SEO and Bandwidth Optimization</p>
            <h3>Brand Strategy</h3>
            <p className="service-item">Art Direction<br/>Branding and Identity<br/>Digital Marketing and Copywriting<br/>Event Coordination</p>
            <a href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Let's get started</button></a>
          </Fade>
          </div>

        {/* <div className="row work">
        <Fade bottom delay={500} duration={1400}>
          <div className="col-xs-2 col-md-7 backdrop-work">
            <img src={slab} alt="" className="img-fluid rounded"/>
          </div>
          <div className="col-xs-6 col-md-7 offset-md-4 backdrop-cases">
            <img src={caseStudy} alt="" className="img-fluid rounded cases"/>
          </div>
        </Fade>
        </div> */}

        <Fade bottom delay={200}>
          <div className="col-xs-2 col-md-2 offset-md-1 projects" id="tab">
            Projects
          </div>
        </Fade>

          <div className="col-md-6">
          <Fade bottom delay={500}>
            <h1>The Work</h1>
            <p className="project-details">With such a diverse set of skills and industry knowledge, I'm </p>
            <h3>Industry Experience</h3>
            <p className="project-details">Art / Architecture / B2B+B2C / Fashion / Film / Food / Lifestyle / Music / News / Photography / Radio / Travel / Law / Tech / Apps</p>
          </Fade>
          </div>

            {/* <div className="col-md-6">
              <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel" data-pause="hover" data-interval="7000">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src={case1} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={case2} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={case3} alt="Third slide"/>
                    </div>

                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
            </div> */}

            <div className="col-md-12 case1">
              <div className="row">
                <div className="col-md-6 case-1-img">
                  <img src={caseStudy} alt="" className="img-fluid rounded"/>
                </div>
                <div className="col-md-6 case-1-col">
                  <h5>Client — DR Delicacy</h5>
                  <p>Building a new brand and minimalist landing page designed to convert B2B wholesale.</p>
                  <h5>Responsibilities</h5>
                  <p>Art Direction<br/>Product Shoot<br/>Branding and Identity<br/>Responsive Web / UI Design</p>
                </div>
              </div>
            </div>

            <div className="col-md-12 case2">
              <div className="row">
                <div className="col-md-6 case-2-col order-12 order-md-first">
                  <h5>Client — DR Delicacy</h5>
                  <p>Building a new brand and minimalist landing page designed to convert B2B wholesale.</p>
                  <h5>Responsibilities</h5>
                  <p>Art Direction<br/>Product Shoot<br/>Branding and Identity<br/>Responsive Web / UI Design</p>
                </div>
                <div className="col-md-6 case-2-img">
                  <img src={caseStudy2} alt="" className="img-fluid rounded"/>
                </div>
              </div>
            </div>


        </div>

      <div className="row footer">
        <Fade bottom delay={200}>
          <div className="col-xs-2 col-md-2 offset-md-1" id="tab">
            Contact
          </div>
        </Fade>

        <div className="col-md-6">
          <Fade bottom delay={500}>
            <h1>The Next Step</h1>
            <p className="contact-details">With</p>
          </Fade>
        </div>
      </div>

      <Footer/>
      </div>
    );
  }
}

export default App;
