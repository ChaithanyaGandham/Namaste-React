/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */


const heading = React.createElement("h1", 
{ id: "heading" },
"Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
