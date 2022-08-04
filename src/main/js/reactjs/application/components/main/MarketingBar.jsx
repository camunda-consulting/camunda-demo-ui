/**
 * @author Paul Lungu
 */

'use strict';

const React = require('react');

const {
  NavLink
} = require("react-router-dom");

class MarketingBar extends React.Component {


  render() {

    return (
      <div>
        <div className="title-bar" data-responsive-toggle="realEstateMenu" data-hide-for="small">

            <div className="title-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        <span className="title-bar-title"><img src="https://camunda.com/wp-content/uploads/2020/06/favicon.png?text=Camunda"/></span>
                    </li>
                </ul>
            </div>
            <div className="title-bar-right my-title-bar-right">
                <ul className="menu align-right">
                    <li>
                        <NavLink to={"./tasks"} className="button radius secondary small" style={{fontWeight: 'bold'}}>Tasks</NavLink>
                    </li>
                    <li>
                        <NavLink to={"."} className="button round small" style={{fontWeight: 'bold'}}>Home</NavLink>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    );
  }

}

module.exports = MarketingBar;
