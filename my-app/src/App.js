import { Component } from "react";
import uniqid from "uniqid";
import { Overview } from "./components/Overview";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: "", id: uniqid() },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: uniqid() },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter Task: </label>
          <input
            type="text"
            id="taskInput"
            onChange={this.handleChange}
            value={task.text}
          />
          <button type="submit" onClick={this.onSubmitTask}>
            Add Task
          </button>
        </form>
        <Overview task={tasks}></Overview>
      </div>
    );
  }
}