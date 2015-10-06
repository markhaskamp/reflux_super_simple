// var incrementAction = Reflux.createAction(null);

var PressCount = React.createClass({

  mixins: [Reflux.listenTo(CounterStore, 'foo')],

  foo: function() {
    console.log('PressCount.foo()');
  },


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
    incrementAction({val: 1});
  },

  handleReset: function() {
    resetAction();
  }

});

React.render(<PressCount/>, document.getElementById('pressCount'));


