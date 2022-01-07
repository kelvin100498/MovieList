import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(3),
  },
  content: {marginRight: moderateScale(16)},
  buttonSeeAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: moderateScale(72),
  },
});
