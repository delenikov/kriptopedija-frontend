import React from "react";
import {Link} from "react-router-dom";

const UserNews = (props) => {

    var news = props.news;

    return (
        <div className="news">
            {news.map(single => {
                return (
                    <div className="jumbotron mt-5" key={single.id}>
                        <h1 className="display-4">{single.name}</h1>
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
    )
}

export default UserNews;