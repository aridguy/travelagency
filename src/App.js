
import './App.css';
import './Components/Section1/Section1.css';
import Logo from '../src/assets/Logo.svg';
import Location from './assets/icons/Location.svg';
import Pers from './assets/icons/User.svg';
import chin from './assets/icons/Checkin.svg';
import chout from './assets/icons/Checkout.svg';
import Plane from './assets/icons/flight.svg';

import Nike from './assets/icons/Nike.png';
import Gpay from './assets/icons/apple-pay.png';
import Start from './assets/icons/silverstar.png';
import Intrax from './assets/icons/Intrax.png';
import Master from './assets/icons/mastercard.png';

import Arrow from './assets/icons/Arrowdown.svg';

import Pics1 from './assets/Section1/Pics1.png';
import Pics2 from './assets/Section1/Pics2.png';
import Logofoot from './assets/Section1/Logofooter.svg';

// import Bkga from './assets/Section1/bg-a.png';

function App() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html"><img  alt="" src={Logo} /> <i>&nbsp; </i> Arctic Travels</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto nav-linkss">
              <li className="nav-item"><a href="index.html" className="nav-link">About</a></li>
              <li className="nav-item"><a href="about.html" className="nav-link">Support</a></li>
              <li className="nav-item"><a href="contact.html" className="nav-link">Language</a></li>
            </ul>
            <button className='btn btn-primary signin-btn'>Sign in</button>
          </div>
        </div>
      </nav>

      <div className="hero-wrap heroimg" data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
            <div className='col-md-8 animated fadeInRightBig'>
              <h2 className='head-texts'>Plan The Perfect Winter Trip</h2>
              <p className='sub-txt text-white'>Easily plan your ideal ski trip from home with the <br /> help of professionals</p>
            </div>
            <div className='col-md-4'>

            </div>
            <button className='book-btn'>Book Here</button>
          </div>

        </div>
      </div>

      <main className='mainwrap-mid overlay container'>
        <section className='overlay container midsec'>
          <div className='row animated fadeInLeftBig'>
            <div className='col-md-2'>
              <div className='loca'>
                <p> <img  alt="" src={Location} />&nbsp; Location</p>
                <select>
                  <option className='selctopttag'>Lagos State</option>
                  <option className='selctopt'>United States</option>
                  <option>Ogun State</option>
                </select>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='pers'>
                <p> <img  alt="" src={Pers} />&nbsp; Person</p>
                <select>
                  <option className='selctopttag'>2 Person</option>

                </select>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='chin'>
                <p> <img  alt="" src={chin} />&nbsp; Checkin</p>
                <select>
                  <option className='selctopttag'>Lagos State</option>

                </select>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='chout'>
                <p> <img  alt="" src={chout} /> <span>&nbsp;</span>Checkout</p>
                <select>
                  <option className='selctopttag'>12 Jnauary 2022</option>

                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <button className='flight-btn'>Book Trip &nbsp; <img  alt="" data-mdb-animation-start="onHover" className='planee ' src={Plane} /></button>
            </div>
          </div>
        </section>
      </main>
      <section>
        <div className='container-fluid'>
          <div className='row sect-wrap animated fadeInDown'>
            <div className='col-md-1'></div>
            <div className='col-md-2 col-sm-12'><img  alt="" src={Nike} /></div>
            <div className='col-md-2'><img  alt="" src={Gpay} /></div>
            <div className='col-md-2'><img  alt="" src={Start} /></div>
            <div className='col-md-2'><img  alt="" src={Intrax} /></div>
            <div className='col-md-2'><img  alt="" src={Master} /></div>
            <div className='col-md-1'></div>
          </div>
        </div>

      </section>

      <div className='sect-2under'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
              <div className='thcontents'>
                <h1 className='midtext'>Creating the best <span className='icecold'>ice-cold!</span> experience you would never forget.</h1>
                <p className='midtxt-sub'>Would you explore nature paradise in the world, find the best destination in the world with us.</p>
                <img  alt="" className='thearrow' src={Arrow} />
                <p className='subtext2nd'>View Regions Available</p>
              </div>
            </div>
            <div className='col-md-2'></div>
          </div>
        </div>
      </div>

      {/* SECTION ANOTHER HERE */}

      <div className='sect33'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4 bg-a'>
              {/* <img  alt="" src={Bkga} /> */}
              <h1 className='th1'>Mountain Resort</h1>
            </div>
            <div className='col-md-4 bg-b'>
              <h1 className='th2'>Fuji Mountain</h1>
            </div>
            <div className='col-md-4 bg-c'>
              <h1 className='th3'>Freezing WinterLake</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='sect4th mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='bestResorttxt animated slideInRight'>
                <p className='resorttxt'>The Best Resort To Drink <br /> and Chill</p>
                <p><img  alt="" className='picsline1' src={Pics1} /></p> &nbsp; &nbsp;
                <p><img  alt="" className='picsline1 mt-3' src={Pics1} /></p>
              </div>
            </div>
            <div className='col-sm-6 mt-3 animated slideInLeft'>
              <p><img  alt="" className='picsline2' src={Pics2} /></p>
              <p><img  alt="" className='picsline2' src={Pics2} /></p>
            </div>
          </div>
        </div>
      </div>

      <div className='s2lbkg mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9 animated fadeinRight'>
              <h1 className='s2dlast'>View Passes We’ve Made <br /> Available For You</h1>
              <input className='majorbtnlast' type='submit' value='View Passes' />
            </div>
            <div className='col-md-3'></div>
          </div>
        </div>
      </div>


      {/* footer */}

      <footer className='uncFooter'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6'>
              <p><img  alt="" src={Logofoot} /></p>
              <h1 className='foottitleh'>Artic Travels</h1>
              <p className='footsubctn'>Book your trip in minutes, get full <br />
                control for much longer.</p>
                <div className='footicons'>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                  <span></span>
                </div>
            </div>
            <div className='col-md-2'>
              <div>
                <p className='take'>Company</p>
              </div>
            </div>
            <div className='col-md-2'>
            <div>
                <p className='take'>Contact</p>
              </div>
            </div>
            <div className='col-md-2'>
            <div>
                <p className='take'>More</p>
              </div>
              <ul>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>





    </>
  );
}

export default App;
