import React from "react"

export const MyContext = React.createContext()

// Create a Provider component
export default class MyProvider extends React.Component {
  state = {
    name: 'Coba',
    age: 100,
    cool: true
  }

  // The state would be stored in the Provider
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
