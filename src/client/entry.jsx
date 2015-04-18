var React = require('react');

var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1>Hellao Crazya Worldasssss</h1>
        );
    }
});

React.render(<HelloWorld/>, document.getElementById('app'));
