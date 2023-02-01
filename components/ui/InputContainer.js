import React from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import normalized from 'rn-normalized';
import {useState} from 'react';

import {Colors} from '../../GlobalStyles/Colors';

const deviceHeight = Dimensions.get('window').height;

const InputContainer = ({label, keyboardType, onChangeText, value}) => {
  const [isFocused, setIsFocused] = useState(false);
  const focusedHandler = () => {
    setIsFocused(true);
  };
  const focusClosedHandler = () => {
    setIsFocused(false);
  };

  const setTextHandler = text => {
    onChangeText(text);
  };

  const borderHighlight = {borderColor: Colors.gray100};

  if (isFocused) {
    {
      borderHighlight.borderColor = Colors.orange400;
    }
  } else {
    borderHighlight.borderColor = Colors.gray100;
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.headingText}>{label}</Text>
      <TextInput
        style={[styles.inputText, borderHighlight]}
        autoCorrect={false}
        onChangeText={text => setTextHandler(text)}
        onFocus={focusedHandler}
        onEndEditing={focusClosedHandler}
        keyboardType={keyboardType}
        autoCapitalize={false}
        value={value}
      />
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: deviceHeight / 65,
  },
  headingText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(16),
    lineHeight: normalized(16),
    color: Colors.gray300,
    paddingBottom: normalized(10),
  },
  inputText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: normalized(18),
    color: Colors.textBlack300,
    borderColor: Colors.gray100,
    borderWidth: normalized(0.7),
    borderRadius: normalized(12),
    paddingVertical: deviceHeight / 50,
    backgroundColor: 'white',
    elevation: 10,
    shadowOffset: {width: 0, height: 5},
    shadowColor: Colors.gray200,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingHorizontal: normalized(12),
  },
  focused: {
    borderColor: Colors.orange400,
  },
});
