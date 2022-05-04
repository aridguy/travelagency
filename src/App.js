
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
import Pics3 from './assets/Section1/Pics3.png';
import Logofoot from './assets/Section1/Logofooter.svg';

// import Bkga from './assets/Section1/bg-a.png';

function App() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html"><img alt="" src={Logo} /> <i>&nbsp; </i> <span className='logo-text-up'>Arctic Travels</span></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto nav-linkss">
              <li className="nav-item nav-link">About</li>
              <li className="nav-item nav-link">Support</li>
              <li className="nav-item nav-link">Language</li>
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
                <p> <img alt="" src={Location} />&nbsp; Location</p>
                <select>
                  <option className='selctopttag'>Lagos State</option>
                  <option className='selctopt'>United States</option>
                  <option>Ogun State</option>
                </select>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='pers'>
                <p> <img alt="" src={Pers} />&nbsp; Person</p>
                <select>
                  <option className='selctopttag'>2 Person</option>

                </select>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='chin'>
                <p> <img alt="" src={chin} />&nbsp; Checkin</p>
                <select>
                  <option className='selctopttag'>Lagos State</option>

                </select>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='chout'>
                <p> <img alt="" src={chout} /> <span>&nbsp;</span>Checkout</p>
                <select>
                  <option className='selctopttag'>12 Jnauary 2022</option>

                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <button className='flight-btn'>Book Trip &nbsp; <img alt="" data-mdb-animation-start="onHover" className='planee ' src={Plane} /></button>
            </div>
          </div>
        </section>
      </main>
      <section>
        <div className='container-fluid'>
          <div className='row sect-wrap animated fadeInDown'>
            <div className='col-md-1'></div>
            <div className='col-md-2 col-sm-12'><img alt="" src={Nike} /></div>
            <div className='col-md-2'><img alt="" src={Gpay} /></div>
            <div className='col-md-2'><img alt="" src={Start} /></div>
            <div className='col-md-2'><img alt="" src={Intrax} /></div>
            <div className='col-md-2'><img alt="" src={Master} /></div>
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
                <img alt="" className='thearrow' src={Arrow} />
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

      {/* section five starts */}
      <div className='sect4th mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='bestResorttxt animated slideInRight'>
                <p className='resorttxt'>The Best Resort To Drink <br /> and Chill</p>
                <p><img alt="" className='picsline1 foto1' src={Pics1} /></p> &nbsp; &nbsp;
                <p><img alt="" className='picsline1 mt-3 foto2' src={Pics3} /></p>
              </div>
            </div>
            <div className='col-sm-6 mt-3 animated slideInLeft'>
              <div className='foto2corect'>
                <p><img alt="" className='picsline2 foto3' src={Pics2} /></p>
              </div>
              <p><img alt="" className='picsline2 foto4' src={Pics2} /></p>
            </div>
          </div>
        </div>
      </div>
      {/* section ends here */}

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
              <p><img alt="" src={Logofoot} /></p>
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
                <p className='take'>COMPANY</p>
                <div className='fone'>
                  <li>About</li>
                  <li>Career</li>
                  <li>Mobile</li>
                </div>
              </div>
            </div>
            <div className='col-md-2'>
              <div>
                <p className='take'>CONTACT</p>
                <div className='ftwo'>
                  <li>FAQ</li>
                  <li>Press</li>
                  <li>Affiliates</li>
                </div>
              </div>
            </div>
            <div className='col-md-2'>
              <div>
                <p className='take'>MORE</p>
              </div>
              <div className='fthree'>
                <li>Airliness</li>
                <li>Airfees</li>
                <li>Lowfare Tips</li>
              </div>
            </div>
          </div>
          <div className='row secondrowfooter'>
            <div className='col-md-6'>
              <p>© 2022 Arctic Travels - All right reserved. <br /> <b>designed by codetechs </b></p>
            </div>
            <div className='col-md-2'>
              <p>Privacy policy</p>
            </div>
            <div className='col-md-2'>
              <p>Terms of Use</p>
            </div>            <div className='col-md-2'>

            </div>

          </div>
        </div>
      </footer>





    </>
  );
}

export default App;
