import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Alert,
} from 'react-native';
import normalized from 'rn-normalized';
import LinearGradient from 'react-native-linear-gradient';
import {useContext} from 'react';

import {AuthContext} from '../components/AuthProvider';

import {Colors} from '../GlobalStyles/Colors';
import {signinWithButton, PrimaryButton} from '../components/ui/Buttons';

const WelcomeScreen = ({navigation}) => {
  const {googleLogin, facebookLogin} = useContext(AuthContext);

  const signUpWithMobileorPhoneHandler = () => {
    navigation.navigate('SignUp');
  };

  const signInHandler = () => {
    navigation.navigate('Login');
  };

  const googleSigninHandler = () => {
    googleLogin();
  };

  const facebookSigninHandler = () => {
    Alert.alert('Coming soon');
    //facebookLogin();
  };

  return (
    <ImageBackground
      source={require('../assets/images/welcomebg.png')}
      resizeMode="cover"
      style={{flex: 1}}>
      <LinearGradient
        colors={['rgba(73, 77, 99, 0)', 'rgba(25, 27, 47, 100)']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to</Text>
          <Text
            style={[
              styles.titleText,
              {color: Colors.orange400, fontSize: normalized(48)},
            ]}>
            FoodHub
          </Text>
          <Text style={styles.subtitleText}>
            Your favourite foods delivered fast at your door.
          </Text>
        </View>

        <View style={styles.signinContainer}>
          <View style={styles.signintitle}>
            <View style={{flex: 1}}>
              <View style={styles.lineTop}></View>
              <View style={styles.lineBottom}></View>
            </View>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text style={styles.signinText}>sign in with</Text>
            </View>
            <View style={{flex: 1}}>
              <View style={styles.lineTop}></View>
              <View style={styles.lineBottom}></View>
            </View>
          </View>
          <View style={styles.signinWithContainer}>
            {signinWithButton({
              text: 'FACEBOOK',
              icon: 'facebook',
              color: '#3b5998',
              onPress: facebookSigninHandler,
            })}
            {signinWithButton({
              text: 'GOOGLE',
              icon: 'google',
              color: '#DB4437',
              onPress: googleSigninHandler,
            })}
          </View>
          <View style={{paddingVertical: normalized(10)}}>
            {PrimaryButton({
              text: 'Start with email',
              textColor: 'white',
              containerColor: 'rgba(255, 255, 255, 0.21)',
              containerPaddingVertical: normalized(15),
              containerBorderRadius: normalized(40),
              containerBorder: normalized(1),
              borderColor: 'white',
              onPress: signUpWithMobileorPhoneHandler,
            })}
          </View>
          <View style={styles.accountAlreadyContainer}>
            <Text style={styles.accountAlreadyText}>
              Already have an account?
            </Text>
            <Pressable
              style={({pressed}) => [pressed && styles.pressed]}
              onPress={signInHandler}>
              <Text
                style={[
                  styles.accountAlreadyText,
                  {textDecorationLine: 'underline'},
                ]}>
                Sign In
              </Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingHorizontal: normalized(30),
    justifyContent: 'space-between',
    paddingTop: normalized(100),
    paddingBottom: normalized(20),
  },
  titleContainer: {
    //paddingTop: normalized(130),
    //flex: 1,
  },
  titleText: {
    fontFamily: 'SofiaPro-Bold',
    color: Colors.textBlack400,
    fontSize: normalized(53),
    lineHeight: normalized(68),
  },
  subtitleText: {
    fontFamily: 'SofiaPro-Regular',
    color: Colors.textBlack300,
    fontSize: normalized(18),
    lineHeight: normalized(27),
    opacity: 0.87,
    paddingRight: normalized(50),
    paddingTop: normalized(20),
  },
  signinContainer: {
    //flex: 1,
    //paddingTop: normalized(150),
  },
  signintitle: {
    flexDirection: 'row',
  },
  signinText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(16),
    lineHeight: normalized(16),
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: normalized(20),
  },
  lineTop: {
    borderBottomColor: 'white',
    borderBottomWidth: normalized(1),
    //borderTopWidth: 1,
    borderTopColor: 'white',
    paddingTop: normalized(10),
    flex: 1,
    opacity: 0.25,
  },
  lineBottom: {
    borderBottomColor: 'white',
    //borderBottomWidth: 1,
    borderTopWidth: normalized(1),
    borderTopColor: 'white',
    paddingTop: normalized(10),
    flex: 1,
    opacity: 0.25,
  },
  signinWithContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: normalized(10),
  },
  accountAlreadyContainer: {
    paddingTop: normalized(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  accountAlreadyText: {
    color: 'white',
    fontSize: normalized(16),
    textAlign: 'center',
    paddingHorizontal: normalized(5),
  },
  pressed: {
    opacity: 0.5,
  },
});
