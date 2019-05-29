import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationControls from '../Components/NavigationControls'
import styles from '../styles';

export default class Screen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{...styles.container, backgroundColor:'#d8d8ff'}}>
       <View style={styles.pageContentContainer}
>
        <Text> Screen3 </Text>
        </View>
        <NavigationControls/>
       
      </View>
    );
  }
}


