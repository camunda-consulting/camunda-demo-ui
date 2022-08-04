'use strict';

// tag::vars[]
const React = require('react');
const ReactDOM = require('react-dom/client')
const Parent = require('Parent');


require('foundation-sites/dist/css/foundation.min.css');

const root = ReactDOM.createRoot(document.getElementById("react"));
root.render(<Parent />);
// end::render[]
