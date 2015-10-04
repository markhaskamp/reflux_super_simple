
var PressCount = React.createClass({
  getInitialState: function() {
    return {pressCount: 0};
  },

  render: function() {
    return (
      <div>Pressed {this.state.pressCount} times
        <div>
          <button onClick={this.handleClick}>+1</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      </div>
    )
  },

  handleClick: function() {
    this.setState({pressCount: this.state.pressCount + 1});
  },

  handleReset: function() {
    this.setState({pressCount: 0});
  }

});

React.render(<PressCount/>, document.getElementById('pressCount'));


