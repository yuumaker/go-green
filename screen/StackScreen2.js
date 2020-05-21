import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  AsyncStorage
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ActivityScreen from './ActivityScreen'
import DetailScreen from './ActivityContentScreen'
//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 
//custom components imports 
const PERSISTENCE_KEY2 = "nav2";
const Stack = createStackNavigator();

const StackScreen2 = (props) => {
  
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY2);
        const state = JSON.parse(savedStateString);
        // Load our initial navigation state
        setInitialNavigationState(state);

        
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {

  
    return (
        
        <NavigationContainer
        initialState={initialNavigationState}
        onStateChange={(state)=>
            AsyncStorage.setItem(PERSISTENCE_KEY2, JSON.stringify(state))}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Activity" component={ActivityScreen} />
          <Stack.Screen name="ActDetail" component={DetailScreen} />    
        </Stack.Navigator>
      </NavigationContainer>

    )
  }

}

export default StackScreen2;

const styles = StyleSheet.create({
  
});