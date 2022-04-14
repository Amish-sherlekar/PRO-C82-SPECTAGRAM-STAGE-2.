import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from "./Navigation/DrawerNavigation"

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    );
  }
}