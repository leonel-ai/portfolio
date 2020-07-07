import React, { Component } from 'react';
import {
  isBrowser,
  isMobile
} from "react-device-detect";

import self from './assets/self.jpg';
import water from './assets/bgwater.gif';

// case studies
import caseStudy from './assets/drdelicacy.png';
import caseStudy2 from './assets/markowitz-services.gif';
import caseStudy3 from './assets/trucke.png';

import Fade from 'react-reveal/Fade';
import Footer from './components/footer';

// styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/App.css';


// social icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faWhatsapp, faTwitter, faBehance} from '@fortawesome/free-brands-svg-icons';

library.add(
  faEnvelope,
  faLinkedin,
  faGithub,
  faWhatsapp,
  faTwitter,
  faBehance
);



class App extends Component {
  state = {
    color: 'black',
    transition: 'inherit'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 1200 && isBrowser) {
      this.setState({
        color: 'white',
        transition: 'all 4s ease'
      })
    } else if (window.scrollY > 680 && isMobile) {
      this.setState({
        color: 'white',
        transition: 'all 4s ease'
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div className="container-fluid App">

      <nav className="navbar navbar-dark">
        <a className="navbar-brand" href="/"></a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <Fade top delay={400} duration={1000}>
            <li className="nav-item">
              <p className="nav-link">Get in touch</p>
            </li>
          </Fade>

            <div className="mobile-social">
                <Fade top duration={1000}>
                  <a href="http://linkedin.com/in/leonelaguzman/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="6x" /></a>
                </Fade>
                <Fade top delay={600} duration={1000}>
                  <a className="icon-email"href="mailto:leonela.dev@gmail.com?subject=Let's talk." target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fas', 'envelope']} size="6x" /></a>
                </Fade>
                <Fade top delay={700} duration={1000}>
                  <a className="icon-git" href="http://github.com/leonel-ai/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} size="6x" /></a>
                </Fade>
                <Fade top delay={800} duration={1000}>
                  <a className="icon-whatsapp" href="https://imgur.com/a/93HNi8l" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'whatsapp']} size="6x" /></a>
                </Fade>
            </div>
          </ul>
        </div>
      </nav>

        <header className="row page-header">
          <div className="col-xs-2 col-md-12 col-lg-1 col-xl-1" id="tab">
            <p>WORK</p>
          </div>
          <div className="loader"></div>

          <div className="col-md-10 col-lg-10 page-headline">
          <Fade bottom>
            <h1 className="page-title">Leonela Guzmán del Cid</h1>
            <h1 className="page-subtitle">Design + Development</h1>
          </Fade>
          </div>
        </header>

        <div className="row profile">
        <Fade bottom delay={400} duration={600}>
          <div className="col-xs-2 col-md-8 col-lg-7 backdrop-profile">
            <img src={water} alt="" className="img-fluid rounded"/>
          </div>
        </Fade>
        <Fade bottom delay={400} duration={800}>
          <div className="col-xs-6 col-sm-10 offset-sm-2 col-md-8 offset-md-3 col-lg-7 offset-lg-4 offset-xl-3 backdrop-image">
            <img src={self} alt="" className="img-fluid rounded self"/>
          </div>
        </Fade>
        </div>

        <div className="row about">

        <Fade bottom>
          <div className="col-md-9 col-lg-8 about-text">
            <p className="about-me">A full-stack software developer and occasional writer with design, PR, and creative advertising roots.
            I turn ambitious ideas into user-friendly solutions with a keen aesthetic eye. As a writer, my primary beats are film, television,
            politics, culture and wherever any of them intersect.</p>
            <a href="mailto:leonela.dev@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Say hello
            </button></a>
          </div>
        </Fade>
        </div>

        <div className="row services" style={{backgroundColor: this.state.color, transition: this.state.transition}}>

         <div className="col-md-8 col-lg-8 inner">
         <Fade bottom>
            <h1>The Process</h1>
            <p className="service-details">1) Forget templates or dressed-up Wix sites. I research, design, and develop
            solutions tailored to your needs.</p>

