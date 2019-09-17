import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions";

class Counter extends React.Component {
    render() {
        console.log(increment);

        console.log(this.props, "props");

        return (
            <div>
                <p>Clicked: {this.props.count} times</p>
                <p>
                    <button
                        onClick={() => {
                            this.props.dispatch(increment());
                        }}
                    >
                        INCREMENT
                    </button>
                    <button
                        onClick={() => {
                            this.props.dispatch(decrement());
                        }}
                    >
                        DECREMENT
                    </button>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return { count: state.count.count };
};

export default connect(mapStateToProps)(Counter);
