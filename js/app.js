import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <h1>Helo Webpack</h1>
    );
  }
}

ReactDOM.render(
  React.createElement(Hello),
  document.getElementById("react")
);
