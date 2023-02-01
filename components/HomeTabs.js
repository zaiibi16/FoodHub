import React from 'react';
import {Dimensions, Keyboard, StyleSheet, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import normalized from 'rn-normalized';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import AddNewAddressScreen from '../screens/AddNewAddressScreen';
import CartScreen from '../screens/CartScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import {HeaderLeftButton, HeaderRightProfileButton} from './ui/Buttons';

import {Colors} from '../GlobalStyles/Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const BottomTabs = createBottomTabNavigator();

const HomeTab = () => {
  const navigation = useNavigation();

  const drawerHandler = () => {
    navigation.openDrawer();
    Keyboard.dismiss();
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white'}}
      edges={['right', 'top', 'left']}>
      <BottomTabs.Navigator
        screenOptions={({navigation}) => ({
          tabBarColor: 'white',
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.orange400,
          tabBarInactiveTintColor: Colors.gray200,
          tabBarHideOnKeyboard: true,
          //headerShown: false,
        })}>
        <BottomTabs.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicon name="compass" color={color} size={size} />
            ),
            title: false,
            headerTransparent: true,
            headerLeft: () => {
              return <HeaderLeftButton icon={'menu'} onPress={drawerHandler} />;
            },
            headerLeftContainerStyle: {
              paddingLeft: normalized(20),
              justifyContent: 'center',
            },
            headerRight: () => {
              return <HeaderRightProfileButton />;
            },
            headerRightContainerStyle: {
              paddingRight: normalized(20),
              justifyContent: 'center',
            },
            headerStyle: styles.header,
          }}
        />
        <BottomTabs.Screen
          name="AddNewAddressScreen"
          component={AddNewAddressScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicon name="location" color={color} size={size} />
            ),
            title: 'Add new address',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'SofiaPro-Medium',
              color: Colors.textBlack300,
            },
            tabBarStyle: {display: 'none'},
            headerTransparent: true,
            headerLeft: () => {
              return <HeaderLeftButton />;
            },
            headerLeftContainerStyle: {
              paddingLeft: normalized(20),
              justifyContent: 'center',
            },
            headerStyle: styles.header,
          }}
        />
        <BottomTabs.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="shopping-bag" color={color} size={size} />
            ),
            title: 'Cart',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'SofiaPro-Medium',
              color: Colors.textBlack300,
            },
            tabBarStyle: {display: 'none'},
            headerTransparent: true,
            headerLeft: () => {
              return <HeaderLeftButton />;
            },
            headerLeftContainerStyle: {
              paddingLeft: normalized(20),
              justifyContent: 'center',
            },
            headerStyle: styles.header,
          }}
        />
        <BottomTabs.Screen
          name="FavouritesScreen"
          component={FavouritesScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicon name="heart" color={color} size={size} />
            ),
            title: 'Favourites',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'SofiaPro-Medium',
              color: Colors.textBlack300,
            },
            tabBarStyle: {display: 'none'},
            headerTransparent: true,
            headerLeft: () => {
              return <HeaderLeftButton />;
            },
            headerLeftContainerStyle: {
              paddingLeft: normalized(20),
              justifyContent: 'center',
            },
            headerRight: () => {
              return <HeaderRightProfileButton />;
            },
            headerRightContainerStyle: {
              paddingRight: normalized(20),
              justifyContent: 'center',
            },
            headerStyle: styles.header,
          }}
        />
        <BottomTabs.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <FontAwesome5 name="bell" color={color} size={size} />
            ),
            headerTransparent: true,
            title: 'Notifications',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'SofiaPro-Medium',
              color: Colors.textBlack300,
            },
          }}
        />
      </BottomTabs.Navigator>
    </SafeAreaView>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  header: {
    height: deviceHeight / 15,
  },
});
