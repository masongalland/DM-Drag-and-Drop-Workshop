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
    // this method will be invoked onDragOver
    // the preventDefault method of the event needs to be invoked to enable dropping
    e.preventDefault();
  }

  handleDrag(e, id) {
    // this method will be invoked onDragStart
    // this is where we can access the dataTransfer object on the event and setData to be kept track of
    // this is also where you can change the styling of the target of the event.
    // Important to remember..the ghosted dragged item is a snapshot of the original element at the time of dragstart. So if you want the original to look different from the snapshot you are dragging, you need to use a setTimeout
    e.dataTransfer.setData('id', id);
    setTimeout((target => () => (target.style.opacity = 0))(e.target), 0);
  }

  handleDrop(e) {
    // this method will be invoked onDrop
    // this is where we will getData off of the dataTransfer object and use the id we set to get the dragged element by id and appendChild to the target of the event
    let data = e.dataTransfer.getData('id');
    e.target.appendChild(document.getElementById(data));
  }

  dragEnd(e) {
    // this method will be invoked onDragEnd
    // this is fired after the dragged item is dropped
    // this is where we can reset any styling that we changed onDragStart
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
          /* ------ drag and drop attributes on the dragged element ------ */
          draggable
          onDragStart={e => this.handleDrag(e, box.id)}
          onDragEnd={this.dragEnd}
        />
      );
    });
    return (
      <div className="Basic">
        <div className="start_point">{mappedBoxes}</div>
        <section
          className="dropzone"
          //  ------ drag and drop attributes on the dropzone -----
          onDrop={this.handleDrop}
          onDragOver={this.allowDrop}
        >
          <p>Drop here</p>
        </section>
      </div>
    );
  }
}

export default App;
