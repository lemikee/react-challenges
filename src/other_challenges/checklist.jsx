import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], userInput: "", dropdown: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.userInput !== "") {
      const todosCopy = [...this.state.todos];
      todosCopy.push({
        task: this.state.userInput,
        done: false,
      });
      this.setState({ todos: todosCopy });
      this.setState({ userInput: "" });
    }
  }

  toggleTodo(index) {
    const todosCopy = [...this.state.todos];
    todosCopy[index].done = !todosCopy[index].done
    this.setState({todos: todosCopy})
  }

  removeTodo(index) {
    const todosCopy = [...this.state.todos];
    todosCopy.splice(index, 1);
    this.setState({ todos: todosCopy});
  }

  render() {
    const { todos, userInput, dropdown } = this.state;
    const todosLis = todos.map((todo, index) => <ChecklistItem todo={todo} key={index} index={index} toggleTodo={this.toggleTodo} removeTodo={this.removeTodo}/>);
    return (
      <div>
        hello
        <form onSubmit={this.handleSubmit}>
          <label>
            Todo Item:
            <input
              name="userInput"
              value={userInput}
              onChange={this.handleChange}
            />
          </label>
        </form>

        <ol>
            {todosLis}
        </ol>

        <select value={dropdown} onChange={this.handleChange} name='dropdown'>
            <option value='taco'>Taco</option>
            <option value='bell'>Bell</option>
            <option value={1}>Number</option>
            <option value={[2]}>Array</option>
        </select>
        <h5>{dropdown}</h5>
      </div>
    );
  }
}

class ChecklistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.removeItem = this.removeItem.bind(this)
  }

  handleClick(e) {
    const index = e.target.getAttribute('index')
    this.props.toggleTodo(index)
  }

  removeItem(e) {
    const index = e.target.getAttribute('index')
    console.log(index)
    this.props.removeTodo(index)
  }

  render() {
    const { todo, index } = this.props;
    console.log(index)

    return (
      <div style={{border: '1px solid red', width: '100px'}}>
        <div onClick={this.removeItem} index={index}>
          <h5
            style={{ fontWeight: "bold" }}
            onClick={this.removeItem}
            index={index}
          >
            Task: {todo.task}
          </h5>
          <h6>Done: {todo.done === true ? "True" : "False"}</h6>
        </div>
        <br />
        <input
          type="checkbox"
          task={todo.task}
          index={index}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
