'use strict';

// tag::vars[]
const React = require('react');

const MarketingBar = require('MarketingBar');
const FooterBar = require('FooterBar');
const UseCase = require('UseCaseMain');

// tag::renewal[]
class Main extends React.Component{
    render() {
        return (
         <div className="row translucent-form-overlay">
           <MarketingBar/>
            <div>
              <UseCase onRedirect={this.props.handleRedirect} />
            </div>
            <FooterBar/>
         </div>
        )
    }
}
// end::renewal[]

module.exports = Main;
