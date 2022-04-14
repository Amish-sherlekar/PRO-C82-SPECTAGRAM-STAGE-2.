import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import Feed from '../Screens/Feed';
import CreatePost from '../Screens/CreatePost';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = 'home';
            size = focused ? 25 : 18;
            color = focused ? '#e4f' : '#ea1'
          } else if (route.name === 'CreatePost') {
            iconName = 'add-circle';
            size = focused ? 25 : 18;
            color = focused ? '#e4f' : '#ea1'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      >
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icons: {
    width: RFValue(30),
    height: RFValue(30),
  },
});

export default BottomTabNavigator;
