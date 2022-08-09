/**
 * @author Paul Lungu
 * @type {{DOM, PropTypes, createElement, isValidElement, version, __spread, PureComponent, createMixin, createClass, Children, Component, createFactory, cloneElement}}
 */
'use strict';
// tag::nodeModules[]
const React = require('react');


class Info extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
      }

  }


    render(){
      console.log("Task->Info->Render::Task: "+JSON.stringify(this.props.task))

      return (
          <div className="my-form my-info">
              <div className="small-12 columns">
                <div className="card" >
                  <div className="card-divider text-center">
                    <h4>Task Info</h4>
                  </div>
                  <div className="card-section" style={{borderTop: "1px dashed #2199e8"}}>
                    <ul>
                      <li><span className="label">Task name</span><span className="data">{this.props.task.name}</span></li>
                      <li><span className="label">Task Id</span><span className="data">{this.props.task.id}</span></li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
      )
  }

}

module.exports = Info;
