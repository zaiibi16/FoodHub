import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Alert,
} from 'react-native';
import normalized from 'rn-normalized';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from './AuthProvider';

import Title from './ui/Title';
import {Colors} from '../GlobalStyles/Colors';
import InputContainer from './ui/InputContainer';
import {signinWithButton, PrimaryButton} from './ui/Buttons';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const LoginForm = () => {
  const navigation = useNavigation();
  const {login, googleLogin, facebookLogin} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpHandler = () => {
    navigation.navigate('SignUp');
  };

  const resetPasswordHandler = () => {
    navigation.navigate('ResetPassword');
  };

  const signInHandler = () => {
    if (email === '' || password === '') {
      Alert.alert('Please enter email and password');
      return;
    }
    login(email, password);
  };

  const googleSigninHandler = () => {
    googleLogin();
  };

  const facebookSigninHandler = () => {
    Alert.alert('Coming soon');
    //facebookLogin();
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.form}>
        <Title text={'Login'} />
        <InputContainer label={'E-mail'} onChangeText={setEmail} />
        <InputContainer label={'Password'} onChangeText={setPassword} />
        <Pressable
          style={({pressed}) => [
            pressed && styles.pressed,
            {paddingVertical: deviceHeight / 65},
          ]}
          onPress={resetPasswordHandler}>
          <Text style={[styles.accountAlreadyText, {color: Colors.orange400}]}>
            Forgot Password?
          </Text>
        </Pressable>
        <View style={styles.button}>
          <PrimaryButton
            text={'LOGIN'}
            textColor={'white'}
            containerPaddingHorizontal={normalized(5)}
            onPress={signInHandler}
          />
        </View>
      </View>

      <View style={styles.accountAlreadyContainer}>
        <Text style={styles.accountAlreadyText}>Don't have an account?</Text>
        <Pressable
          style={({pressed}) => [pressed && styles.pressed]}
          onPress={signUpHandler}>
          <Text style={[styles.accountAlreadyText, {color: Colors.orange400}]}>
            Sign Up
          </Text>
        </Pressable>
      </View>

      <View style={styles.signupBox}>
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
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(16),
    lineHeight: normalized(16),
    color: Colors.gray300,
  },
  form: {
    //flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: deviceWidth / 10,
    paddingVertical: deviceHeight / 40,
  },
  accountAlreadyContainer: {
    //flex: 1,
    paddingVertical: deviceHeight / 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  accountAlreadyText: {
    color: Colors.textBlack300,
    fontSize: normalized(14),
    textAlign: 'center',
    paddingHorizontal: normalized(5),
  },
  pressed: {
    opacity: 0.5,
  },
  signinWithContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: deviceHeight / 50,
  },
  signupBox: {
    //flex: 1,
  },
  signintitle: {
    flexDirection: 'row',
    paddingTop: deviceHeight / 50,
  },
  signinText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(16),
    lineHeight: normalized(16),
    color: Colors.textBlack300,
    textAlign: 'center',
    paddingHorizontal: normalized(20),
  },
  lineTop: {
    borderBottomColor: Colors.textBlack200,
    borderBottomWidth: normalized(1),
    //borderTopWidth: 1,
    borderTopColor: 'white',
    paddingTop: normalized(10),
    flex: 1,
    opacity: 0.25,
  },
  lineBottom: {
    borderBottomColor: Colors.textBlack200,
    //borderBottomWidth: 1,
    borderTopWidth: normalized(1),
    borderTopColor: 'white',
    paddingTop: normalized(10),
    flex: 1,
    opacity: 0.25,
  },
});
