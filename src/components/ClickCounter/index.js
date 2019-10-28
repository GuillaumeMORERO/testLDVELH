import React from 'react';
import PropTypes from 'prop-types';


const ClickCounter = (props) => {
  /* eslint-disable-next-line react/button-has-type */
  return <button onClick={props.onClick}>Cliquez-moi ! {props.count}</button>;
};

ClickCounter.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ClickCounter;
