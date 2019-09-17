import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/Counter";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <p>I am the actual App</p>
                <Counter />
            </div>
        </Provider>
    );
};

export default App;
