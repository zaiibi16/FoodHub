import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, StyleSheet, Text, View} from 'react-native';
import OTPInput from './OPTInput.js';

const OTPForm = () => {
  const [otpCode, setOTPCode] = useState('');
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  const navigation = useNavigation();

  const checkOTP = () => {
    if (otpCode === '1234') {
      navigation.navigate('Home');
    } else {
      Alert.alert('Incorrect');
      setOTPCode('');
    }
  };

  useEffect(() => {
    if (isPinReady) {
      checkOTP();
    }
  }, [isPinReady]);

  return (
    <View style={styles.container}>
      <OTPInput
        code={otpCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
        isPinReady={isPinReady}
      />
    </View>
  );
};

export default OTPForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
