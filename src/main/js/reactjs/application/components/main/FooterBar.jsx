var React = require('react');
var {Link, IndexLink} = require('react-router');

class FooterBar extends React.Component {
  render() {
    return (
      <div>
          <div className="columns small-offset-5">
                <small>@Camunda PoC.</small>
          </div>
     </div>
    );
  }

}

module.exports = FooterBar;
