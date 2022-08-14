import * as request from "./requester.js"

const baseUrl = 'http://localhost:3030';

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');
    if (serializedUser) {
        let user = JSON.parse(serializedUser);

        return user;
    }
}

const saveUser = (user) => {
    if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export const getToken = () => {
    return getUser()?.accessToken;
}

export const login = (email, password) =>
    request.post(`${baseUrl}/users/login`, { email, password })
        .then(user => {
            saveUser(user);

            return user;
        })

export const register = (email, password) =>
    request.post(`${baseUrl}/users/register`, { email, password })
        .then(user => {
            saveUser(user);

            return user;
        });

export const logout = () => {
    fetch(`${baseUrl}/users/logout`, { headers: { 'X-Authorization': getToken() } })
        .then(() => {
            localStorage.removeItem('user');
        })
}