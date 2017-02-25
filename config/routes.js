var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main')
var Login = require('../components/Login')
var Chat = require('../components/Chat')

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Login} />
            <Route path='/chat/:user' component={Chat} />
        </Route>
    </Router>
    );
module.exports = routes;