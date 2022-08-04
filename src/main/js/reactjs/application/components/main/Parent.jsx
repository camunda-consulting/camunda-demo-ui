/**
 * @author Paul Lungu
 * @type {{DOM, PropTypes, createElement, isValidElement, version, __spread, PureComponent, createMixin, createClass, Children, Component, createFactory, cloneElement}}
 */

'use strict';

// tag::vars[]
const React = require('react');
const Main = require('Main');
const Tasks = require('TaskMain');

const {
  BrowserRouter,
  Routes,
  Route,
  Link,
} = require("react-router-dom");

// end::vars[]

// tag::app[]
class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    // tag::follow-1[]
    componentDidMount() {
    }
    // end::follow-1[]

    handleRedirect(path){
        this.props.history.push(path);
    }

    render() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/app.html" element={<Main />} />
            <Route path="/app.html/tasks" element={<Tasks />} />
          </Routes>
        </BrowserRouter>
      )
    }
}
// end::app[]
module.exports = Parent;
