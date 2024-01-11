import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

function Hero() {
  return (
    <div className="main">
      <div className="row">
        <div className="col-md-6 px-0">
          <img
            src="https://demo.epic-webdesign.com/tf-leadpage/v3/images/bg0.jpg"
            className="img-with"
            alt="Happy"
          />
        </div>
        <div className="col-md-6 px-0 bg-primary px-5">
          <h1 className="text-white mt-5">Need An Electrician?</h1>
          <p className="text-white lead input-width mb-4">
            Professional service for all your home electrical needs. Please fill
            the form bellow for a free, no obligation quote.
          </p>
          <form action="#" className="input-width">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control py-3 bg-transparent border border-white text-white custom-input"
                placeholder="Your Name*"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control py-3 bg-transparent border border-white text-white custom-input"
                placeholder="Email Adress*"
              />
            </div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control py-3 bg-transparent border border-white text-white custom-input"
                placeholder="Phone Number*"
              />
            </div>
            <div class="input-group">
              <textarea
                class="form-control py-3 bg-transparent border border-white text-white custom-input"
                rows="2"
                cols="20"
                placeholder="Your Message...."
              ></textarea>
            </div>
            <div class="mt-3 d-grid">
              <button
                type="button"
                class="btn btn-warning btn-lg py-3 rounded-1"
              >
                Request Free Quote Now
              </button>
            </div>
          </form>
          <p class="text-white mt-1">
            Competitive On Price &#8226; TrustMark Accredited
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
