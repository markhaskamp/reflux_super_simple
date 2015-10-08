
var F2C_Store = Reflux.createStore({

  init: function() {
    this.listenTo(convertAction, this.onConvert);
  },

  onConvert: function(f) {
    console.log('F2C_Store.onConvert');
    var c = (f - 32) / 9 * 5;
    this.trigger({celsiusVal: c});
  }
});

