import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card">
      <button onClick={() => {}}>Count Increment</button>
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: India</h3>
    </div>
  );
};

export default User;

// import React from "react";

// class User extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("User constructor called");
//   }

//   componentDidMount() {
//     console.log("User component did mount method called!");
//   }

//   render() {
//     console.log("User render method called");
//     return (
//       <div>
//         <h1>I am user component!</h1>
//       </div>
//     );
//   }
// }

// export default User;
