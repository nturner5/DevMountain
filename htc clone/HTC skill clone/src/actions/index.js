import axios from 'axios'

export const GET_ALL_SMARTPHONES = 'GET_ALL_SMARTPHONES';
export const GET_ALL_ACCESSORIES = 'GET_ALL_ACCESSORIES';
export const GET_SMARTPHONES = 'GET_SMARTPHONES';
export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART = 'GET_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const REGISTER = 'REGISTER';
export const LOGIN = 'LOGIN';
const ROOT_URL = 'http://localhost:3000';

export function getAllSmartphones() {
    const request = axios.get(`${ROOT_URL}/api/get-all-smartphones`)
    return {
        type: GET_ALL_SMARTPHONES,
        payload: request
    }
}
export function getAllAccessories() {
    const request = axios.get(`${ROOT_URL}/api/get-all-accessories`)
    return {
        type: GET_ALL_ACCESSORIES,
        payload: request
    }
}
export function getSmartphone() {
    const request = axios.get(`${ROOT_URL}/api/get-smartphones`)
    return {
        type: GET_SMARTPHONES,
        payload: request
    }
}
export function addToCart() {
    const request = axios.post(`${ROOT_URL}/api/add-to-cart`)
    return {
        type: ADD_TO_CART,
        payload: request
    }
}
export function getCart() {
    const request = axios.get(`${ROOT_URL}/api/get-cart`)
    return {
        type: GET_CART,
        payload: request
    }
}
export function deleteFromCart() {
    const request = axios.delete(`${ROOT_URL}/api/delete-from-cart`)
    return {
        type: DELETE_FROM_CART,
        payload: request
    }
}
export function register(user) {
    const request = axios.post(`${ROOT_URL}/api/register`, user)
    return {
        type: REGISTER,
        payload: request
    }
}

export function login(user) {
    const request = axios.post(`${ROOT_URL}/api/login`, user).then(response => {
        console.log(response.data)
        return response.data
    })
    console.log(request);
    return {
        type: LOGIN,
        payload: request
    }
}