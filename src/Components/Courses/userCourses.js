import React from "react";
import {Link} from "react-router-dom";
import YouTube from "react-youtube";


class UserCourses extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let username = localStorage.getItem("username");
        let role = localStorage.getItem("role");
        const opts = {
            height: '200',
            width: '300',
            playerVars: {autoplay: 1,},
        };
        //

        if (role != null){
            var welcomeUser = (<h2 className="text-center m-5">Погледнете нешто друго ... </h2>);
            var userContent = (<div className="row">
                {this.props.courses.map(course => {
                    return (
                        <div className="col-auto">
                            <p className="text-center">{course.name}</p>
                            <YouTube videoId={course.videoURL} opts={opts} onReady={this._onReady} />
                        </div>
                    );
                })}
            </div>);
        }

        return (
            <div className="usercourses">
                    {welcomeUser}
                    {userContent}
            </div>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }

}

export default UserCourses;