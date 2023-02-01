import React, {useContext} from 'react';
import {
  Dimensions,
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  Keyboard,
  Platform,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import normalized from 'rn-normalized';
import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AuthContext} from './AuthProvider';

import HomeTab from './HomeTabs';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DeliveryAddressScreen from '../screens/DeliveryAddressScreen';
import PaymentMethodsScreen from '../screens/PaymentMethodsScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HelpandFaqScreen from '../screens/HelpandFaqScreen';

import {Colors} from '../GlobalStyles/Colors';
import {
  HeaderLeftButton,
  DrawerLogoutButton,
  HeaderRightProfileButton,
} from './ui/Buttons';

const Drawer = createDrawerNavigator();

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const DrawerContent = props => {
  const {user, logout} = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
    Keyboard.dismiss();
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} overScrollMode="never">
        <View>
          <View style={styles.profileContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/dp.png')}
                style={styles.image}
              />
            </View>
            <Text style={styles.nameText}>
              {user !== null && user.displayName}
            </Text>
            <Text style={styles.emailText}>{user !== null && user.email}</Text>
          </View>
          <View style={{paddingTop: deviceHeight / 30}}>
            <DrawerItemList {...props} />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.logoutButton}>
        <DrawerLogoutButton
          containerPaddingVertical={deviceHeight / 80}
          containerPaddingHorizontal={deviceWidth / 50}
          text={'Log Out'}
          onPress={logoutHandler}
        />
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      backBehavior="firstRoute"
      screenOptions={{
        drawerType: 'slide',
        drawerActiveBackgroundColor: Colors.orange100,
        drawerActiveTintColor: Colors.orange400,
        drawerInactiveTintColor: Colors.textBlack100,
        drawerLabelStyle: {
          fontFamily: 'SofiaPro-Medium',
        },
        swipeEnabled: false,
        headerStyle: {height: deviceHeight / 10},
      }}>
      <Drawer.Screen
        name="HomeTabs"
        component={HomeTab}
        options={() => ({
          headerShown: false,
          drawerIcon: ({color, size}) => {
            return <Ionicon name="home" size={size} color={color} />;
          },
          drawerLabel: 'Home',
        })}
      />
      <Drawer.Screen
        name="MyOrders"
        component={MyOrdersScreen}
        options={{
          headerTitle: '',
          drawerLabel: 'My Orders',
          headerTransparent: true,
          drawerIcon: ({color, size}) => {
            return <Ionicon name="fast-food" size={size} color={color} />;
          },
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
          headerStyle: {
            height:
              Platform.OS === 'ios' ? deviceHeight / 6 : deviceHeight / 15,
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          headerTitle: '',
          headerTransparent: true,
          drawerIcon: ({color, size}) => {
            return <Ionicon name="person" size={size} color={color} />;
          },
          headerLeft: () => {
            return <HeaderLeftButton />;
          },
          headerLeftContainerStyle: {
            paddingLeft: normalized(20),
            justifyContent: 'center',
          },
          drawerLabel: 'My Profile',
          headerStyle: {
            height:
              Platform.OS === 'ios' ? deviceHeight / 6 : deviceHeight / 15,
          },
        })}
      />
      <Drawer.Screen
        name="DeliveryAddress"
        component={DeliveryAddressScreen}
        options={() => ({
          headerTitle: '',
          headerTransparent: true,
          drawerIcon: ({color, size}) => {
            return <Ionicon name="location" size={size} color={color} />;
          },
          headerLeft: () => {
            return <HeaderLeftButton />;
          },
          headerLeftContainerStyle: {
            paddingLeft: normalized(20),
            justifyContent: 'center',
          },
          drawerLabel: 'Delivery Address',
        })}
      />
      <Drawer.Screen
        name="PaymentMethods"
        component={PaymentMethodsScreen}
        options={() => ({
          headerTitle: '',
          headerTransparent: true,
          drawerIcon: ({color, size}) => {
            return <Ionicon name="card" size={size} color={color} />;
          },
          headerLeft: () => {
            return <HeaderLeftButton />;
          },
          headerLeftContainerStyle: {
            paddingLeft: normalized(20),
            justifyContent: 'center',
          },
          drawerLabel: 'Payment Methods',
        })}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUsScreen}
        options={() => ({
          headerTitle: '',
          headerTransparent: true,
          drawerIcon: ({color, size}) => {
            return <FontAwesome name="envelope" size={size} color={color} />;
          },
          headerLeft: () => {
            return <HeaderLeftButton />;
          },
          headerLeftContainerStyle: {
            paddingLeft: normalized(20),
            justifyContent: 'center',
          },
          drawerLabel: 'Contact Us',
        })}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => ({
          headerTitle: '',
          headerTransparent: true,
          drawerIcon: ({color, size}) => {
            return <Ionicon name="settings" size={size} color={color} />;
          },
          headerLeft: () => {
            return <HeaderLeftButton />;
          },
          headerLeftContainerStyle: {
            paddingLeft: normalized(20),
            justifyContent: 'center',
          },
          drawerLabel: 'Settings',
        })}
      />
      <Drawer.Screen
        name="HelpandFaq"
        component={HelpandFaqScreen}
        options={() => ({
          headerTitle: '',
          headerTransparent: true,
          drawerIcon: ({color, size}) => {
            return (
              <MaterialIcons name="help-center" size={size} color={color} />
            );
          },
          headerLeft: () => {
            return <HeaderLeftButton />;
          },
          headerLeftContainerStyle: {
            paddingLeft: normalized(20),
            justifyContent: 'center',
          },
          drawerLabel: 'Helps & FAQs',
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  profileContainer: {
    paddingLeft: deviceWidth / 20,
    paddingTop: deviceHeight / 30,
  },
  imageContainer: {
    borderRadius: deviceWidth / 10,
    overflow: 'hidden',
    width: deviceWidth / 5,
    height: deviceWidth / 5,
  },
  image: {
    width: deviceWidth / 5,
    height: deviceWidth / 5,
  },
  nameText: {
    paddingTop: deviceHeight / 60,
    fontFamily: 'SofiaPro-Bold',
    fontSize: normalized(20),
    lineHeight: normalized(20),
    color: Colors.textBlack300,
  },
  emailText: {
    paddingTop: deviceHeight / 200,
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(14),
    lineHeight: normalized(14),
    color: Colors.gray300,
  },
  drawerItemContainer: {
    paddingTop: deviceHeight / 30,
  },
  labelStyle: {
    paddingTop: deviceHeight / 60,
    fontFamily: 'SofiaPro-Medium',
    fontSize: normalized(14),
    lineHeight: normalized(14),
    color: Colors.textBlack300,
  },
  logoutButton: {
    paddingVertical: deviceHeight / 30,
    paddingLeft: deviceWidth / 20,
    paddingRight: deviceWidth / 3,
  },
});
