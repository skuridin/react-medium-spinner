var React         = require('react'),
    MediumSpinner = require('./index.jsx');

React.render(
  <MediumSpinner active={true} />,
  document.querySelector('#app')
);
