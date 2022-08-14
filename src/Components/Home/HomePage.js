import React from "react";
import {Link} from "react-router-dom";

const HomePage = (props) => {

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    var news = shuffle(props.news).slice(0, 2);
    var cryptos = props.cryptos;

    return (
        <div className="row mt-5">
            <div className="col-8">
                {news.map(single => {
                    return (
                        <div className="jumbotron mt-5" key={single.id}>
                            <h1 className="display-4 fw-bold">{single.name}</h1>
                            <p className="lead">{single.date}</p>
                            <p>{single.description} ...</p>
                            <p className="lead">
                                <Link onClick={() => props.onRead(single.id)} to={`/news/${single.id}`}>
                                    <span className="btn btn-outline-primary btn-lg"> Повеќе ... </span>
                                </Link>
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className="col-4">
                <h5 className="fw-bold">Моментална цена на криптовалутите</h5>
                <table className="table table-borderless mt-5">
                    <tbody>
                    {cryptos.map(crypto => {
                            return (
                                <tr className="align-middle" key={crypto.code}>
                                    <td className="w-25"><img src={crypto.image} className="img-thumbnail border-0"/></td>
                                    <td><h6 className="fw-bold"> {crypto.name} </h6> <p>{crypto.code}</p></td>
                                    <td>MKD {Math.ceil(crypto.price * 62)}</td>
                                </tr>
                            );
                        }
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default HomePage
