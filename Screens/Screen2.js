import React, { Component } from 'react';
import { Alert, View, Text } from 'react-native';
import NavigationControls from '../Components/NavigationControls';
import { NavigationEvents } from 'react-navigation';
import styles from '../styles';

export default class Screen2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  componentDidMount = () => {
    this.showAlert('componentDidMount');
  };

  showAlert = (string) => {
    Alert.alert(string);
  
  };

  render() {
    return (
      <View style={{ ...styles.container, backgroundColor: '#d8ffd8' }}>
        <View style={styles.pageContentContainer}>
          <Text> Screen2 </Text>
          <NavigationEvents
            onWillBlur={() => this.showAlert('onWillBlur')}
            onWillFocus={() => this.showAlert('onWillFocus')}
            onDidBlur={() => this.showAlert('onDidBlur')}
            onDidFocus={() => this.showAlert('onDidFocus')}
          />
        </View>
        <NavigationControls forward="Screen3" />
      </View>
    );
  }
}
