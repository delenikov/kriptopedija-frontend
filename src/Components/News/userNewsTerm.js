import React from 'react';
import {Link} from 'react-router-dom';

const UserNewsTerm = (props) => {

    return (
        <div className="newsTerm">
            <div className="row m-5">
                <h5 className="text-center">{props.selectedNews.name}</h5>
            </div>
            <div className="row m-5">
                <p>{props.selectedNews.text}</p>
            </div>
        </div>
    );

}

export default UserNewsTerm;