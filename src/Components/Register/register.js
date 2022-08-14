import React from 'react'
import {useNavigate} from 'react-router-dom'
import AppService from "../../Repository/AppService";

const Register = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        username: "",
        password: "",
        repeatPassword: "",
        name: "/",
        surname: "/",
        role: "ROLE_USER",
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const username = formData.username;
        const password = formData.password;
        const repeatPassword = formData.repeatPassword;
        const name = formData.name;
        const surname = formData.surname;
        const role = formData.role;
        AppService.register(username, password, repeatPassword, name, surname, role);
        navigate("/login");
    }

    return (
        <div className="row mt-5 justify-content-center">
            <div className="col-md-5">
                <h4 className="text-center">Регистрација</h4>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Корисничко име</label>
                        <input type="text"
                               className="form-control"
                               name="username"
                               required
                               placeholder="Внесете корисничко име"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="password">Лозинка</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               placeholder="Внесете лозинка"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="repeatPassword">Повторно лозинка</label>
                        <input type="password"
                               className="form-control"
                               name="repeatPassword"
                               placeholder="Внесете повторно лозинка"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="name">Име</label>
                        <input type="text"
                               className="form-control"
                               name="name"
                               required
                               placeholder="Внесете го вашето име"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="surname">Презиме</label>
                        <input type="text"
                               className="form-control"
                               name="surname"
                               required
                               placeholder="Внесете го вашето презиме"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label>Улога</label>
                        <select name="roles" className="form-control" onChange={handleChange}>
                            {props.roles.map((term) =>
                                <option key={term} value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <button id="submit" type="submit" className="btn btn-primary w-100">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;