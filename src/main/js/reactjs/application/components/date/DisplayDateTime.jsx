var React =  require('react');
var ReactDOM = require('react-dom');

class DisplayDateTime extends React.Component {

  render: function() {
    var newDate = "";
    if (this.props.date !== null){
      var sdate = new Date(this.props.date);
      newDate = (sdate.getMonth()+1) + "-" + sdate.getDate()  + "-" + sdate.getFullYear() + "::" + sdate.getHours() + ":" + sdate.getMinutes();
    }

     return (
         <span>{newDate}</span>
     );
  },

}

module.exports = DisplayDateTime;
