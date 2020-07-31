export default function (state = {}, action) {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
           
                    username: action.payload
                    // password:action.payload
            };
        default:
            return state;
    }
}