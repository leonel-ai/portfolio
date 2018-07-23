import React  from 'react';
// social icons
import tw from '../assets/icons/twitter.png';
import li from '../assets/icons/linkedin.png';
import pin from '../assets/icons/pinterest.png';
import insta from '../assets/icons/instagram.png';
import git from '../assets/icons/github.png';

import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
<footer class="page-footer pt-4">
<Fade bottom delay={800}>
    <div class="container text-center text-md-left">
      <div class="row text-center text-md-left mt-3 pb-3">

        <hr class="w-100 clearfix d-md-none mt-0 mb-1"/>

        <div class="col-md-5 col-lg-4 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase mb-2">Leonela Guzm&#225;n</h5>
            <p>Full Stack Developer<br/>Polyglot, Futbolista, Part-Time DJ</p>
        </div>

        <hr class="w-100 clearfix d-md-none mt-0 mb-1"/>

        <div class="col-md-3 col-lg-2 col-xl-4 mx-auto mt-3">
          <h6 class="text-uppercase mb-2">Contact</h6>
          <p>
            <i class="fa fa-home "></i><a href="https://goo.gl/maps/Fry8q3gDbC62" target="_blank" rel="noopener noreferrer">HTX 77004</a><br/>
            <i class="fa fa-envelope"></i><a href="mailto:leonela.dev@gmail.com?subject=Let's talk.&body=Psst! Be sure to include the essentials: Name, Contact, Company and of course, Website!"><span className="cta"> Email</span></a> ||
            <i class="fa fa-phone"></i><a href="sms:3372400858"> <span className="cta">Text</span></a></p>
        </div>

          <hr class="w-100 clearfix d-md-none mt-0 mb-1"/>

        <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
          <h6 class="text-uppercase mb-2">Social</h6>

          <div className="mobile-social">
                <Fade top delay={500} duration={1000}>
              <a href="http://linkedin.com/in/leonelaguzman/" target="_blank" rel="noopener noreferrer"><span>
                <img src={li} alt=""/></span></a>
                </Fade>
                <Fade top delay={560} duration={1000}>
                <a href="http://github.com/leonel-ai/" target="_blank" rel="noopener noreferrer"><span>
                <img src={git} alt=""/></span></a>
                </Fade>
                <Fade top delay={680} duration={1000}>
              <a href="https://www.pinterest.com/leonel_ai/ux-ui/" target="_blank" rel="noopener noreferrer"><span>
                <img src={pin} alt=""/></span></a>
                </Fade>
                <Fade top delay={620} duration={1000}>
              <a href="http://twitter.com/leonel_ai/" target="_blank" rel="noopener noreferrer"><span>
                <img src={tw} alt=""/></span></a>
                </Fade>
                <Fade top delay={800} duration={1000}>
              <a href="http://instagram.com/leonel.ai/" target="_blank" rel="noopener noreferrer"><span>
                <img src={insta} alt=""/></span></a>
                </Fade>
            </div>
        </div>


      </div>
    </div>
    </Fade>

  </footer>
  )
};

export default Footer;
