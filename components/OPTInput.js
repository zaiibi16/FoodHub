import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';
import {useRef, useState, useEffect} from 'react';

import normalized from 'rn-normalized';

import {Colors} from '../GlobalStyles/Colors.js';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const OTPInput = ({
  code,
  setCode,
  maximumLength,
  setIsPinReady,
  isPinReady,
}) => {
  const [codeLength, setCodeLength] = useState(0);
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef();

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    if (code.length === maximumLength) {
      setIsPinReady(true);
    } else {
      setIsPinReady(false);
    }
  }, [code]);

  const boxDigit = (_, index) => {
    const emptyInput = '';
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    let focused = {borderColor: Colors.gray200};
    if (isInputBoxFocused && isValueFocused) {
      focused = {borderColor: Colors.orange400};
    } else {
      focused = {borderColor: Colors.gray200};
    }

    return (
      <View key={index} style={[styles.splitBox, focused]}>
        <Text style={styles.OTPText}>{digit}</Text>
      </View>
    );
  };

  return (
    <View style={styles.OTPContainer}>
      <Pressable onPress={handleOnPress} style={styles.splitBoxContainer}>
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        style={styles.hiddenTextInput}
        keyboardType="number-pad"
      />
    </View>
  );
};

export default OTPInput;

const styles = StyleSheet.create({
  OTPText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: normalized(18),
    color: Colors.orange400,
    textAlign: 'center',
  },
  OTPContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  splitBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  splitBox: {
    borderColor: Colors.gray200,
    borderWidth: 1,
    borderRadius: 5,
    minWidth: '20%',
    paddingVertical: 15,
  },
  hiddenTextInput: {
    position: 'absolute',
    opacity: 0,
  },
});
