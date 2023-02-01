import {
  Pressable,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Keyboard,
} from 'react-native';
import normalized from 'rn-normalized';

import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../GlobalStyles/Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const headerTextButton = ({text}) => {
  return (
    <Pressable style={({pressed}) => [pressed && styles.pressed]}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export const signinWithButton = ({text, icon, color, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={onPress}>
      <View style={styles.signinWithContainer}>
        <FontAwesome5Brands
          name={icon}
          size={normalized(28)}
          color={color}
          style={{paddingRight: normalized(10)}}
        />
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.signinWithText}>{text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export const PrimaryButton = ({
  text = 'Button',
  textColor = 'white',
  containerColor = Colors.orange400,
  containerPaddingVertical = normalized(15),
  containerPaddingHorizontal = normalized(15),
  containerBorderRadius = normalized(40),
  containerBorder = normalized(1),
  borderColor = 'transparent',
  onPress,
}) => {
  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={onPress}>
      <View
        style={[
          styles.primaryContainer,
          {
            backgroundColor: containerColor,
            paddingVertical: containerPaddingVertical,
            borderRadius: containerBorderRadius,
            borderWidth: containerBorder,
            borderColor: borderColor,
            paddingHorizontal: containerPaddingHorizontal,
          },
        ]}>
        <Text style={[styles.primaryText, {color: textColor}]}>{text}</Text>
      </View>
    </Pressable>
  );
};

export const DrawerLogoutButton = ({
  text = 'Button',
  textColor = 'white',
  containerColor = Colors.orange400,
  containerPaddingVertical = normalized(15),
  containerPaddingHorizontal = normalized(15),
  containerBorderRadius = normalized(40),
  containerBorder = normalized(1),
  borderColor = 'transparent',
  onPress,
}) => {
  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={onPress}>
      <View
        style={[
          styles.primaryContainer,
          {
            backgroundColor: containerColor,
            paddingVertical: containerPaddingVertical,
            borderRadius: containerBorderRadius,
            borderWidth: containerBorder,
            borderColor: borderColor,
            paddingHorizontal: containerPaddingHorizontal,
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
        ]}>
        <View
          style={{
            padding: 3,
            borderRadius: 50,
            backgroundColor: 'white',
            alignItems: 'center',
          }}>
          <Ionicons name="power" color={Colors.orange400} size={20} />
        </View>
        <View>
          <Text style={[styles.primaryText, {color: textColor}]}>{text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export const AddToCartButton = ({
  text = 'ADD TO CART',
  textColor = 'white',
  containerColor = Colors.orange400,
  containerPaddingVertical = normalized(5),
  containerPaddingHorizontal = normalized(5),
  containerBorderRadius = normalized(50),
  containerBorder = normalized(1),
  borderColor = 'transparent',
  onPress,
}) => {
  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={onPress}>
      <View
        style={[
          styles.primaryContainer,
          {
            backgroundColor: containerColor,
            paddingVertical: containerPaddingVertical,
            borderRadius: containerBorderRadius,
            borderWidth: containerBorder,
            borderColor: borderColor,
            paddingHorizontal: containerPaddingHorizontal,
            paddingRight: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <View
          style={{
            width: deviceWidth / 8,
            height: deviceWidth / 8,
            borderRadius: 50,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome5Brands
            name="shopping-bag"
            color={Colors.orange400}
            size={20}
          />
        </View>
        <View>
          <Text style={[styles.primaryText, {color: textColor}]}>{text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export const HeaderLeftButton = ({icon, onPress}) => {
  const navigation = useNavigation();

  const goBackHandler = () => {
    navigation.goBack();
    Keyboard.dismiss();
  };

  let iconName;
  let onPressFun;

  if (icon) {
    iconName = icon;
  } else {
    iconName = 'chevron-back';
  }

  if (onPress) {
    onPressFun = onPress;
  } else {
    onPressFun = goBackHandler;
  }

  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={onPressFun}>
      <View style={styles.goBackContainer}>
        <Ionicons
          name={iconName}
          color={Colors.textBlack300}
          size={normalized(20)}
        />
      </View>
    </Pressable>
  );
};

export const HeaderRightProfileButton = () => {
  const navigation = useNavigation();

  const openProfileHandler = () => {
    navigation.navigate('Profile');
  };

  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={openProfileHandler}>
      <View style={styles.dpContainer}>
        <Image
          source={require('../../assets/images/dp.png')}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};

export const FilterButton = () => {
  const navigation = useNavigation();

  const openProfileHandler = () => {};

  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={openProfileHandler}>
      <View style={styles.filterContainer}>
        <FontAwesome name="sliders" color={Colors.orange400} size={20} />
      </View>
    </Pressable>
  );
};

export const FavouriteButton = ({onPress, isFavourite}) => {
  let bgColor = {backgroundColor: Colors.gray100};
  if (isFavourite) {
    bgColor = {backgroundColor: Colors.orange400};
  }
  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed]}
      onPress={onPress}>
      <View style={[styles.favouriteContainer, bgColor]}>
        <Ionicons name="heart" color={'white'} size={20} />
      </View>
    </Pressable>
  );
};

export const TextButton = ({text, underLine}) => {
  const line = {
    textDecorationLine: 'underline',
  };
  return (
    <Pressable style={({pressed}) => [pressed && styles.pressed]}>
      <Text style={[styles.textbuttonText, underLine && line]}>{text}</Text>
    </Pressable>
  );
};

export const SwitchButton = ({switchOption, setSwitchOption}) => {
  const switchOptionOneHandler = () => {
    setSwitchOption(1);
  };
  const switchOptionTwoHandler = () => {
    setSwitchOption(2);
  };

  return (
    <View style={styles.switchRootContainer}>
      <Pressable
        onPress={switchOptionOneHandler}
        style={[
          styles.switchButtonContainer,
          switchOption === 1
            ? {backgroundColor: Colors.orange400}
            : {backgroundColor: 'white'},
        ]}>
        <Text
          style={[
            styles.switchButtonText,
            switchOption === 1 ? {color: 'white'} : {color: Colors.orange200},
          ]}>
          Food Items
        </Text>
      </Pressable>
      <Pressable
        onPress={switchOptionTwoHandler}
        style={[
          styles.switchButtonContainer,
          switchOption === 2
            ? {backgroundColor: Colors.orange400}
            : {backgroundColor: 'white'},
        ]}>
        <Text
          style={[
            styles.switchButtonText,
            switchOption === 2 ? {color: 'white'} : {color: Colors.orange200},
          ]}>
          Restaurants
        </Text>
      </Pressable>
    </View>
  );
};

export const CrossButton = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [pressed && styles.pressed]}>
      <Ionicons name="close" size={26} color={Colors.orange400} />
    </Pressable>
  );
};

export const DpButton = ({onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [pressed && styles.pressed, styles.dpButton]}>
      <Ionicons
        name="camera"
        size={16}
        color={Colors.gray200}
        style={{alignSelf: 'center'}}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  headerTextContainer: {
    paddingVertical: normalized(5),
    paddingHorizontal: normalized(15),
    borderRadius: normalized(20),
    backgroundColor: 'white',
    alignContent: 'center',
  },
  headerText: {
    color: Colors.orange400,
    fontFamily: 'SofiaPro-Regular',
    textAlign: 'center',
    fontSize: normalized(12),
  },
  signinWithContainer: {
    flexDirection: 'row',
    paddingVertical: normalized(13),
    paddingHorizontal: normalized(17),
    borderRadius: normalized(40),
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: Colors.gray200,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  signinWithText: {
    color: Colors.textBlack400,
    fontFamily: 'SofiaPro-Regular',
  },
  primaryContainer: {
    paddingVertical: normalized(5),
    paddingHorizontal: normalized(15),
    borderRadius: normalized(20),
    backgroundColor: 'white',
    backgroundColor: Colors.orange400,
    elevation: 10,
    shadowOffset: {width: 0, height: 5},
    shadowColor: Colors.gray200,
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  primaryText: {
    color: 'white',
    fontFamily: 'SofiaPro-Regular',
    textAlign: 'center',
    fontSize: normalized(17),
  },
  goBackContainer: {
    paddingVertical: normalized(10),
    paddingHorizontal: normalized(10),
    borderRadius: normalized(12),
    backgroundColor: 'white',
    elevation: 1,
  },
  pressed: {
    opacity: 0.5,
  },
  image: {
    width: deviceWidth / 9,
    height: deviceWidth / 9,
  },
  dpContainer: {
    borderRadius: normalized(12),
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  filterContainer: {
    borderRadius: normalized(12),
    backgroundColor: 'white',
    paddingVertical: normalized(15),
    paddingHorizontal: normalized(15),
    elevation: 10,
    shadowColor: Colors.gray200,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  favouriteContainer: {
    width: 30,
    height: 30,
    borderRadius: normalized(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.gray100,
  },
  textbuttonText: {
    color: Colors.orange400,
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(12),
  },
  switchRootContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: deviceHeight / 25,
    borderColor: Colors.gray100,
    justifyContent: 'space-between',
    padding: 1,
  },
  switchButtonContainer: {
    alignItems: 'center',
    flex: 0.5,
    backgroundColor: 'white',
    borderRadius: deviceHeight / 25,
    paddingVertical: deviceHeight / 50,
  },
  switchButtonText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: normalized(14),
  },
  dpButton: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 60,
    justifyContent: 'center',
  },
});
