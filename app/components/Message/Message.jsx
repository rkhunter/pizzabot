import React from 'react';

class ConversationPane extends React.Component {
  render() {
    return <p>{this.props.who} said: "{this.props.text}"</p>;
  }
}

ConversationPane.propTypes = {
  who: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default ConversationPane;
