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
const Detail = require('TaskDetail');
const List = require('TaskList');
// tag::customComponents

// import { interval } from 'rxjs';
// import { startWith, switchMap } from 'rxjs/operators';
// import { webSocket } from 'rxjs/webSocket';

// tag::vars[]
// const wsApi = process.env.WS_API != "" ? `${process.env.WS_API}/` : "/";
// const subject = webSocket(wsApi);
// end::vars[]

// tag::vars[]
const tasksApi = process.env.TASKS_API != "" ? `${process.env.TASKS_API}` : "/";
const taskApi = process.env.TASK_API != "" ? `${process.env.TASK_API}` : "/";
const formApi = process.env.FORM_API != "" ? `${process.env.FORM_API}` : "/";
// end::vars[]

// tag::app[]
class TaskMain extends React.Component {

    // interval: any;

    constructor(props) {
        super(props);
        this.state = {
            task: {},
            tasks: null,
            form: {},
            links: {},
            displayDetail: "none",
            displayInfo: "none",
            displayList: "block",
            toggleDetailInfo: "off",
            callUpdate: function (filters, that) {
                that.loadTasksFromServer(filters)
            }
        };
        this.handleSelectedItem = this.handleSelectedItem.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);
        this.post = this.post.bind(this);
        this.loadTaskByBizKey = this.loadTaskByBizKey.bind(this);
        this.loadTask = this.loadTask.bind(this);
        this.loadForm = this.loadForm.bind(this);
        this.loadTasksFromServer = this.loadTasksFromServer.bind(this);
    }


    // tag::follow-1[]
    componentDidMount() {
        console.log("task=>home=>componentDidMount: "+this.props.businessKey);
        this.state.callUpdate({userId: 'paul.lungu@camunda.com'}, this);
    }
    // end::follow-1[]

    // async componentDidMount() {
        // this.setState({isLoading: true});

        // const request = interval(1000).pipe(
        //     startWith(0),
        //     switchMap(() =>
        //         fetch(wsApi)
        //             .then((response) => response.json())
        //     ));
        // request.subscribe((data: any) => {
        //     // this.setState({rejected: data, isLoading: false});
        //     console.log("WS Data: "+JSON.stringify(data));
        // })

        // subject.subscribe({
        //   next: msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
        //   error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
        //   complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
        //  });

    // }

    loadTaskByBizKey(businessKey){
        client({
            method: 'GET',
            path: apiHost+"engine-rest/task",
            params: {processInstanceBusinessKey: businessKey},
            headers: {'Accept': 'application/json'}
        }).then(response => {
            console.log("task=>home=>loadTaskByBizKey: "+JSON.stringify(response))
            this.setState({
                task: response.entity[0]
            });
        });
    }

    loadTask(filters){
        client({
            method: 'GET',
            path: taskApi,
            params: filters,
            headers: {'Accept': 'application/json'}
        }).then((response) =>
            this.setState({
                task: response.entity
            })
        ).then(()=>
          this.loadForm({formKey:this.state.task.formKey, processDefinitionId:this.state.task.processDefinitionId})
        ).then(() => {
            console.log("task=>main=>loadTask::task: "+JSON.stringify(this.state.task))
            console.log("task=>main=>loadTask::form: "+JSON.stringify(this.state.form))
        });
    }

    loadForm(filters){
        client({
            method: 'GET',
            path: formApi,
            params: filters,
            headers: {'Accept': 'application/json'}
        }).then(response => {
            console.log("task=>main=>loadForm: "+JSON.stringify(response))
            this.setState({
                form: response.entity
            });
        });
    }

    loadTasksFromServer(filters){
        client({
            method: 'GET',
            path: tasksApi,
            params: filters,
            headers: {'Accept': 'application/json'}
        }).then(response => {
            this.setState({
                tasks: response.entity
            });
        });
    }

    handleApprove(e){
        e.preventDefault();

        this.props.history.push('/tasks#');
        this.handleBackClick();
    }

    handleReject(e){
        e.preventDefault();
        this.props.history.push('/rejected');
    }

    post(obj, context) {
        console.log("POST Started")
        client({
            method: 'POST',
            path: apiHost+context,
            entity: obj,
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            console.log("POST Request Complete");
        });
    }

    handleSelectedItem(taskId) {
      console.log("Task->Main->handleSelectedItem::taskId: "+ JSON.stringify(taskId));
      this.loadTask({taskId:taskId})
      this.setState({
          displayDetail: "block",
          displayList: "none"
      });
    }

    handleBackClick(e){
      this.setState({
        displayDetail: "none",
        displayList: "block"
      });
    }

    render() {
      return (
        <div>

            {/*Display Task List*/}
            <div style={{display: this.state.displayList}}>

                <div className="top-bar show-for-medium small-12 columns">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="topbar-title">
                                Task List
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <List tasks={this.state.tasks}
                          onSelectedItem={this.handleSelectedItem}/>
                </div>
            </div>

          {/*  Display Task Details*/}
          <div style={{display: this.state.displayDetail}}>
            <div className="top-bar-right">
              <ul className="menu">
                <li className="topbar-title">
                  <a className="button" onClick={this.handleBackClick}>Back</a>
                </li>
              </ul>
            </div>
            <div className="top-bar show-for-medium small-12 columns">
              <div className="top-bar-left">
                <ul className="menu">
                  <li className="topbar-title">
                     Task Detail
                  </li>
                </ul>
              </div>
            </div>
            <div>
                <Detail task={this.state.task}
                        form={this.state.form}
                        displayInfo={this.state.displayInfo}
                        handleReject={this.handleReject}
                        handleApprove={this.handleApprove} />
            </div>
          </div>

        </div>
      )
    }
}
// end::app[]

module.exports = TaskMain;
