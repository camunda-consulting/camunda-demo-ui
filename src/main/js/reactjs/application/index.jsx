import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <h2>Demo Applications</h2>
    <ul>
      <li><a href={"/app.html"}>Use Case Demonstration</a></li>
      <li><a href={"/login.html"}>Login Page using Camunda Forms</a></li>
    </ul>
  </div>,
  document.getElementById('react')
);
