import React from 'react';

import Message from '../Message';

import sample from '../../sample-data';

class ConversationPane extends React.Component {
  constructor(props) {
    super(props);
    this.loadConversationData = this.loadConversationData.bind(this);
  }
  // Handle when user navigates
  // to /conversation/:human
  componentWillMount() {
    this.loadConversationData(this.props.params.human);
  }
  // Handle case when user navigates
  // from /conversation/Rami to /conversation/Jeremy
  componentWillReceiveProps(nextProps) {
    this.loadConversationData(nextProps.params.human);
  }
  loadConversationData(human) {
    this.setState(
      {
        conversation: sample.humans[human].conversations,
      }
    );
  }
  renderMessage(conversation, ukey) {
    return (
      <Message
        key={ukey}
        who={conversation.who}
        text={conversation.text}
        time={conversation.time.getTime()}
      />
    );
  }
  render() {
    return (
      <div id="conversation-pane">
        <h1>Conversation</h1>
        <h3>{this.props.params.human}</h3>
        <div id="messages">
          {this.state.conversation.map(this.renderMessage)}
        </div>
      </div>
    );
  }
}

ConversationPane.propTypes = {
  conversation: React.PropTypes.array,
  params: React.PropTypes.object,
};

export default ConversationPane;
