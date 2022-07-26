/**
 * @author Paul Lungu
 * @type {{DOM, PropTypes, createElement, isValidElement, version, __spread, PureComponent, createMixin, createClass, Children, Component, createFactory, cloneElement}}
 */

'use strict';

// tag::nodeModules[]
const React = require('react');
const ReactDOM = require('react-dom')
 // function to hop multiple links by "rel"

// tag::customComponents
const TaskActionApprove = require('TaskActionApprove');
const Info = require('TaskInfo');
// const SearchForm = require('TaskSearchForm');
const CamundaForm = require('CamundaForm');

class Detail extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
      };
  }

  render(){
    console.log("Task->Detail->Render::Task: "+JSON.stringify(this.props.task))

    return (
      <div>

          {/*<SearchForm handleUpdatePolicy={this.props.handleUpdatePolicy}
                      policy={this.props.policy} />*/}

          <Info task={this.props.task} />

          <CamundaForm form={this.props.form}/>

          <TaskActionApprove task={this.props.task}
              handleReject={this.props.handleReject}
              handleApprove={this.props.handleApprove} />
      </div>
    )
  }
}

module.exports = Detail;
