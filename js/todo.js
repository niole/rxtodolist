const Rx = require('rx');
const React = require('react');

class Todo extends React.Component {
  constructor(props) {
    super(props);
      this.props = props;
  }

  render() {
    return (
      <div>
        <p>{this.props.todo}</p>
      </div>
    );
  }
}

Todo.propTypes = { todo: React.PropTypes.string };

module.exports = Todo;
