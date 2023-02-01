import React from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import normalized from 'rn-normalized';
import {useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../GlobalStyles/Colors';
import {FilterButton} from './Buttons';

const deviceHeight = Dimensions.get('window').height;

const SearchBar = ({label, keyboardType}) => {
  const [isFocused, setIsFocused] = useState(false);
  const focusedHandler = () => {
    setIsFocused(true);
  };
  const focusClosedHandler = () => {
    setIsFocused(false);
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
      <View style={[styles.searchBoxContainer, borderHighlight]}>
        <Ionicons name="search" color={Colors.textBlack300} size={14} />
        <TextInput
          style={[styles.inputText, borderHighlight]}
          autoCorrect={false}
          on
          onFocus={focusedHandler}
          onEndEditing={focusClosedHandler}
          keyboardType={keyboardType}
          placeholder={'Find for food or restaurants......'}
          placeholderTextColor={Colors.textBlack300}></TextInput>
      </View>
      <FilterButton />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBoxContainer: {
    borderColor: Colors.gray100,
    borderWidth: normalized(0.7),
    borderRadius: normalized(12),
    backgroundColor: 'white',
    elevation: 1,
    paddingHorizontal: normalized(16),
    paddingVertical: deviceHeight / 80,
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: normalized(14),
    color: Colors.textBlack300,
    padding: 0,
    paddingLeft: 10,
  },
  focused: {
    borderColor: Colors.orange400,
  },
});
