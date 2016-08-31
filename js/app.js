var React = require("react");
var ReactDOM = require("react-dom");

var Hello = React.createClass({
  render: function() {
    // return React.createElement("h1", null, "Hello React!");
    return (<h3>Helo Webpack</h3>)
  }
});

ReactDOM.render(
  React.createElement(Hello),
  document.getElementById("react")
);
