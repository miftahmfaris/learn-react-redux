import React from "react";
import { MyContext } from "./MyProvider";

export const Person = props => {
    // Look! No props passed
    // We can just use the data inside the Consumer
    return (
        <div className="person">
            <MyContext.Consumer>
                {context => {
                    console.log(context);

                    return (
                        <React.Fragment>
                            <p>Age: {context.state.age}</p>
                            <p>Name: {context.state.name}</p>
                            <button onClick={context.growAYearOlder}>
                                <span role="img" aria-label="">
                                    🍰🎂🍰
                                </span>
                            </button>
                        </React.Fragment>
                    );
                }}
            </MyContext.Consumer>
        </div>
    );
};
