import { UPDATE_EMAIL_TYPE, UPDATE_PASSWORD_TYPE, UPDATE_USERNAME_TYPE } from "./actions";

export const initialState = {
  username: "",
  password: "",
  email: "",
};

function userReducer(state, action) {
    switch (action.type) {
        case UPDATE_USERNAME_TYPE: return;
        case UPDATE_PASSWORD_TYPE: return;
        case UPDATE_EMAIL_TYPE: return;
    }
}

export default userReducer;