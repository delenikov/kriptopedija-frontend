import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {

    let username = localStorage.getItem("username");
    let role = localStorage.getItem("role");

    let authenticate;
    if (localStorage.getItem("JWT")) {
        authenticate =
            (
                <div>
                    <a className="btn btn-outline-primary m-1" href="/login"
                       onClick={() => localStorage.removeItem("JWT")}>Здраво, {localStorage.getItem("username")}</a>
                    <a className="btn btn-outline-primary m-1" href="/login"
                       onClick={() => localStorage.removeItem("JWT")}>Одлогирај се</a>
                </div>
            )
        ;
    } else {
        authenticate = (<Link className="btn btn-outline-primary m-1" to={"/login"}>Логирај се</Link>);
    }

    return (
        <header>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                  crossOrigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                    crossOrigin="anonymous"/>

            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/">Криптопедија</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-primary" href="/courses">Курсеви</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to={"/crypto"}>Криптовалути</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary" to={"/news"}>Новости</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {authenticate}
                            <Link className="btn btn-primary m-1" to={"/register"}>Регистрирај се</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;