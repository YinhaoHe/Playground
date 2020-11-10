import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.value,
  //   // imageUrl: "http://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // // constructor() {
  // //   super();
  // //   this.handleIncrement = this.handleIncrement.bind(this);
  // // }

  // styles = {
  //   fontSize: 10,
  //   fontWeight: "bold",
  // };

  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ count: this.state.value + 1 });
  // };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={this.props.onDelete}> </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
