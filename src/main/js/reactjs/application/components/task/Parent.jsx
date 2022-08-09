'use strict';

// tag::vars[]
const React = require('react');

const MarketingBar = require('MarketingBar');
const FooterBar = require('FooterBar');
const TaskMain = require('TaskMain');

// tag::renewal[]
class TaskParent extends React.Component{
    render() {
        return (
         <div className="grid-x grid-padding-x align-center translucent-form-overlay">
           <div className="small-10 columns">
             <MarketingBar/>
             <div>
                <TaskMain onRedirect={this.props.handleRedirect} />
             </div>
             <FooterBar/>
           </div>
         </div>
        )
    }
}
// end::renewal[]

module.exports = TaskParent;
