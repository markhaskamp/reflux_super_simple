
var Hello = React.createClass({
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

React.render(
    React.createElement(Hello, {name: "World"}),
    document.getElementById('hello')
);

