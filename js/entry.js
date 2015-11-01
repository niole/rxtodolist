const Rx = require('rx');
const React = require('react');
const InputBox = require('./InputBox');
let ReactDOM;
try {
  ReactDOM = require('react-dom');
} catch(e) {
  ReactDOM = React;
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <InputBox/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.body);
