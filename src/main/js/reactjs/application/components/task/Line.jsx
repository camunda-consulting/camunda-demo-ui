/**
 * @author Paul Lungu
 * @type {{DOM, PropTypes, createElement, isValidElement, version, __spread, PureComponent, createMixin, createClass, Children, Component, createFactory, cloneElement}}
 */

'use strict';

// tag::nodeModules[]
const React = require('react');
// tag::customComponents

// tag::vars[]
// end::vars[]

class Line extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
      };
  }

    // tag::follow-1[]
    componentDidMount() {
    }
    // end::follow-1[]



  render() {
      console.log("Task->line->Render::Task: "+JSON.stringify(this.props.task))
      return (
          <tr >
              <td onClick={this.props.onSelectedItem.bind(null, this.props.task.id)}>{this.props.task.name}</td>
              <td onClick={this.props.onSelectedItem.bind(null, this.props.task.id)}>{this.props.task.assignee}</td>
              <td onClick={this.props.onSelectedItem.bind(null, this.props.task.id)}>{this.props.task.creationTime}</td>
          </tr>
      )
  }
}
// end::task[]

module.exports = Line;
