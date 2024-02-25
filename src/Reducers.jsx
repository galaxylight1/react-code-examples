import { UPDATE_EMAIL_TYPE, UPDATE_PASSWORD_TYPE, UPDATE_USERNAME_TYPE } from "./actions";

export const initialState = {
  username: "",
  password: "",
  email: "",
};

function userReducer(state, action) {
    switch (action.type) {
        case UPDATE_USERNAME_TYPE: { // scope this
            const newState = { ...state };
            newState.username = action.value;
            return newState;
        }
        case UPDATE_PASSWORD_TYPE: return; // similar
        case UPDATE_EMAIL_TYPE: return; // similar
    }
}

export default userReducer;