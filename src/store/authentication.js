//STATIC VALUES
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


//STATE INITIAL
const initialState = {
    token : null,
    userData: null
}


//ACTION CREATOR
export const loginAction = (credentials) => (
    {
        type : LOGIN,
        payload : credentials
    }
)

export const logoutAction = () => (
    {
        type: LOGOUT,
    }
)


//REDUCER
export function authReducer (state=initialState, action){
    if(action.type === LOGOUT){
        state=initialState;
        return state;
    }
    else if (action.type === LOGIN){
        state=action.payload;
        return state;
    }
    else {
        return state;
    }
}
