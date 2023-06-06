import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../contextAPI/ContextProvider";

const Home = () => {
  const { state } = useAppContext();
  return (
    <>
      <div>
        <section
          id="showcase"
          className="d-flex justify-content-center align-items-center"
        >
          <div id="overlay" />
          <div id="header" className="container text-white text-center">
            <h1 className="display-1">SEVA KARO</h1>
            <p className="lead d-none d-md-block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              eligendi.
            </p>
            {state?.user?.role == "Admin" && (
              <div className="container">
                <Link to="/admin" id="book" className="btn btn-primary px-5">
                  DASHBOARD
                </Link>
              </div>
            )}
          </div>
        </section>
        <section>
          <div className="container text-center mt-5">
            <h2>Something need to be here</h2>
            <div className="row">
              <div className="col-md-4 p-3">
                <img
                  src="stylesheets/images/icons/books.png"
                  alt="image"
                  className="img-fluid d-none d-md-inline"
                />
                <h3>Books</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  optio cumque illum officia, quae possimus?
                </p>
              </div>
              <div className="col-md-4 p-3">
                <img
                  src="/stylesheets/images/icons/sweater.png"
                  alt="image"
                  className="img-fluid d-none d-md-inline"
                />
                <h3>Clothes</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  optio cumque illum officia, quae possimus?
                </p>
              </div>
              <div className="col-md-4 p-3">
                <img
                  src="/stylesheets/images/icons/stationary.png"
                  alt="image"
                  className="img-fluid d-none d-md-inline"
                />
                <h3>Stationary</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  optio cumque illum officia, quae possimus?
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container text-center mt-2 p-3">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <div className="row m-2">
              <div className="col-md-6 p-3">
                <div className="card">
                  <img
                    src="/stylesheets/images/1.jpg"
                    alt="image"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title text-primary">HAPPY FACES</h2>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere, ad.
                    </p>
                    <a className="btn btn-lg btn-outline-primary">
                      Go Somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 p-3">
                <div className="card">
                  <img
                    src="/stylesheets/images/2.jpg"
                    alt="image"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h2 className="card-title text-primary">HAPPY FACES</h2>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere, ad.
                    </p>
                    <a className="btn btn-lg btn-outline-primary">
                      Go Somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="quotes">
          <div className="container text-center">
            <h3>HOW OUR PLATFORM HELPS PEOPLE</h3>
            <div className="row">
              <div className="col-md-4 my-2">
                <i className="fas fa-quote-left fa-2x text-primary mb-3" />
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <footer className="blockquote-footer">Mark Twain</footer>
                </blockquote>
              </div>
              <div className="col-md-4 my-2">
                <i className="fas fa-quote-left fa-2x text-primary mb-3" />
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <footer className="blockquote-footer">Mark Twain</footer>
                </blockquote>
              </div>
              <div className="col-md-4 my-2">
                <i className="fas fa-quote-left fa-2x text-primary mb-3" />
                <blockquote className="blockquote">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <footer className="blockquote-footer">Mark Twain</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-7 mb-3">
                <div
                  id="mainCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/stylesheets/images/carousel/1.jpg"
                        alt="image"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/stylesheets/images/carousel/2.jpg"
                        alt="image"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/stylesheets/images/carousel/3.jpg"
                        alt="image"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/stylesheets/images/carousel/4.jpg"
                        alt="image"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/stylesheets/images/carousel/5.jpg"
                        alt="image"
                        className="d-block w-100"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    data-slide="prev"
                    role="button"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    data-slide="next"
                    role="button"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <h3>SOME HEADING</h3>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime recusandae, quos, obcaecati exercitationem at
                  perferendis adipisci quibusdam distinctio debitis, quo ab
                  consectetur laudantium aut repellendus. Perferendis delectus
                  ducimus consequatur illo?
                </p>
                <a>
                  See for yourself <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container text-center mt-5">
            <h3>WHAT OTHERS ARE SAYING</h3>
            <h5 className="text-primary">#DONATE/GET</h5>
            <div className="row mt-4">
              <div className="col-6 col-lg-3 mb-4">
                <img
                  src="/stylesheets/images/gal1.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 col-lg-3 mb-4">
                <img
                  src="/stylesheets/images/gal2.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 col-lg-3 mb-4">
                <img
                  src="/stylesheets/images/gal3.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 col-lg-3 mb-4">
                <img
                  src="/stylesheets/images/gal4.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 col-lg-3 mb-4">
                <img
                  src="/stylesheets/images/gal5.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 col-lg-3 mb-4">
                <img
                  src="/stylesheets/images/gal6.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 col-lg-3 mb-4">
                <img
                  src="/stylesheets/images/gal7.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <div className="col-6 col-lg-3 mb-4">
                <img
                  src="/stylesheets/images/gal8.jpg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container text-center mt-4">
            <i className="fas fa-quote-left fa-2x text-primary mb-3" />
            <blockquote className="blockquote">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem sed neque eveniet nisi fuga nesciunt nostrum
                possimus quis animi. Nulla ut magnam quidem, dolores, corporis
                eveniet dolore possimus alias hic aliquid cum quae mollitia,
                voluptas nostrum quia tenetur voluptates quos porro laudantium
                earum! Recusandae, nihil nisi ut voluptate eum aperiam.
              </p>
              <footer className="blockquote-footer">Mark Twain</footer>
            </blockquote>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
