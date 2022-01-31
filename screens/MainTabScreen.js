import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="white"
    barStyle={{ backgroundColor: 'white' }}
  >
    <Tab.Screen

      name="Home"
      component={HomeStackScreen}


      options={{
        keyboardHidesTabBar: true,
        tabBarColor: 'white',
        // tabBarIcon: ({ color }) => (
        //   <Icon name="ios-home" color={color} size={26} />
        // ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#C4C4C4',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Resturant Name',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#C4C4C4" onPress={() => navigation.openDrawer()}></Icon.Button>
      ),
      headerRight: () => (
        <Image
          style={styles.tinyLogo}
          source={require('../assets/logo.png')}
        /> )
    }} />
        

  </HomeStack.Navigator>
);

// const DetailsStackScreen = ({navigation}) => (
// <DetailsStack.Navigator screenOptions={{
//         headerStyle: {
//         backgroundColor: '#1f65ff',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//         fontWeight: 'bold'
//         }
//     }}>
//         <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
//         headerLeft: () => (
//             <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//         }} />
// </DetailsStack.Navigator>
// );

const styles = StyleSheet.create({
  tinyLogo: {
    marginRight:20,
    width: 30,
    height: 40,
  },
});