import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Draggable.css';

class ReactDraggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1,
    };
  }

  handleDrag = (e, { deltaX }) => {
    // this method is invoked onDrag (the equivalent of onDragStart with the native drag and drop api)
    // here we get access to all kinds of data. we will use the deltaX to change state based on how far the element is dragged on the x-axis
    this.setState(({ scale }) => {
      return { scale: scale + deltaX * 0.006 };
    });
  };

  render() {
    return (
      <div className="Draggable">
        <div className="yellow_parent">
          {/* wrap elements that you want to give dragging capabilities in the Draggable component */}
          <Draggable
            axis="x" // limits movement along the "x", "y", "both", or "non" axes
            // bounds limits the area that the dragged item can be moved in. can be a string of an element, "parent", or an object with coordinates
            bounds={{ top: -100, left: -100, right: 200, bottom: 400 }}
            grid={[75, 75]} // makes the dragged element snap to a grid when moved
            onDrag={this.handleDrag}
          >
            <div>
              <div className="draggable_box" style={{ transform: `scale(${this.state.scale})` }} />
            </div>
          </Draggable>
        </div>

        <div className="ball_parent container">
          <Draggable
            bounds="parent"
            // defaultClassNameDragging lets you customize how the element looks when it is being dragged
            defaultClassNameDragging="grow"
          >
            <div className="ball" />
          </Draggable>
        </div>
      </div>
    );
  }
}

export default ReactDraggable;
