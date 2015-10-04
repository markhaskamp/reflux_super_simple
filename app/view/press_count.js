
var PressCount = React.createClass({
  getInitialState: function() {
    return {pressCount: 42};
  },

  render: function() {
    return (
      <div>Pressed {this.state.pressCount} times
        <div><button onClick={this.handleClick}>Click me</button></div>
      </div>
    )
  },

  handleClick: function() {
    this.setState({pressCount: this.state.pressCount + 1});
  }

});

React.render(<PressCount/>, document.getElementById('pressCount'));


