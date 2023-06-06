import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container text-white text-center py-5 justify-content-center">
        <p className="lead">
          JOIN US TO KNOW WHERE TO DONATE AND FROM WHERE TO GET HELP
        </p>
        <div className="row justify-content-center">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4">
            <form className="form-inline">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Join Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
