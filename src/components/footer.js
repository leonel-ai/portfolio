import React, {Component} from 'react';
// social icons
import tw from '../assets/icons/twitter.png';
import li from '../assets/icons/linkedin.png';
import pin from '../assets/icons/pinterest.png';
import tum from '../assets/icons/tumblr.png';
import insta from '../assets/icons/instagram.png';
import git from '../assets/icons/github.png';

import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
<footer class="page-footer font-small mdb-color pt-4">
<Fade bottom delay={800} duration={1500}>
    <div class="container text-center text-md-left">
      <div class="row text-center text-md-left mt-3 pb-3">
        <div class="col-md-5 col-lg-4 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase mb-4 font-weight-bold">Leonela Guzm&#225;n</h5>
            <p>Full Stack Developer<br/>Polyglot, Futbolista, Part-Time DJ</p>
        </div>

        <hr class="w-100 clearfix d-md-none"/>

        <div class="col-md-3 col-lg-2 col-xl-4 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p>
            <i class="fa fa-home "></i><a href="https://goo.gl/maps/Fry8q3gDbC62" target="_blank">HTX 77004</a><br/>
            <i class="fa fa-envelope"></i><a href="mailto:leonela.dev@gmail.com?subject=Let's talk.&body=Psst! Be sure to include the essentials: Name, Contact, Company and of course, Website!"><span className="cta"> Email</span></a> ||
            <i class="fa fa-phone"></i><a href="sms:3372400858"> <span className="cta">Text</span></a></p>
        </div>

          <hr class="w-100 clearfix d-md-none"/>

        <div class="col-md-4 col-lg-4 col-xl-3 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Social</h6>

          <div className="mobile-social">
                <Fade top delay={500} duration={2000}>
              <a href="http://linkedin.com/in/leonelaguzman/" target="_blank"><span>
                <img src={li} alt=""/></span></a>
                </Fade>
                <Fade top delay={560} duration={2000}>
                <a href="http://github.com/leonel-ai/" target="_blank"><span>
                <img src={git} alt=""/></span></a>
                </Fade>
                <Fade top delay={680} duration={2000}>
              <a href="https://www.pinterest.com/leonel_ai/ux-ui/" target="_blank"><span>
                <img src={pin} alt=""/></span></a>
                </Fade>
                <Fade top delay={620} duration={2000}>
              <a href="http://twitter.com/leonel_ai/" target="_blank"><span>
                <img src={tw} alt=""/></span></a>
                </Fade>
                <Fade top delay={800} duration={2000}>
              <a href="http://instagram.com/leonel.ai/" target="_blank"><span>
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
