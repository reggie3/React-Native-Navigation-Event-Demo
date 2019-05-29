import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Screen1 from './Screens/Screen1'
import Screen2 from './Screens/Screen2'
import Screen3 from './Screens/Screen3'



const AppNavigator = createStackNavigator({
 Screen1,
 Screen2,
 Screen3
});

export default createAppContainer(AppNavigator);
