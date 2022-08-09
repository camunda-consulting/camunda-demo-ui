/**
 * @author Paul Lungu
 * @type {{DOM, PropTypes, createElement, isValidElement, version, __spread, PureComponent, createMixin, createClass, Children, Component, createFactory, cloneElement}}
 */

'use strict';

// tag::nodeModules[]
const React = require('react');
const client = require('client');
const follow = require('follow'); // function to hop multiple links by "rel"

// tag::customComponents
const WorkflowInfo = require('WorkflowInfo');
// tag::customComponents

const dataApi = process.env.DATA_API != "" ? process.env.DATA_API : "/";
const workflowApi = process.env.WORKFLOW_API != "" ? process.env.WORKFLOW_API : "/";
// end::vars[]

// tag::app[]
class main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            workflow: null,
            displayDetail: "block",
            displayInfo: "block",
            toggleDetailInfo: "off",
            // callUpdate: function (key, that) {that.loadOneFromServer(key)}
        };
        // this.post = this.post.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        this.loadOneFromServer = this.loadOneFromServer.bind(this);
    }


    // tag::componentDidMount-1[]
    componentDidMount() {
        console.log("workflow=>home=>componentDidMount: "+this.props.businessKey)
        // this.state.callUpdate(this.props.businessKey, this)
    }
    // end::componentDidMount-1[]


    loadOneFromServer(businessKey){
        client({
            method: 'GET',
            path: `${workflowApi}/processes`,
            params: {businessKey: businessKey},
            headers: {'Accept': 'application/json'}
        }).done(response => {
            console.log("workflow=>home=>loadOneFromServer: "+JSON.stringify(response))
            this.setState({
                workflow: response.entity[0]
            });
        });
    }

    // post(obj, context) {
    //     console.log("POST Started")
    //     client({
    //         method: 'POST',
    //         path: `${workflowApi}/processes`,
    //         entity: obj,
    //         headers: {'Content-Type': 'application/json'}
    //     }).done(response => {
    //         console.log("POST Request Complete");
    //     });
    // }

    // onSubmit(){}

    // handleSelectedItem(workflow) {
    //     if (workflow == null){
    //         alert("You don't have a workflow to complete. Please complete the service request first.");
    //     }else {
    //         console.log("Megred Task: "+ JSON.stringify(workflow));
    //         this.setState({
    //             workflow: workflow,
    //             displayDetail: "block",
    //         });
    //     }
    // }

    render() {
      return (
        <div className="workflow-info ">
            <div className="top-bar">
              <div className="top-bar-left">
                     Workflow Info
              </div>
            </div>
            <div>
                <WorkflowInfo workflow={this.state.workflow}/>
            </div>
        </div>
      )
    }
}
// end::app[]

module.exports = main;
