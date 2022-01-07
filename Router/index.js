import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import screen
import Home from '../src/screen/home';
import eksplor from '../src/screen/eksplor';
import play from '../src/screen/play';
import profile from '../src/screen/profile';
import eksplorDetail from '../src/screen/eksplor/eksplorDetail';
import homeDetail from '../src/screen/home/homeDetail';
import playDetail from '../src/screen/play/playDetail';
import profileDetail from '../src/screen/profile/profileDetail';
import DetailMovie from '../src/screen/detailMovie';
import {COLOR} from '../src/config/color';

//import icon
import Foundation from 'react-native-vector-icons/Foundation';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//Botom TAB
const MainApp = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={COLOR.black}
        translucent={true}
      />
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => (
              <Foundation name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="play"
          component={play}
          options={{
            tabBarIcon: ({color}) => (
              <IonIcons name="md-play-circle-outline" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="eksplor"
          component={eksplor}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="search" color={color} size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={profile}
          options={{
            tabBarIcon: ({color}) => (
              <IonIcons name="person-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

//Stack Screen
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="eksplorDetail"
        component={eksplorDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="homeDetail"
        component={homeDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="playDetail"
        component={playDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profileDetail"
        component={profileDetail}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="DetailMovie"
        component={DetailMovie}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
