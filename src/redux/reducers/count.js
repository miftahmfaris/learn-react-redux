const initialValues = {
    count: 0
};

const count = (state = initialValues, action) => {
    console.log(action);
    
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default count;
