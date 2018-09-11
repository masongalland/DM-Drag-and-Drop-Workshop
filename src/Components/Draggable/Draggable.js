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
    this.setState(({ scale }) => {
      return { scale: scale + deltaX * 0.006 };
    });
  };

  render() {
    return (
      <div className="Draggable">
        <div className="yellow_parent">
          <Draggable
            axis="x"
            bounds={{ top: -100, left: -100, right: 200, bottom: 400 }}
            grid={[75, 75]}
            onDrag={this.handleDrag}
          >
            <div>
              <div className="draggable_box" style={{ transform: `scale(${this.state.scale})` }} />
            </div>
          </Draggable>
        </div>

        <div className="ball_parent container">
          <Draggable bounds="parent" defaultClassNameDragging="grow">
            <div className="ball" />
          </Draggable>
        </div>
      </div>
    );
  }
}

export default ReactDraggable;