            <p className="service-details">2) Forget middlemen and bloated agency prices. You'll be talking directly to the strategist, the creator, and the partner
            invested in the success of your business. Expect transparent, honest and professional communication every step of the way.
            </p>
        </Fade>

            <div className="col-md-12">
              <div className="row justify-content-around service-items">
                <Fade bottom>
                  <div className="col-lg-3 col-xl-3">
                    <h3>Design</h3>
                    <p className="service-item">UX + UI<br/>Responsive Web Design<br/>Mobile Apps<br/>Print + Social Media</p>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <h3>Development</h3>
                    <p className="service-item">HTML/CSS, JavaScript, PHP<br/>Client + Server-Side Scripting<br/>Animation + Accessibility<br/>CMS Training</p>
                  </div>
                  <div className="col-lg-4 col-xl-4">
                    <h3>Strategy</h3>
                    <p className="service-item">Art Direction<br/>Branding + Identity<br/>SEO Optimization<br/>Digital Marketing + Copy</p>
                  </div>
                </Fade>
              </div>
            </div>
            <Fade bottom>
            <a href="mailto:leonela.dev@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Request a quote</button></a></Fade>
          </div>

          {/* <div className="col-md-11 col-lg-8 work">
          <Fade bottom>
            <h1>The Work</h1>
            <p className="project-details">I see brands continually challenged by a changing digital landscape,
            struggling to play catch-up instead of looking inward to meet the needs of their clients in a truly
            innovative way, ahead of the latest trend or buzzword. It's my personal mission to help you sidestep
            the noise and connect with people meaningfully.</p>
            <h3>Industry Experience</h3>
            <p className="project-xp">Art / Architecture / E-Commerce / Consumer Goods / Fashion / Film /
            Food &amp; Spirits / Lifestyle / Music / News / Photography / Radio / Travel / Law / Tech</p>
          </Fade>
          </div> */}

            <div className="col-md-12 case1">
              <div className="row">
              <Fade bottom>
                <div className="col-md-12 col-lg-6 case1-img">
                  <img src={caseStudy} alt="" className="img-fluid rounded"/>
                </div>
              </Fade>
                <div className="col-md-12 col-lg-6 case1-col">
                <Fade bottom>
                  <h5 className="client">CLIENT</h5>
                    <p>DR Delicacy</p><br/>
                  </Fade>
                  <Fade bottom>
                  <h5 className="client">STRATEGY</h5>
                    <p>Building a new brand and minimalist landing page designed to convert B2B and Wholesale. Inspired by
                      the truffle hunting expeditions in France and the owner's expertise and personal history with the product,
                      I crafted a simple story that emphasized the natural products, in a playful, modern take of traditional field guides.</p><br/>
                  </Fade>
                  <Fade bottom>
                  <h5 className="client">TASKS</h5>
                    <p>Art Direction<br/>Product Shoot<br/>Branding and Identity<br/>Responsive Web / UI Design</p>
                  </Fade>
                </div>
              </div>
            </div>

            <div className="col-md-12 case2">
              <div className="row">
                <div className="col-md-12 col-lg-7 case2-col order-12 order-lg-first">
                <Fade bottom>
                  <h5 className="client">CLIENT</h5>
                  <a href="http://tellusyours.com" target="_blank" rel="noopener noreferrer">
                    <p>Markowitz Law</p><br/></a>
                  <h5 className="client">STRATEGY</h5>
                    <p>Constructing a new, responsive website paired with a full rebrand and billboard campaign launch. Inspired by the no-nonsense
                      nature of the Markowitz team and the familiar design elements of a traffic-ridden city, I introduced a site
                      tailored to help solve the user's legal needs in a professional, efficient and interactive way.<br/>
                      <br/>Going beyond design, I helped integrate their website to the
                      <a href="https://www.clio.com/" target="_blank" rel="noopener noreferrer"> Clio</a> platform, customized
                      the software to their administrative needs, and personally trained their team members on the ins and outs.</p><br/>
                    </Fade>
                    <Fade bottom>
                  <h5 className="client">TASKS</h5>
                    <p>Art Direction<br/>Cloud-Based Software Integration<br/>Branding and Identity<br/>Responsive Web / UI Design</p>
                  </Fade>
                </div>
                <Fade bottom>
                <div className="col-md-12 col-lg-5 case2-img">
                  <a href="http://tellusyours.com" target="_blank" rel="noopener noreferrer">
                  <img src={caseStudy2} alt="" className="img-fluid rounded"/></a>
                </div>
                </Fade>
              </div>
            </div>

            <div className="col-md-12 case3">
              <div className="row">
              <Fade bottom>
                <div className="col-md-12 col-lg-6 case3-img">
                <a href="https://getatrucke.com/" target="_blank" rel="noopener noreferrer">
                  <img src={caseStudy3} alt="" className="img-fluid rounded"/></a>
                </div>
              </Fade>
                <div className="col-md-12 col-lg-6 case3-col">
                <Fade bottom>
                  <h5 className="client">CLIENT</h5>
                  <a href="https://getatrucke.com/" target="_blank" rel="noopener noreferrer">
                    <p>Trucke</p><br/></a>
                  </Fade>
                  <Fade bottom>
                  <h5 className="client">STRATEGY</h5>
                    <p>Reimagining the moving labor experience for a forward-thinking Austin startup. One of a small distributed team of developers
                      that created a location-based, on-demand service mobile app utilizing an Agile software development life cycle (SDLC) and a combination of React, Express, and MySQL.</p><br/>
                  <h5 className="client">TASKS</h5>
                    <p>Back-End Development<br/>Amazon Web Services, Git, JIRA<br/>Stripe Payment Processing<br/>Node RESTful APIs<br/>CRM Database Design<br/>Testing and Debugging</p>
                  </Fade>
                </div>
              </div>
            </div>
        </div>

        <div className="row footer">

        <div className="col-md-8 col-lg-8 inner">
          <Fade bottom>
            <h1>The Next Step</h1>
            <p className="contact-details">"What are you waiting for?" — Gwen Stefani, 2004.</p>
            <a href="mailto:leonela.dev@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Get started</button></a>
          </Fade>
        </div>
      </div>

      <Footer/>
      </div>
    );
  }
}

export default App;
