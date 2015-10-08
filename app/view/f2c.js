// var incrementAction = Reflux.createAction(null);

var F2C = React.createClass({

  mixins: [
    Reflux.listenTo(F2C_Store, 'convert')
  ],

  convert: function(state) {
    console.log('F2C. onConvert');
    this.setState(state);
  },

  getInitialState: function() {
    return { celsiusVal: 0 };
  },

  render: function() {
    return (
      <div>
        <label>F</label>
        <input type="text" id="fahrenheitVal"/>
        <button onClick={this.handleConvert}>to C</button>
        <span id="celsiusVal">{this.state.celsiusVal}</span>
      </div>
    )
  },

  handleConvert: function() {
    console.log('F2C. handleConvert');
    convertAction(100);
  }
});

React.render(<F2C/>, document.getElementById('f2c'));


