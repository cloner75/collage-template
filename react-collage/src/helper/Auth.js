class Auth {
    /**
     * TODO Set Token In Public Variable
     * @param {JWT} token 
     */
    // constructor (token) {
    //     this.TOKEN = token;
    // }

    /**
     * TODO Check Token Return True Or False
     */
    checkToken() {
        return true;
    }

    /**
     * TODO Set Token In LocalStorage
     */
    setToken(token) {
        this.TOKEN = token
        localStorage.setItem('token', this.TOKEN)
    }

    /**
     * TODO Get Token Of LocalStorage
     */
    getToken() {
        return true
    }

    /**
     * TODO Logout
     */
    logout() {
        return true
    }
}

export default new Auth();
