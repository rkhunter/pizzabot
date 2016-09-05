import React from 'react';
import InboxItem from '../InboxItem';

class InboxPane extends React.Component {
  constructor(props) {
    super(props);
    this.renderInboxItem = this.renderInboxItem.bind(this);
    this.render = this.render.bind(this);
  }
  renderInboxItem(human, ukey) {
    return (
      <InboxItem
        key={ukey}
        index={human}
        details={this.props.humans[human]}
      />
    );
  }
  render() {
    return (
      <div id="inbox-pane">
        <h1>Inbox</h1>
        <table>
          <thead>
            <tr>
              <th>Chat Received</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.humans).map(this.renderInboxItem)}
          </tbody>
        </table>
      </div>
    );
  }
}

InboxPane.propTypes = {
  humans: React.PropTypes.object,
};

export default InboxPane;
