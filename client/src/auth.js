// import history from './history';
// import jwt_decode from "jwt-decode";

class Auth {
    constructor() {
        this.authenticated = false
    }

    isAuthenticated() {
        const token = localStorage.getItem('token')
        if (token) {
            this.authenticated = true
        }
        return this.authenticated;
    }
}

export default new Auth();