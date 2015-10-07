// var incrementAction = Reflux.createAction(null);

var PressCount = React.createClass({

  mixins: [
    Reflux.listenTo(CounterStore, 'increment')
  ],

  increment: function(state) {
    console.log('increment');
    this.setState(state);
  },

  getInitialState: function() {
    return { pressCount: 0 };
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
    incrementAction();
  },

  handleReset: function() {
    resetAction();
  }

});

React.render(<PressCount/>, document.getElementById('pressCount'));


