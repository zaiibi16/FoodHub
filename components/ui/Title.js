import {Text, StyleSheet} from 'react-native';
import normalized from 'rn-normalized';

import {Colors} from '../../GlobalStyles/Colors';

const Title = ({text, fontSize}) => {
  let style = {
    fontSize: normalized(36),
    lineHeight: normalized(36 + 2),
  };
  if (fontSize) {
    style = {
      fontSize: normalized(fontSize),
      lineHeight: normalized(fontSize + 2),
    };
  }
  return <Text style={[styles.title, style]}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SofiaPro-Bold',
    color: Colors.textBlack400,
    fontSize: normalized(36),
    lineHeight: normalized(36),
  },
});
