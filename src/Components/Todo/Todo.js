import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { name: 'Do Stuff', category: 'todo', bgcolor: '#AA4465' },
        { name: 'Skip Rocks', category: 'todo', bgcolor: '#3A606E' },
        { name: 'Eat Food', category: 'complete', bgcolor: '#4381C1' },
      ],
    };
  }

  allowDrag(e) {
    e.preventDefault();
  }

  handleDrag(e, id) {
    console.log('onDragStart: ', id);
    e.dataTransfer.setData('id', id);
  }

  onDrop(e, category) {
    let id = e.dataTransfer.getData('id');
    var tasks = this.state.tasks.map(task => {
      if (task.name === id) {
        task.category = category;
      }
      return task;
    });
    this.setState({ tasks });
  }

  render() {
    var tasks = {
      todo: [],
      complete: [],
    };

    this.state.tasks.forEach(task => {
      tasks[task.category].push(
        <div
          key={task.name}
          className="draggie task"
          style={{ background: task.bgcolor }}
          draggable
          onDragStart={e => this.handleDrag(e, task.name)}
        >
          {task.name}
        </div>
      );
    });

    return (
      <div className="DragonDrop">
        <section className="todo container" onDragOver={e => this.allowDrag(e)} onDrop={e => this.onDrop(e, 'todo')}>
          <h2>Todo</h2>
          {tasks.todo}
        </section>
        <section
          className="completed container"
          onDragOver={e => this.allowDrag(e)}
          onDrop={e => this.onDrop(e, 'complete')}
        >
          <h2>Completed</h2>
          {tasks.complete}
        </section>
      </div>
    );
  }
}

export default Todo;
