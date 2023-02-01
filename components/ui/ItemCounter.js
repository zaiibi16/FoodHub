import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import {Colors} from '../../GlobalStyles/Colors';
import normalized from 'rn-normalized';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const ItemCounter = ({counter, setCounter}) => {
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <Pressable style={styles.textContainerMinus} onPress={decrementCounter}>
        <Text style={styles.textMinus}>-</Text>
      </Pressable>
      <Text style={styles.counter}>{counter}</Text>
      <Pressable style={styles.textContainerPlus} onPress={incrementCounter}>
        <Text style={styles.textPlus}>+</Text>
      </Pressable>
    </View>
  );
};

export default ItemCounter;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPlus: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(30),
    color: 'white',
    lineHeight: normalized(32),
  },
  textMinus: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(30),
    color: Colors.orange400,
    lineHeight: normalized(30),
  },
  textContainerPlus: {
    width: deviceWidth / 12,
    height: deviceWidth / 12,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: Colors.orange400,
    justifyContent: 'center',
    elevation: 10,
    shadowColor: Colors.orange400,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  textContainerMinus: {
    width: deviceWidth / 12,
    height: deviceWidth / 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.orange400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: normalized(20),
    color: Colors.textBlack300,
    lineHeight: normalized(22),
    paddingHorizontal: 10,
  },
});
