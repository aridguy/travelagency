import React from "react";
import '../Section1/Section1.css';
import Logo from '../../assets/Logo.svg';


const Section1 = () => {
    return (

        <>
            <main>
                <nav className="navbar navbar-expand-sm navbar-dark bg-red nav-sec">
                    <div className="container-fluid">

                        <div className="logo-wrap">
                            <a className="navbar-brand logo-wrap" href="javascript:void(0)"> <img src={Logo} /> Artic Travels</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="javascript:void(0)">Language</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-primary" type="button">Sign in</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </main>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="content-head">
                                <h1 className="content-head-text">Plan The Perfect Winter Trip</h1>
                            </div>
                            <div className="sub-ctn">
                            <p className="sub-content">Easily plan your ideal ski trip from home with the <br /> help of professionals</p>
                            </div>
                            <div className="book-here-btn">
                                <button className="btn bookhere-text">Book here</button>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                
                <section className="container backg22">
                    <div className="thcontents">
                        <div className="row">
                        <div className="col-md-2">vcvc</div>
                        <div className="col-md-2">cvc</div>
                        <div className="col-md-2">cvcv</div>
                        <div className="col-md-2">cvcv</div>
                        <div className="col-md-4">dvdfd</div>
                        </div>
                    </div>
                </section>

        </>


    );
}

export default Section1;