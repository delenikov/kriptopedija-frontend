import logo from '../../logo.svg';
import './App.css';
import {Component} from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import AppService from "../../Repository/AppService";
import Header from "../Header/header";
import AdminCourses from "../Courses/adminCourses"
import Register from "../Register/register";
import Login from "../Login/login";
import UserCourses from "../Courses/userCourses";
import UserCrypto from "../Cryptos/userCrypto";
import UserNews from "../News/userNews";
import UserNewsTerm from "../News/userNewsTerm";
import HomePage from "../Home/HomePage";
import Courses from "../Courses/courses";
import Test from "../Test/test";
import Footer from "../Footer/footer";
import AboutUs from "../Footer/aboutus";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            news: [],
            crypto: [],
            roles: [],
            selectedCrypto: {},
            selectedCourse: {},
            selectedTest: {},
            selectedNews: {}
        }
    }

    componentDidMount() {
        this.loadNews();
        this.loadCrypto();
        this.loadRoles();
        this.loadCourses();
    }

    loadNews = () => {
        AppService.fetchNews()
            .then((data) => {
                this.setState({
                    news: data.data
                })
            });
    }

    loadCrypto = () => {
        AppService.fetchCrypto()
            .then((data) => {
                this.setState({
                    crypto: data.data
                })
            });
    }

    loadCourses = () => {
        AppService.fetchCourses()
            .then((data) => {
                this.setState({
                    courses: data.data
                })
            });
    }

    loadRoles = () => {
        AppService.fetchRoles()
            .then((data) => {
                this.setState({
                    roles: data.data
                })
            })
    }

    getNews = (id) => {
        AppService.getNews(id)
            .then((data) => {
                this.setState({
                    selectedNews: data.data
                })
            })
    }

    getTestForCourse = (id) => {
        AppService.getTestForCourse(id)
            .then((data) => {
                this.setState({
                    selectedTest: data.data
                })
            });
    }

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <main>
                    <div className="container mt-5">
                        <Routes>
                            {["/", "/home"].map((path) => {
                                return (<Route path={path} key={path}
                                               element={<HomePage news={this.state.news} cryptos={this.state.crypto} onRead={this.getNews} />}/>)
                            })}
                            <Route path="/crypto" element={<UserCrypto cryptos={this.state.crypto}/>}/>

                            <Route path="/news" element={<UserNews news={this.state.news} onRead={this.getNews}/>}/>
                            <Route path="/news/:id" element={<UserNewsTerm selectedNews={this.state.selectedNews}/>}/>

                            <Route path="/user/home" element={<UserCourses courses={this.state.courses}/>}/>

                            <Route path="/courses" element={<Courses courses={this.state.courses} onGetTest={this.getTestForCourse}/>}/>
                            <Route path="/courses/:id/test" element={<Test test={this.state.selectedTest}/>}/>

                            <Route path="/admin/courses" element={<AdminCourses courses={this.state.courses}/>}/>
                            <Route path="/register" element={<Register roles={this.state.roles}/>}/>
                            <Route path="/login" element={<Login onLogin={this.fetchData}/>}/>
                            <Route path="/aboutus" element={<AboutUs/>}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;