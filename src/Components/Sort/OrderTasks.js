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
    this.setState({ start: i });
  }

  drop(e, i) {
    console.log('drop i: ', i);
    let childrenCopy = this.state.children.slice();
    let moving = childrenCopy.splice(this.state.start, 1)[0];
    childrenCopy.splice(i, 0, moving);
    this.setState({ children: childrenCopy });
  }

  dragOver(e, i) {
    e.preventDefault();
  }

  render() {
    console.log(this.state.children);
    let displayList = this.state.children.map((el, i) => {
      //   console.log(el);
      return (
        <div
          key={i}
          className="draggie sort_item"
          style={{ background: el.props.color }}
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
