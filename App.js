import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.navigator initialRootName="home" screenOptions={{headerShown: false}}>
        <Stack.screen name="home" component={HomeScreen}/>
        <Stack.screen name="ISS" component={IssLocationScreen}/>
        <Stack.screen name="meteors" component={MeteorScreen}/>

      </Stack.navigator>
    </NavigationContainer>
    
  );
}

export default App

