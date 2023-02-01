import {StyleSheet, Text, View, Dimensions} from 'react-native';
import normalized from 'rn-normalized';

import {Colors} from '../../GlobalStyles/Colors';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const CostReceiptItem = ({text, cost, items}) => {
  if (items) {
  }
  return (
    <View style={styles.costSection}>
      <View style={styles.costContainer}>
        <Text style={styles.costName}>{text}</Text>
        {items && (
          <Text style={[styles.costCur, {paddingLeft: deviceWidth / 50}]}>
            ({items} items)
          </Text>
        )}
      </View>
      <View style={styles.costContainer}>
        <Text style={styles.costAmount}>{`$${cost.toFixed(2)}`}</Text>
        <Text style={styles.costCur}>USD</Text>
      </View>
    </View>
  );
};

export default CostReceiptItem;

const styles = StyleSheet.create({
  costSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: deviceHeight / 50,
  },
  costName: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: normalized(16),
    color: Colors.textBlack300,
  },
  costAmount: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: normalized(19),
    color: Colors.textBlack300,
  },
  costCur: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(14),
    color: Colors.textBlack100,
  },
  costContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
