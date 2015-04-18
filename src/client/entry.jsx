var React = require('react');

var HelloWorld = React.createClass({
    render: function() {
        return (
            <h1>Hellao Crazya Worldasssss</h1>
        );
    }
});

var SignUp = React.createClass({
    render: function() {
        return (
            <form className="form-signup">
                <input id="input-email" className="form-control" type="email" placeholder="Email address" required autofocus />
                <input id="input-password" className="form-control" type="password" placeholder="Password" required />
                <input id="input-password-confirm" className="form-control" type="password" placeholder="Confirm Password" required />
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
            </form>
        );
    }
});


var Cover = React.createClass({
    render: function() {
        return (
            <div className="site-wrapper">
                <div className="site-wrapper-inner">
                    <div className="cover-container">
                        <div className="masthead clearfix">
                            <div className="inner">
                                <h3 className="masthead-brand">strstd</h3>
                                <nav>
                                    <ul className="nav masthead-nav">
                                        <li className="active"><a href="#">home</a></li>
                                        <li><a href="#">about</a></li>
                                        <li><a href="#">contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="inner cover">
                            <h1 className="cover-heading">strength standards</h1>
                            <p className="lead">
                                <label>Name of Lift</label>
                                <input type="text"/>
                                <input type="text"/>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{"width": "90%"}}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                </div>
                            </p>
                            <p className="lead">
                                <a href="#" className="btn btn-lg btn-default">Learn more</a>
                            </p>
                        </div>
                        <div className="mastfoot">
                            <div className="inner">
                                <p>Cover template for <a href="http://getbootstrap.com">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

React.render(<Cover/>, document.getElementById('app'));
