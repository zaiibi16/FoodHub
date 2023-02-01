import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  Pressable,
  Alert,
} from 'react-native';
import normalized from 'rn-normalized';

import DoubleCircle from '../assets/elements/DoubleCircle.svg';
import SingleCircle from '../assets/elements/SingleCircle.svg';
import Title from '../components/ui/Title';
import {Colors} from '../GlobalStyles/Colors';
import OTPForm from '../components/OTPForm';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const VerificationCodeScreen = () => {
  const resendCodeHaandler = () => {
    Alert.alert('Code Resent Successfully');
  };
  return (
    <ScrollView overScrollMode="never" style={{backgroundColor: 'white'}}>
      <KeyboardAvoidingView
        style={{
          height:
            Platform.OS === 'android'
              ? Dimensions.get('window').height - StatusBar.currentHeight
              : '100%',
        }}
        behavior="padding">
        <View style={styles.rootContainer}>
          <View style={styles.topElements}>
            <DoubleCircle
              width={deviceWidth * 0.35}
              height={deviceHeight * 0.1}
            />
            <SingleCircle
              width={deviceWidth * 0.15}
              height={deviceHeight * 0.1}
            />
          </View>
          <View style={styles.verificationContainer}>
            <View>
              <Title text={'Verification Code'} />
              <Text style={styles.subHeadingText}>
                Please type the verification code sent to email
              </Text>
            </View>
            <OTPForm />
            <View style={styles.resendCodeContainer}>
              <Text style={styles.resendCodeText}>I don’t recevie a code!</Text>
              <Pressable
                style={({pressed}) => [pressed && styles.pressed]}
                onPress={resendCodeHaandler}>
                <Text
                  style={[styles.resendCodeText, {color: Colors.orange400}]}>
                  Please resend
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default VerificationCodeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingBottom: deviceHeight / 10,
  },
  topElements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  verificationContainer: {
    flex: 1,
    paddingHorizontal: normalized(30),
    paddingTop: deviceHeight / 20,
    justifyContent: 'space-between',
  },
  subHeadingText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(16),
    lineHeight: normalized(16),
    color: Colors.gray300,
    paddingVertical: deviceHeight / 50,
    paddingRight: deviceWidth / 8,
  },
  resendCodeContainer: {
    paddingVertical: deviceHeight / 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resendCodeText: {
    color: Colors.textBlack300,
    fontSize: normalized(14),
    textAlign: 'center',
    paddingHorizontal: normalized(5),
  },
  pressed: {
    opacity: 0.5,
  },
});
