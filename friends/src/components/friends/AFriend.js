import React from 'react';
import PropTypes from 'prop-types';

const AFriend = ({ friend: { name, age, email } }) => {
  return (
    <div className="card bg-dark text-center">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="small">age: {age}</p>
        <p className="small">email: {email}</p>
      </div>
    </div>
  );
};

AFriend.propTypes = {
  friend: PropTypes.object.isRequired
};

export default AFriend;
