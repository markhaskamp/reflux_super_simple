// listenables autoconnect actions with stores

var CounterStore = Reflux.createStore({
  currentCount: 0,
  initialCount: 0,

  init: function() {
    this.listenTo(incrementAction, this.increment);
    this.listenTo(resetAction, this.reset);
  },

  increment: function(j) {
    this.currentCount += j.val;
    this.trigger();
  },

    reset: function() {
      this.currentCount = 0;
      this.trigger();
    }

});

