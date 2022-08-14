import React from "react";
import YouTube from "react-youtube";

class UserCrypto extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        let username = localStorage.getItem("username");
        let role = localStorage.getItem("role");

        return (
            <div className="row">
                {this.props.cryptos.map(crypto => {
                    return (
                        <div className="col-3">
                            <div className="card mt-5" >
                                    <div className="card-body text-center">
                                        <img className="card-img-top" src={crypto.image} style={{width : "200px", height : "200px"}}/>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{crypto.name}</h5>
                                        <p className="card-text">Код: {crypto.code} </p>
                                        <p className="card-text">Цена: {crypto.price} € </p>
                                        <p className="card-text">Minable: { crypto.minable.toString() }</p>
                                        <p className="card-text">Достапни коини: {crypto.circulatingSupply}</p>
                                        <p className="card-text">Алгоритам: {crypto.algorithm}</p>
                                    </div>
                                    <div className="card-body">
                                        <a href="{crypto.website}" className="btn btn-light w-100">{crypto.website}</a>
                                    </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

}

export default UserCrypto;