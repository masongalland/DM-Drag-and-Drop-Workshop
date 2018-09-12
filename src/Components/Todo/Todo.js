import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { name: 'Do Stuff', category: 'complete', bgcolor: '#AA4465' },
        { name: 'Skip Rocks', category: 'todo', bgcolor: '#3A606E' },
        { name: 'Eat Food', category: 'todo', bgcolor: '#4381C1' },
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
    // instead of using vanilla js to manipulate the DOM, let's setState and change the category of the dragged item to determine which list it is rendered in.
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
          // ------- drag and drop attributes on dragged element ---------
          draggable
          onDragStart={e => this.handleDrag(e, task.name)}
        >
          {task.name}
        </div>
      );
    });

    return (
      <div className="DragonDrop">
        <section
          className="todo container"
          // ------- drag and drop attributes on dropzone ---------
          onDragOver={this.allowDrag}
          onDrop={e => this.onDrop(e, 'todo')}
        >
          <h2>Todo</h2>
          {tasks.todo}
        </section>
        <section
          className="completed container"
          // ------- drag and drop attributes on dropzone ---------
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
