import React, { Component } from 'react';
import AFriend from './AFriend';

class Friends extends Component {
  render() {
    return (
      <div style={friendStyle}>
        {this.props.friends.map(friend => (
          <AFriend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}

export default Friends;

const friendStyle = {
  display: 'grid',
  gridAutoRows: '1fr',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gridGap: '1rem'
};
