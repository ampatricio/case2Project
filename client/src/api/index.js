import axios from 'axios';

const url = 'http://localhost:5000/users';

export const fetchUser = () => axios.get(url);
export const createUser = (newUser) => axios.post(url, newUser);

export const fetchParts = () => axios.get(url);
export const createPart = (newPart) => axios.post(url, newPart);