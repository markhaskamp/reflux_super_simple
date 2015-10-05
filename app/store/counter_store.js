// listenables autoconnect actions with stores

var CounterStore = Reflux.createStore({
  currentCount: 0,
  initialCount: 0,

  init: function() {
    this.listenTo(incrementAction, this.increment);
  },

  increment: function(n) {
    console.log('got to here');
    this.currentCount += 1;

    this.trigger();
  }

});
