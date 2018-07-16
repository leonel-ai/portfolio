import React, { Component } from 'react';

import self from './assets/self.jpg';
import water from './assets/bgwater.webp';
import slab from './assets/slab.jpg';

// case studies
import caseStudy from './assets/case-study-johnsen.gif';
import caseStudy2 from './assets/case-study-marko.gif';
import case1 from './assets/sdw-sample.png';
import case2 from './assets/y-delicacies.gif';
import case3 from './assets/delta2.png';
import case4 from './assets/drd-products.gif';

// social icons
import tw from './assets/twitter.png';
import li from './assets/linkedin.png';
import pin from './assets/pinterest.png';
import tum from './assets/tumblr.png';
import insta from './assets/instagram.png';
import git from './assets/github.png';
import call from './assets/call.png';
import text from './assets/sms.png';


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
            <div className="col-xs-6 col-md-7 offset-md-5">
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
            <p className="about-me">I believe in meaningful work, beyond the paycheck, turning ideas into user-friendly solutions.</p>
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
            <h1>Digital Solutions</h1>
            <p className="service-details">I specialize in transforming your plans and ideas into powerful digital products and an even stronger brand.
            Through a seamless combination of design and development, I create engaging websites, campaigns and experiences.</p>
            <h3>UX/UI Design</h3>
            <p className="service-item">Designing for an optimal experience, both intuitive and user-friendly. I build for the way your users behave
            to ensure an experience that will keep them coming back for more.</p>
            <h3>Web Development</h3>
            <p className="service-item">Through the use of the latest tools and frameworks, I utilize the best
            technology to provide clients with fast, scalable products, built for the future.</p>
            <h3>Brand Strategy</h3>
            <p className="service-item"> I use a focused set of capabilities to develop and grow inspirational, authentic brands.
            First, I realize where we can make the biggest impact. Then I craft the brand positioning, visual identities, and more. Whatever fits your needs.</p>
            <a href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">
            <button type="button" className="btn btn-primary">
            Let's get started</button></a>
          </Fade>
          </div>
        </div>

        <div className="row work">
        <Fade bottom delay={500} duration={1400}>
          <div className="col-xs-2 col-md-7 backdrop-work">
            <img src={slab} alt="" className="img-fluid rounded"/>
          </div>
          <div className="col-xs-6 col-md-7 offset-md-4 backdrop-cases">
            <img src={caseStudy} alt="" className="img-fluid rounded cases"/>
          </div>
        </Fade>
        </div>

        <div className="row projects">
        <Fade bottom delay={200}>
          <div className="col-xs-2 col-md-2 offset-md-1" id="tab">
            Projects
          </div>
        </Fade>

          <div className="col-md-6">
          <Fade bottom delay={500}>
            <h1>Work and play</h1>
            <p className="project-details">Lorem ipsum dolor sit amet, pri an scripta prompta. At qui noster accommodare definitionem, has ut agam putent nostrum.
            Eum fugit quando id, ut mel gloriatur reformidans.</p>
          </Fade>
          </div>
        </div>

        <div className="row work2">
            <div className="col-md-6 offset-md-5">
              <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel" data-pause="hover" data-interval="7000">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={case4} alt="Third slide"/>
                      </div>
                    <div className="carousel-item">
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
            <h1>Changing the game</h1>
            <p className="contact-details">Lorem ipsum dolor sit amet, pri an scripta prompta. At qui noster accommodare definitionem, has ut agam putent nostrum.
            Eum fugit quando id, ut mel gloriatur reformidans.</p>
          </Fade>
        </div>
      </div>

      <Footer/>
      </div>
    );
  }
}

export default App;
