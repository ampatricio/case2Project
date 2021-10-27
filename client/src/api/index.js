import axios from 'axios';

const urlUsers = 'http://localhost:5000/users/users';
const urlParts = 'http://localhost:5000/users/parts';

export const fetchUser = () => axios.get(urlUsers);
export const createUser = (newUser) => axios.post(urlUsers, newUser);

export const fetchParts = () => axios.get(urlParts);
export const createPart = (newPart) => axios.post(urlParts, newPart);