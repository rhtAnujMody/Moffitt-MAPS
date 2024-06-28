import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeAc from './Components/Screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SessionAc from './Components/Screens/Sessions';
import BadgesAc from './Components/Screens/Badges';
import WellnessAc from './Components/Screens/Wellness';
import SettingsAC from './Components/Screens/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './Components/Screens/LoginScreen'; // Import the LoginScreen component
import screenInScreen from './Components/Screens/ScreenInScreen';

const HomeD = ({ navigation }) => {
  return <HomeAc />;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
  <Stack.Screen options={{headerShown:false}} name="login" component={LoginScreen} /> 
  <Stack.Screen options={{headerShown:false}} name="app" component={AppTabNavigator} /> 
</Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const AppTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'settings') {
            iconName = 'settings';
          } else if (route.name === 'session') {
            iconName = 'book';
          } else if (route.name === 'wellness') {
            iconName = 'heart';
          } else if (route.name === 'badges') {
            iconName = 'disc';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#03588C',
        tabBarInactiveTintColor: '#484848',
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="home" component={HomeD} />
      <Tab.Screen options={{ headerShown: false }} name="session" component={SessionAc} />
      <Tab.Screen options={{ headerShown: false }} name="badges" component={BadgesAc} />
      <Tab.Screen options={{ headerShown: false }} name="wellness" component={WellnessAc} />
      <Tab.Screen options={{ headerShown: false }} name="settings" component={SettingsAC} />
      {/* <Tab.Screen options={{ headerShown: false }} name="sessiontest" component={screenInScreen} /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;