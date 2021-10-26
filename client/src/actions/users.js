import * as api from '../api';

//Action Creators
export const getUser = () => async (dispatch) => {

    try {
        const { data } = await api.fetchUser();
        dispatch({ type: 'LOGIN', payload: data });
    } catch (error) {
        console.log(error.message);
    }

}

export const createUser = (user) => async (dispatch) => {

    try {
        const { data } = await api.createUser(user);

        dispatch({ type: 'CREATEUSER', payload: data });
    } catch (error) {
        console.log(error.message);
    }

}

export const getParts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchParts();
        dispatch({ type: 'GETPARTS', payload: data });
    } catch (error) {
        console.log(error.message);
    }

}

export const createPart = (part) => async (dispatch) => {

    try {
        const { data } = await api.createPart(part);

        dispatch({ type: 'CREATEPART', payload: data });
    } catch (error) {
        console.log(error.message);
    }

}