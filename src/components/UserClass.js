import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "child constructor");

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    console.log(this.props.name + "child component DidMount called");
  }

  render() {
    console.log(this.props.name + "child render called");
    const { name } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment!
        </button>
        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: US</h3>
      </div>
    );
  }
}

export default UserClass;
