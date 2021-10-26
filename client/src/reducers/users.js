export default (user = [], action) => {
    switch (action.type){
        case 'LOGIN':
            return action.payload;
        case 'CREATEUSER' :
            return [...user, action.payload];
        default:
            return user;
    }
}