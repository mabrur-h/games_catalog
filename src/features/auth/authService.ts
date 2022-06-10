import axios from 'axios'

const API_URL = '/api/users'

const register = async (userData: object) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const login = async (userData: object) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}


const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService