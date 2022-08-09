/**
 * @author Paul Lungu
 * @type {{DOM, PropTypes, createElement, isValidElement, version, __spread, PureComponent, createMixin, createClass, Children, Component, createFactory, cloneElement}}
 */

'use strict';

// tag::nodeModules[]
const React = require('react');

// tag::customComponents
const FormViewer = require('FormViewer');

// tag::vars[]
// end::vars[]

class CamundaForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      container: {},
      data: {},
      form: {},
      schema: {},
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
      this.setState({
        schema: {
          components: [
            {
              key: 'creditor',
              label: 'Creditor',
              type: 'textfield',
              validate: {
                required: true
              }
            }
          ]
        },
        data: {
          creditor: 'John Doe Company'
        },
      });
  }

  render() {
    console.log("Task=>CamundaForm=>Render::Form: "+JSON.stringify(this.props.form));
    return (
        <FormViewer schema={this.state.schema} />
    );
  }
}

module.exports = CamundaForm;
