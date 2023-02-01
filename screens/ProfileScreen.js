import React from 'react';
import {useContext, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import normalized from 'rn-normalized';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import ProfileElement from '../assets/elements/ProfileElement.svg';
import {DpButton, PrimaryButton} from '../components/ui/Buttons';
import {Colors} from '../GlobalStyles/Colors';
import InputContainer from '../components/ui/InputContainer';

import {AuthContext} from '../components/AuthProvider';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const ProfileScreen = ({navigation}) => {
  const {user, update} = useContext(AuthContext);
  const [fullName, setFullName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);

  const successfulSave = () => {
    navigation.goBack();
  };
  const saveProfileHandler = () => {
    update(fullName, email, successfulSave);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        bounces={false}>
        <View style={styles.rootContainer}>
          <View style={{position: 'absolute'}}>
            <ProfileElement width={deviceWidth} />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.outerImageContainer}>
              <View style={styles.imageContainerShadow}>
                <View style={styles.imageContainer}>
                  <Image
                    source={require('../assets/images/dp.png')}
                    style={styles.image}
                  />
                </View>
              </View>
              <View style={styles.dpButtonContainer}>
                <DpButton />
              </View>
            </View>
            <Text style={styles.nameText}>{user && user.displayName}</Text>
            <Text style={styles.editProfileText}>Edit profile</Text>
          </View>
          <View style={styles.inputContainer}>
            <InputContainer
              label={'Full Name'}
              onChangeText={setFullName}
              value={user && fullName}
            />
            <InputContainer
              label={'E-mail'}
              onChangeText={setEmail}
              value={user && email}
            />
            <InputContainer label={'Phone Number'} />
            <View style={styles.buttonContainer}>
              <PrimaryButton text="SAVE" onPress={saveProfileHandler} />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: deviceHeight / 10,
    height: deviceHeight / 10,
  },
  imageContainer: {
    width: deviceHeight / 10,
    height: deviceHeight / 10,
    borderRadius: deviceHeight / 5,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  imageContainerShadow: {
    borderRadius: deviceHeight / 5,
    alignSelf: 'center',
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 20,
    shadowColor: Colors.orange300,
    shadowOpacity: 0.5,
  },
  outerImageContainer: {
    width: deviceHeight / 8,
    height: deviceHeight / 8,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: deviceHeight / 5,
    alignSelf: 'center',
  },
  contentContainer: {
    paddingTop: deviceHeight / 8,
    alignItems: 'center',
  },
  dpButtonContainer: {
    position: 'absolute',
    paddingLeft: deviceHeight / 13,
    paddingTop: deviceHeight / 15,
  },
  nameText: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: normalized(20),
    color: Colors.textBlack200,
  },
  editProfileText: {
    fontFamily: 'SofiaPro-Regular',
    fontSize: normalized(14),
    color: Colors.gray300,
  },
  inputContainer: {
    paddingHorizontal: normalized(30),
    flex: 1,
    paddingTop: deviceHeight / 50,
  },
  buttonContainer: {
    paddingHorizontal: deviceWidth / 5,
    paddingTop: deviceHeight / 30,
  },
});
