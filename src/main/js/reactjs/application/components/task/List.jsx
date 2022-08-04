/**
 * @author Paul Lungu
 * @type {{DOM, PropTypes, createElement, isValidElement, version, __spread, PureComponent, createMixin, createClass, Children, Component, createFactory, cloneElement}}
 */

'use strict';

// tag::nodeModules[]
const React = require('react');

// tag::customComponents
const Line = require('TaskLine');
// const FilterBar = require('TaskFilterBar');

// tag::vars[]

// tag::task-list[]
class List extends React.Component{
  constructor(props) {
      super(props);
  }

  render() {

    console.log("task=>List>Render: "+JSON.stringify(this.props.tasks));


	  let tasks = <tr><td></td><p>No Tasks</p><td></td></tr>;
	  if (this.props.tasks != null)
	  {
		  tasks = this.props.tasks.map(task =>
			  <Line key={task.id}
					task={task}
					onSelectedItem={this.props.onSelectedItem}/>
		  );
    }

		return (
		    <div>
				{/*<FilterBar links={this.props.links}*/}
				{/*		   pageSize={this.props.pageSize}*/}
				{/*		   onNavigate={this.props.onNavigate}*/}
				{/*		   updatePageSize={this.props.updatePageSize}*/}
				{/*		   onFilterPriority={this.props.onFilterPriority}*/}
				{/*		   onFilterAll={this.props.onFilterAll}*/}
				{/*		   onFilterStarted={this.props.onFilterStarted}*/}
				{/*		   onFilterState={this.props.onFilterState}*/}
				{/*		   title="Filter Tasks"/>*/}

				<div>
					<table className="hover stack">
					  <thead>
						<tr>
							<th>Task Name</th>
							<th>Assignee</th>
							<th width="105">Created</th>
						</tr>
					  </thead>
					  <tbody>
              {tasks}
            </tbody>
					</table>
				</div>

    		</div>
		)
	}
}
// end::task-list[]

module.exports = List;
