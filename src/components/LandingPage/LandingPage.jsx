import React from 'react';
import { Link } from 'react-router-dom';
import UnauthenticatedHeader from '../common/Header/UnauthenticatedHeader';
import Footer from '../common/Footer/Footer';

const LandingPage = () => {
  const user = localStorage.getItem('user');

  return (
    user ? window.history.back()
      : (
        <>
          <UnauthenticatedHeader />
          <main>
            <section id="landing-page">
              <div id="overlay">
                <div className="container">
                  <div className="overlay-content">
                    <h1>Welcome To Banka</h1>
                    <p>
                  Your number one banking services app. Sign Up with us today to enjoy
                  the numerous benefits we offer
                    </p>
                    <Link to="/signup"><button type="button" className="signup-btn">Sign Up</button></Link>
                    <button type="button" className="login-btn">Login</button>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </>
      )
  );
};

export default LandingPage;
