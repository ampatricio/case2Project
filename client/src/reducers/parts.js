export default (part = [], action) => {
    switch (action.type){
        case 'GETPARTS':
            return action.payload;
        case 'CREATEPART' :
            return [...part, action.payload];
        default:
            return part;
    }
}