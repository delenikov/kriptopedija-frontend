import axios from '../Custom-Axios/axios'

const AppService = {

    fetchNews: () => {
        return axios.get("/news");
    },
    fetchCrypto: () => {
        return axios.get("/crypto");
    },
    fetchCourses: () => {
        return axios.get("/courses")
    },
    fetchRoles: () => {
        return axios.get("/roles");
    },
    addCourse: (name, videourl) => {
        return axios.post("/admin/courses/add", {
            "name": name,
            "videourl": videourl
        });
    },
    addNews: (name, description, text) => {
        return axios.post("/admin/news/add", {
            "name": name,
            "description" : description,
            "text": text
        });
    },
    addCrypto: (name, code, price, circulatingSupply, website, minable, algorithm) => {
        return axios.post("/admin/news/add", {
            "name": name,
            "code": code,
            "price": price,
            "circulatingSupply": circulatingSupply,
            "website": website,
            "minable": minable,
            "algorithm": algorithm
        });
    },
    editCrypto: (name, code, price, circulatingSupply, website, minable, algorithm) => {
        return axios.put(`/admin/crypto/${name}/edit`, {
            "name": name,
            "code": code,
            "price": price,
            "circulatingSupply": circulatingSupply,
            "website": website,
            "minable": minable,
            "algorithm": algorithm
        });
    },
    deleteCourse: (id) => {
        return axios.delete(`/admin/course/${id}/delete/`);
    },
    deleteNews: (id) => {
        return axios.delete(`/admin/news/${id}/delete/`);
    },
    deleteCrypto: (name) => {
        return axios.delete(`/admin/crypto/${name}/delete/`);
    },
    getCourse: (id) => {
        return axios.get(`/course/${id}`);
    },
    getTestForCourse: (id) => {
        return axios.get(`/courses/${id}/test`);
    },
    getNews: (id) => {
        return axios.get(`/news/${id}`);
    },
    getCrypto: (name) => {
        return axios.get(`/crypto/${name}`);
    },
    login: (username, password) => {
        return axios.post("/api/login", {
            "username": username,
            "password": password
        });
    },
    register: (username, password, repeatPassword, name, surname, role) => {
        return axios.post("/register", {
            "username": username,
            "password": password,
            "repeatPassword": repeatPassword,
            "name": name,
            "surname": surname,
            "role": role
        });
    }
}

export default AppService;