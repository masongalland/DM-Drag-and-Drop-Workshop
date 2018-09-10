import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Draggable.css';

class ReactDraggable extends Component {
  handleStart(e) {}

  render() {
    return (
      <div className="Draggable">
        <div className="yellow_parent">
          <Draggable axis="both" bounds={{ top: -100, left: -100, right: 200, bottom: 400 }} grid={[75, 75]}>
            <div className="draggable_box" />
          </Draggable>
        </div>

        <div className="ball_parent container">
          <Draggable bounds="parent" defaultClassNameDragging="grow" onStart={this.handleStart}>
            <div className="ball" />
          </Draggable>
        </div>
      </div>
    );
  }
}

export default ReactDraggable;
