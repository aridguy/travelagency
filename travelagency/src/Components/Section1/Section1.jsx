import React from "react";
import '../Section1/Section1.css';
import Logo from '../../assets/Logo.svg';


const Section1 = () => {
    return (

        <>

            <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-red nav-sec">
                    <div className="container-fluid">
                    
                        <a className="navbar-brand logo-wrap" href="javascript:void(0)"> <img src={Logo} /> Artic Travels</a>
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
            </header>





            {/* <main>
                <div classNameNameNameName="land-page-wrapper container-fluid ">
                    <div classNameNameNameName="container-fluid">
                        <div classNameNameNameName="row nav-setion ">

                        </div>
                    </div>
                </div>
            </main> */}
        </>


    );
}

export default Section1;