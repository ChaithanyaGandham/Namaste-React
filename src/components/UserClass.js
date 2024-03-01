import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "child constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + "child component DidMount called");
    const data = await fetch("https://api.github.com/users/chaithanyaGandham");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("This is Namaste React series!");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("Component will unmount called");
    clearInterval(this.timer);
  }

  render() {
    // console.log(this.props.name + "child render called");

    const { name } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
      </div>
    );
  }
}

export default UserClass;
