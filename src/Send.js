import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Send extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.text.trim().length === 0 && nextProps.text.trim().length > 0 || this.props.text.trim().length > 0 && nextProps.text.trim().length === 0) {
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    if (this.props.text.trim().length > 0) {
      return (
        <TouchableOpacity
          style={[styles.container, this.props.containerStyle]}
          onPress={() => {
            this.props.onSend({text: this.props.text.trim()}, true);
          }}
          accessibilityTraits="button"
        >
          <Text style={[styles.text, this.props.textStyle]}>{this.props.label}</Text>
        </TouchableOpacity>
      );
    }
    return <View/>;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 28,
    justifyContent: 'flex-end',
    backgroundColor: '#ff616f',
    borderRadius: 20,
    marginRight: 5,
    marginBottom: 8,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    backgroundColor: 'transparent',
    marginBottom: 5,
    marginLeft: 8,
    marginRight: 8,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

Send.defaultProps = {
  text: '',
  onSend: () => {},
  label: '发送',
  containerStyle: {},
  textStyle: {},
};

Send.propTypes = {
  text: React.PropTypes.string,
  onSend: React.PropTypes.func,
  label: React.PropTypes.string,
  containerStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
};
