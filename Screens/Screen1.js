import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationControls from '../Components/NavigationControls';
import styles from '../styles';

export default class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{...styles.container, backgroundColor:'#ffd8d8'}}>
        <View
          style={styles.pageContentContainer}
        >
          <Text> Screen1 </Text>
        </View>
        <NavigationControls forward="Screen2" />
      </View>
    );
  }
}

