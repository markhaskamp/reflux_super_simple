// var incrementAction = Reflux.createAction(null);

var PressCount = React.createClass({

  render: function() {
    return (
      <div>Pressed  times
        <div>
          <button onClick={this.handleClick}>+1</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      </div>
    )
  },

  handleClick: function() {
    console.log('PressCount. handleClick()');
    incrementAction();
  },

  handleReset: function() {
    console.log('PressCount. handleReset()');
  }

});

React.render(<PressCount/>, document.getElementById('pressCount'));


