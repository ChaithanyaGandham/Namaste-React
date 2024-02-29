import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount called");
  }

  render() {
    console.log("parent render method");
    return (
      <div>
        <h3>About Us Page!!</h3>
        <UserClass name={"First"} />
        <UserClass name={"Second"} />
      </div>
    );
  }
}

export default About;
