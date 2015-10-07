// listenables autoconnect actions with stores

var CounterStore = Reflux.createStore({
  currentCount: 0,
  initialCount: 0,

  init: function() {
    this.listenTo(incrementAction, this.increment);
    this.listenTo(resetAction, this.reset);
  },

  increment: function() {
    this.currentCount += 1;
    this.trigger({pressCount: this.currentCount});
  },

  reset: function() {
    this.currentCount = 0;
    this.trigger({pressCount: 0});
  }

});

