import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../styles';

class NavigationControls extends Component {
  onBackPressed = () => {
    this.props.navigation.goBack();
  };
  onForwardPressed = () => {
    debugger;
    this.props.navigation.navigate(this.props.forward);
  };

  render() {
    return (
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onBackPressed}>
          <Text style={styles.arrowText}>{'<--'}</Text>
        </TouchableOpacity>
        {this.props.forward ? (
          <TouchableOpacity style={styles.buttonStyle} onPress={this.onForwardPressed}>
            <Text style={styles.arrowText}>{'-->'}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

export default withNavigation(NavigationControls);

