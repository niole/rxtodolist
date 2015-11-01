const Todo = require('./todo');
const Rx = require('rx');
const React = require('react');

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  displayTodos(todos) {
    return todos.map( todo => { return <Todo todo={todo}/>; });
  }

  render() {
    return (
      <ul>
        {this.displayTodos(this.props.todos)}
      </ul>
    );
  }
}

TodoList.propTypes = { todos: React.PropTypes.array.isRequired };

module.exports = TodoList;;
