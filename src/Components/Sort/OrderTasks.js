import React, { Component } from 'react';
import './Sort.css';

class OrderTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      start: null,
    };
    this.dragStart = this.dragStart.bind(this);
    this.drop = this.drop.bind(this);
    this.dragOver = this.dragOver.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.children !== nextProps.children) {
      this.setState({ children: nextProps.children });
    }
  }

  dragStart(e, i) {
    console.log('dragStart: ', i);
    // here we are keeping track of the index of the dragged item
    // instead of using the dataTransfer object, we are using state
    this.setState({ start: i });
  }

  drop(e, i) {
    console.log('drop i: ', i);
    // make copy of state so we don't mutate it directly
    let childrenCopy = this.state.children.slice();
    // remove dragged item from the array and catch in variable
    let moving = childrenCopy.splice(this.state.start, 1)[0];
    // add the item back into the array at the position it was dropped
    childrenCopy.splice(i, 0, moving);
    // setState with the mutated copy of state
    this.setState({ children: childrenCopy });
  }

  dragOver(e, i) {
    e.preventDefault();
  }

  render() {
    console.log(this.state.children);
    let displayList = this.state.children.map((el, i) => {
      return (
        <div
          key={i}
          className="draggie sort_item"
          style={{ background: el.props.color }}
          // --- each draggable item is also a dropzone
          draggable
          onDragStart={e => this.dragStart(e, i)}
          onDragOver={e => this.dragOver(e, i)}
          onDrop={e => this.drop(e, i)}
        >
          {el}
        </div>
      );
    });
    return <ol className="Sort">{displayList}</ol>;
  }
}

export default OrderTasks;
