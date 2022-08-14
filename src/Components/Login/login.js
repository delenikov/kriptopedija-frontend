import React from 'react'
import {useNavigate} from 'react-router-dom'
import AppService from "../../Repository/AppService";

const Login = (props) => {

    function parseJwt(token) {
        if (!token) {
            return;
        }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        AppService.login(formData.username, formData.password).then(resp => {
            localStorage.setItem("JWT", resp.data);
            props.onLogin()
            var array = localStorage.getItem("JWT");
            array = array.toString();
            array = array.split(" ");
            var jwt = array[1];
            var object = parseJwt(jwt);
            localStorage.setItem("role", object.role);
            localStorage.setItem("username", object.username);
            navigate("/home");
        })
    }

    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-md-5">
                <h1 className="text-center">Логирање</h1>
                <form onSubmit={onFormSubmit}>
                    <h6 className="text-center fw-bold">Најавете се</h6>
                    <div className="form-group">
                        <label htmlFor="username">Електронска адреса</label>
                        <input type="text"
                               className="form-control"
                               name="username"
                               required
                               placeholder="Внесете ја вашата електронска адреса"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="price">Лозинка</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               placeholder="Внесете лозинка"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <button id="submit" type="submit" className="btn btn-primary w-100">Понатаму</button>
                        </div>
                    </div>
                    <hr/>
                    <h6 className="text-center">Немате корисничка сметка? Кликнете подоле за регистрација: </h6>
                    <div className="row">
                        <div className="col-12">
                            <a className="btn btn-success w-100" href="/register"> Регистрирај се! </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;