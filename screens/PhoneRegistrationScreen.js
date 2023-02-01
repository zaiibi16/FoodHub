import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  StatusBar,
  Text,
} from 'react-native';
import normalized from 'rn-normalized';

import DoubleCircle from '../assets/elements/DoubleCircle.svg';
import SingleCircle from '../assets/elements/SingleCircle.svg';
import Title from '../components/ui/Title';
import {Colors} from '../GlobalStyles/Colors';
import InputContainer from '../components/ui/InputContainer';
import {PrimaryButton} from '../components/ui/Buttons';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const PhoneRegistrationScreen = ({navigation}) => {
  const sendHandler = () => {
    navigation.navigate('VerificationCode');
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
              <Title text={'Registration'} />
              <Text style={styles.subHeadingText}>
                Enter your phone number to verify your account
              </Text>
            </View>
            <InputContainer keyboardType={'number-pad'} />
            <View style={styles.buttonContainer}>
              <PrimaryButton text="SEND" onPress={sendHandler} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default PhoneRegistrationScreen;

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
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: deviceWidth / 10,
  },
});
