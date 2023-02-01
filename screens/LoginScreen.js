import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import normalized from 'rn-normalized';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import DoubleCircle from '../assets/elements/DoubleCircle.svg';
import SingleCircle from '../assets/elements/SingleCircle.svg';
import LoginForm from '../components/LoginForm';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const SignInScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        bounces={false}>
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
          <View style={styles.signinContainer}>
            <LoginForm />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: deviceHeight / 70,
    backgroundColor: 'white',
  },
  topElements: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signinContainer: {
    flex: 1,
    paddingHorizontal: normalized(30),
    paddingTop: deviceHeight / 20,
  },
});
