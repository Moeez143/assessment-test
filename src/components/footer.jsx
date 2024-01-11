import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

function Footer() {
  return (
    <div>
      <div className="footer bg-light ">
        <div className="row fs-5 py-5 px-5">
          <div className="col-md-4 text-center">
            <i class="fas fa-map-marker-alt"></i>
            <h5>Get In Touch</h5>
            <p className="">10 Oxford Street, London, UK, E1 1EC</p>
            <p>
              <a href="mailto:contact@youremail.com">
                the-office@leadpage.co.uk
              </a>
            </p>
            <p>+44 987 654 321</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="fas fa-map-marker-alt"></i>
            <h5>Social Media</h5>
            <p>See bellow where you can find us.</p>
            <ul className="footer_social d-flex flex-row">
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-skype"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-dribble"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <i class="fas fa-map-marker-alt"></i>
            <h5>Useful Links</h5>
            <div className="pt-3 ">
              <p className="lh-sm">Our Cookies Policy</p>
              <p className="lh-sm">Meet The Team Behind LeadPagek</p>
              <p className="lh-sm">Terms and Conditions1</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="text-center">
          <p className="py-4">
            Copyright © 2020{" "}
            <span class="text-primary fw-bolder">LeadPage</span>. Designed by{" "}
            <a
              href="https://themeforest.net/user/epic-themes/portfolio?ref=Epic-Themes"
              target="_blank"
            >
              Epic-Themes
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
