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

import HomeScreen from './HomeScreen'
import TrashScreen from './TrashScreen'
//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 
const PERSISTENCE_KEY = "stage";
const Stack = createStackNavigator();

function StackScreen(props){
  
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  
  //const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
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
            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
          }
        >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home1" component={HomeScreen} />
          <Stack.Screen name="Detail" component={TrashScreen} />    
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}


export default StackScreen;

const styles = StyleSheet.create({
  
});