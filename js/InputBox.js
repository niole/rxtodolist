const TodoList = require('./todolist');
const TodoStore = require('./todoStore');
const Rx = require('rx');
const React = require('react');

class InputBox extends React.Component {
  constructor(props) {
    super(props);
      this.state = { todos: [] };
  }

  componentDidMount() {
    const store = new TodoStore((val) => { this.updateTodos(val) });

    const todoInput = document.getElementById('todoInput');

    const child = document.getElementById('appendhere');

    const newTodo = Rx.Observable.fromEvent(todoInput, 'change');

    const resetInput = new Rx.Subject();

    resetInput.map( val => { return ""; }).subscribe( v => { todoInput.value = v; });

    newTodo.subscribe( e => {
      let nextTodo = this.getStrValue(e);
      store.add.onNext(nextTodo);
      resetInput.onNext(nextTodo);
    });
  }

  updateTodos(todos) {
      this.setState({ todos: todos });
  }

  getStrValue(event) {
    event.preventDefault();
    return event.target.value;
  }

  render() {
    return (
      <div>
        <input id='todoInput' type='text' placeholder='input something'/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

module.exports = InputBox;
