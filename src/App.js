import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import Counter from "./components/Counter";

const stores = createStore(reducer);

const App = props => {
    return (
        <Provider store={stores}>
            <div>
                <p>I am the actual App</p>
                <Counter />
            </div>
        </Provider>
    );
};

export default App;
