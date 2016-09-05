import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router } from 'react-router';

import InboxPane from './components/InboxPane';
import ConversationPane from './components/ConversationPane';
import StorePane from './components/StorePane';

import sample from './sample-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      humans: {},
      stores: {},
    };
    this.loadSampleData = this.loadSampleData.bind(this);
    this.render = this.render.bind(this);
  }
  // User navigates
  // to /conversation/
  componentWillMount() {
    if ('human' in this.props.params) {
      this.loadSampleData();
    }
  }
  loadSampleData() {
    this.setState(sample);
  }
  render() {
    return (
      <div>
        <div id="header" />
        <button onClick={this.loadSampleData}>Load Sample Data</button>
        <div className="container">
          <div className="column">
            <InboxPane humans={this.state.humans} />
          </div>
          <div className="column">
            {this.props.children || 'Select a conversation from Inbox'}
          </div>
          <div className="column">
            <StorePane stores={this.state.stores} />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
  params: React.PropTypes.object,
};

// eslint-disable-next-line no-undef
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/conversation/:human" component={ConversationPane} />
    </Route>
  </Router>, document.getElementById('main'));
