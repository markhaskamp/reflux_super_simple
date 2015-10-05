// listenables autoconnect actions with stores

var CounterStore = Reflux.createStore({
  currentCount: 0,
  initialCount: 0,

  init: function() {
    this.listenTo(incrementAction, this.increment);
  },

  increment: function(j) {
    console.log('CounterStore. increment()');
    this.currentCount += j.val;
    console.log(this.currentCount);

    this.trigger();
  }

});

