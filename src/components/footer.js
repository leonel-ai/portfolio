import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
<footer class="page-footer font-small mdb-color pt-4">
<Fade bottom delay={800} duration={1500}>
    <div class="container text-center text-md-left">
      <div class="row text-center text-md-left mt-3 pb-3">
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h4 class="text-uppercase mb-4 font-weight-bold">Leonela Guzm&#225;n</h4>
        </div>

        <hr class="w-100 clearfix d-md-none"/>

        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Services</h6>
          <p>
            UX/UI Design
          </p>
          <p>
            Web + Software Development
          </p>
          <p>
            Brand Audit, Strategy + Consulting
          </p>
          <p>
            Copy + Translation
          </p>
        </div>

        <hr class="w-100 clearfix d-md-none"/>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Social</h6>
          <p>
            <a href="https://www.linkedin.com/in/leonelaguzman" target="_blank">Linkedin</a>
          </p>
          <p>
            <a href="https://github.com/leonel-ai" target="_blank">Github</a>
          </p>
          <p>
            <a href="https://medium.com/@leonelaguzman/has-recommended" target="_blank">Medium</a>
          </p>
          <p>
            <a href="https://twitter.com/leonel_ai" target="_blank">Twitter</a>
          </p>
        </div>

        <hr class="w-100 clearfix d-md-none"/>

        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p>
            <i class="fa fa-home mr-3"></i><a href="https://goo.gl/maps/Fry8q3gDbC62" target="_blank">HTX 77004</a>
            </p>
          <p>
            <i class="fa fa-envelope mr-3"></i><a href="mailto:leonelaguzman1@gmail.com?subject=Let's talk.">Let's Email</a></p>
          <p>
            <i class="fa fa-phone mr-3"></i><a href="tel:3372400858">Text Me</a></p>
        </div>

      </div>
    </div>
    </Fade>

  </footer>
  )
};

export default Footer;
