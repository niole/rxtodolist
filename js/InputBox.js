const TodoList = require('./todolist');
const TodoStore = require('./todoStore');
const Rx = require('rx');
const React = require('react');

class InputBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let store = new TodoStore((val) => { React.render(<TodoList todos={val}/>, child)});

    const todoInput = document.getElementById('todoInput');
    const newTodo = Rx.Observable.fromEvent(todoInput, 'change');

    const child = document.getElementById('appendhere');

    newTodo.subscribe( e => {
      store.add.onNext(this.getStrValue(e));
      todoInput.value = '';
    });
  }

  getStrValue(event) {
    event.preventDefault();
    return event.target.value;
  }

  render() {
    return (
      <div>
        <input id='todoInput' type='text' placeholder='input something'/>
        <div id="appendhere"/>
      </div>
    );
  }
}

module.exports = InputBox;
