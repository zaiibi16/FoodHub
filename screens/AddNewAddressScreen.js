import {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import normalized from 'rn-normalized';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {PrimaryButton} from '../components/ui/Buttons';
import InputContainer from '../components/ui/InputContainer';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const AddNewAddressScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');

  const saveHandler = () => {
    navigation.goBack();
  };
  return (
    <TouchableWithoutFeedback>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        bounces={false}>
        <View style={styles.rootContainer}>
          <InputContainer label={'Full Name'} onChangeText={setFullName} />
          <InputContainer
            label={'Mobile number'}
            onChangeText={setMobileNumber}
          />
          <InputContainer label={'State'} onChangeText={setState} />
          <InputContainer label={'City'} onChangeText={setCity} />
          <InputContainer
            label={'Street (Include house number)'}
            onChangeText={setStreet}
          />
          <View style={styles.buttonContainer}>
            <PrimaryButton text="SAVE" onPress={saveHandler} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default AddNewAddressScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: normalized(30),
    paddingTop: deviceHeight / 10,
  },
  buttonContainer: {
    paddingTop: deviceHeight / 50,
  },
});
