import { useReducer } from "react";
import userReducer, { initialState } from "./Reducers";
import { UPDATE_USERNAME_TYPE } from "./actions";

function App() {
    const [state, dispatch] = useReducer(userReducer, initialState);
    return (<div>
        <p>Username: {state.username}</p>
        <p>Email: {state.email}</p>
        <p>Password: {state.password}</p>
        
        <label id="username">Username</label>
        <input id="username" onChange={({ target: { value }}) => {
            dispatch({ type: UPDATE_USERNAME_TYPE, value: value});
        }} />
        <label id="password">Password</label>
        <input id="password" />
        <label id="email">Email</label>
        <input id="email" />
    </div>);
};

export default App;