import React from 'react';
import { Link } from 'react-router';

class InboxItem extends React.Component {
  messageSummary(conversations) {
    const lastMessage = conversations.sort(this.sortByDate)[0];
    return `${lastMessage.who} said: ${lastMessage.text} @ ${lastMessage.time.toDateString()}`;
  }
  sortByDate(a, b) {
    if (a.time > b.time) {
      return -1;
    } else if (a.time < b.time) {
      return 1;
    }
    return 0;
  }
  render() {
    return (
      <tr>
        <td>
          <Link to={`/conversation/${encodeURIComponent(this.props.index)}`}>
            {this.messageSummary(this.props.details.conversations)}
          </Link>
        </td>
        <td>{this.props.index}</td>
        <td>{this.props.details.orders.sort(this.sortByDate)[0].status}</td>
      </tr>
    );
  }
}

InboxItem.propTypes = {
  details: React.PropTypes.object,
  index: React.PropTypes.string,
};

export default InboxItem;
