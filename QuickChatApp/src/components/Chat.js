import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';

class Chat extends React.Component {

  componentWillReceiveProps(name) {
    props.name = props.name || '';
  }

  render() {
    return (
      <View>
        <Text>
          Hello {this.props.name}
        </Text>
      </View>
    );
  }
}


Chat.defaultProps = {
  name: 'John',
};



export default Chat;
