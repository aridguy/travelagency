
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
function App() {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <a className="navbar-brand" href="index.html"><img src={Logo} /> <i>&nbsp; </i> Arctic Travels</a>
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

  <div className="hero-wrap heroimg"  data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
          <div className='col-md-8'>
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
    <div className='row'>
      <div className='col-md-2'>
        <div className='loca'>
          <p> <img src={Location} />&nbsp; Location</p>
          <select>
            <option className='selctopttag'>Lagos State</option>
            <option className='selctopt'>United States</option>
            <option>Ogun State</option>
          </select>
        </div>
      </div>
      <div className='col-md-2'>
      <div className='pers'>
          <p> <img src={Pers} />&nbsp; Person</p>
          <select>
            <option className='selctopttag'>2 Person</option>
            
          </select>
        </div>
      </div>
      <div className='col-md-2'>
      <div className='chin'>
          <p> <img src={chin} />&nbsp; Checkin</p>
          <select>
            <option className='selctopttag'>Lagos State</option>
          
          </select>
        </div>
      </div>
      <div className='col-md-2'>
      <div className='chout'>
          <p> <img src={chout} /> &nbsp;Checkout</p>
          <select>
            <option className='selctopttag'>12 Jnauary 2022</option>
            
          </select>
        </div>
      </div>
      <div className='col-md-4'>
        <button className='flight-btn'>Book Trip &nbsp; <img className='planee' src={Plane} /></button>
      </div>
    </div>
  </section>
  </main>

  <div className='container-fluid follow2sec'>
    <div className='row'>
      <div className='col-md-2'>a</div>
      <div className='col-md-2'>s</div>
      <div className='col-md-2'>s</div>
      <div className='col-md-2'>s</div>
      <div className='col-md-2'>s</div>
      <div className='col-md-2'>s</div>
    </div>
  </div>






    </>
  );
}

export default App;
