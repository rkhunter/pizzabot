import React from 'react';

class Store extends React.Component {
  getCount(status) {
    return (
      this.props.details.orders.filter(n => n.status === status).length
    );
  }
  render() {
    return (
      <li>
        <p>{this.props.index}</p>
        <p>Orders Confirmed: {this.getCount('Confirmed')}</p>
        <p>Orders In The Oven: {this.getCount('In The Oven')}</p>
        <p>Orders Delivered: {this.getCount('Delivered')}</p>
      </li>
    );
  }
}

Store.propTypes = {
  index: React.PropTypes.string,
  details: React.PropTypes.object,
};

export default Store;
