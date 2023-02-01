import {useState} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import normalized from 'rn-normalized';
import {SwitchButton} from '../components/ui/Buttons';

import FavouriteRestaurantList from '../components/FavouriteRestaurantList';
import FavouriteFoodItemList from '../components/FavouriteFoodItemList';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const FavouritesScreen = () => {
  const [switchOption, setSwitchOption] = useState(1);

  const SectionHandler = () => {
    if (switchOption === 1) {
      return <FavouriteFoodItemList />;
    }
    if (switchOption === 2) {
      return <FavouriteRestaurantList />;
    }
    return;
  };
  return (
    <View style={styles.rootContainer}>
      <SwitchButton
        switchOption={switchOption}
        setSwitchOption={setSwitchOption}
      />
      <View style={styles.sectionContainer}>
        <SectionHandler />
      </View>
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: deviceHeight / 8,
    paddingHorizontal: normalized(30),
  },
  sectionContainer: {
    paddingVertical: deviceHeight / 50,
    flex: 1,
  },
});
