import React from "react";
import {Link} from "react-router-dom";


class AdminCourses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 4
        }
    }

    render() {
        let username = localStorage.getItem("username");
        let role = localStorage.getItem("role");

        let adminAddCourse, adminDeleteColumn;
        if (role === "ROLE_ADMIN" && role != null) {
            adminAddCourse = (<div className="col mt-5 mb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <Link className={"btn btn-info"} to={"/courses/add"}>Add new course</Link>
                    </div>
                </div>
            </div>);
            adminDeleteColumn = (<th scope={"col"}>Delete</th>);
        }


        return (
            <div className={"container mb-4"}>
                {adminAddCourse}
                <div className={"row"}>
                    <table className={"table table-striped text-center"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Course Name</th>
                            <th scope={"col"}>Video link</th>
                            {adminDeleteColumn}
                        </tr>
                        </thead>
                        <tbody className="align-middle">

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AdminCourses;