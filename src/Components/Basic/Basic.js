import React, { Component } from 'react';
import './Basic.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      boxes: [
        { id: 1, name: 'steve', bgColor: '#AA4465' },
        { id: 2, name: 'john', bgColor: '#4381C1' },
        { id: 3, name: 'sammi', bgColor: '#5DFDCB' },
      ],
    };
  }
  allowDrop(e) {
    e.preventDefault();
  }

  handleDrag(e, id) {
    console.log('box id : ', id);
    e.dataTransfer.setData('id', id);
    setTimeout((target => () => (target.style.opacity = 0))(e.target), 0);
  }

  handleDrop(e) {
    let data = e.dataTransfer.getData('id');
    e.target.appendChild(document.getElementById(data));
  }

  dragEnd(e) {
    e.target.style.opacity = 1;
  }

  render() {
    let mappedBoxes = this.state.boxes.map((box, i) => {
      return (
        <div
          key={box.name + i}
          id={box.id}
          className="box draggie"
          style={{ background: box.bgColor }}
          draggable
          onDragStart={e => this.handleDrag(e, box.id)}
          onDragEnd={this.dragEnd}
        />
      );
    });
    return (
      <div className="Basic">
        <div className="start_point">{mappedBoxes}</div>
        <section onDrop={e => this.handleDrop(e)} onDragOver={e => this.allowDrop(e)} className="dropzone">
          <p>Drop here</p>
        </section>
      </div>
    );
  }
}

export default App;
