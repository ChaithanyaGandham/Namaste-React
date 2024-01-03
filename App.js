import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "chld" }, [
    React.createElement("h1", {}, "This is namaste react"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "chld2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
