import React  from 'react';
// social icons
import tw from '../assets/icons/twitter.png';
import li from '../assets/icons/linkedin.png';
import behance from '../assets/icons/behance.png';
import insta from '../assets/icons/instagram.png';
import git from '../assets/icons/github.png';

import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
<footer className="page-footer pt-4">
<Fade bottom>
    <div className="container text-center text-md-left">
      <div className="row text-center text-md-left mt-3 pb-3">

        {/* <hr class="w-100 clearfix d-md-none mt-0 mb-1"/> */}

        {/* <div class="col-md-5 col-lg-4 col-xl-3 mx-auto mt-3">
          <h5 class="text-uppercase mb-2">Leonela Guzm&#225;n</h5>
            <p>Design + Development</p>
        </div> */}

        {/* <hr class="w-100 clearfix d-md-none mt-0 mb-1"/> */}

        <div className="col-md-3 col-lg-4 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-2">Contact</h6>
          <p>
            <i className="fa fa-home "></i>Based in Houston, TX 77006<br/>
            <i className="fa fa-envelope"></i>Reach me by <a href="mailto:leonela.dev@gmail.com?subject=Let's talk.&body=Psst! Be sure to include the essentials: Name, Contact, Company and Website (if it exists)!"><span className="cta"> Email</span></a> or
            <i className="fa fa-phone"></i><a href="sms:3372400858"> <span className="cta">Text</span></a></p>
        </div>

          {/* <hr class="w-100 clearfix d-md-none mt-0 mb-1"/> */}

        <div className="col-md-6 col-lg-5 col-xl-6 mt-3">
          <h6 className="text-uppercase mb-2">Social</h6>

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
                <a href="https://www.behance.net/leonelaguzman" target="_blank" rel="noopener noreferrer"><span>
                <img src={behance} alt=""/></span></a>
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
