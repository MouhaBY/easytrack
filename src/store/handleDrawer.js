export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";
export const MANAGE_DRAWER = "MANAGE_DRAWER";

const initialState = false

export const openDrawer = () => (
    {
        type: OPEN_DRAWER
    }
)

export const closeDrawer = () => (
    {
        type: CLOSE_DRAWER
    }
)

export const manageDrawer = () => (
    {
        type: MANAGE_DRAWER
    }
)

export function drawerReducer(state=initialState, action) {
    if(action.type === MANAGE_DRAWER){
        state=!state;
        return state;
    }
    else if(action.type === OPEN_DRAWER){
        state=true;
        return state;
    }
    else if (action.type === CLOSE_DRAWER){
        state=false;
        return state;
    }
    else return state
}
