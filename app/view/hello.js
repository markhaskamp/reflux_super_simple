
var Hello = React.createClass({
  render: function() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
});

React.render(
    React.createElement(Hello, {name: "World"}),
    document.getElementById('hello')
);

