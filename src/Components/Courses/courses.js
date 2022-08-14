import React from "react";
import {Link} from "react-router-dom";

const Courses = (props) => {

    var courses = props.courses;

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
            <div className="row">
                <table className="table table-borderless text-center">
                    <thead className="table-success">
                    <tr>
                        <th>Име на курсот</th>
                        <th>Земете го овој курс</th>
                        <th>Проверка на знаење</th>
                        {adminDeleteColumn}
                    </tr>
                    </thead>
                    <tbody className="align-middle">
                    {courses.map(course => {
                        return (
                            <tr key={course.name}>
                                <td>{course.name}</td>
                                <td><a type="button" className="btn btn-outline-success">✔</a></td>
                                <td>
                                    <Link onClick={() => props.onGetTest(course.id)} to={`/courses/${course.id}/test`}>
                                        <span className="btn btn-outline-success">Тест</span>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default Courses;