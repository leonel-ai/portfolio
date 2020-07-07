import React  from 'react';
import Fade from 'react-reveal/Fade';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faWhatsapp, faBehance} from '@fortawesome/free-brands-svg-icons';

library.add(
  faEnvelope,
  faLinkedin,
  faGithub,
  faWhatsapp,
  faBehance
);

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

        <div className="col-md-3 col-lg-4 col-xl-8 mx-auto mt-3">
        </div>

          {/* <hr class="w-100 clearfix d-md-none mt-0 mb-1"/> */}

        <div className="col-md-6 col-lg-5 col-xl-4 mt-3">
          <h6 className="text-uppercase mb-2">Social</h6>

          <div className="mobile-social">
                <Fade top delay={500} duration={1000}>
                  <a className="icon-linkedin" href="http://linkedin.com/in/leonelaguzman/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" /></a>
                </Fade>
                <Fade top delay={540} duration={1000}>
                  <a className="icon-email"href="mailto:leonela.dev@gmail.com?subject=Let's talk." target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fas', 'envelope']} size="3x" /></a>
                </Fade>
                <Fade top delay={560} duration={1000}>
                  <a className="icon-git" href="http://github.com/leonel-ai/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} size="3x" /></a>
                </Fade>
                <Fade top delay={600} duration={1000}>
                  <a className="icon-whatsapp" href="https://imgur.com/a/93HNi8l" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={['fab', 'whatsapp']} size="3x" /></a>
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
