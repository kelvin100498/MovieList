import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Poppins from '../../component/Popins';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';
import {URL} from '../../helpers/url';
import {ScrollView} from 'react-native-gesture-handler';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const DetailMovie = ({route}) => {
  const {data} = route.params;
  console.log(data);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.Title}>
          <Poppins size={30} align="center">
            {data.original_title}
          </Poppins>
        </View>
        <View style={styles.Image}>
          <FastImage
            source={{
              uri: `${URL.imageUrl.sd}${data.poster_path}`,
            }}
            style={{
              height: moderateScale(420),
              width: moderateScale(480),
            }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Poppins style={styles.release} align= 'center' size={13} type='Bold' >Release : {data.release_date}</Poppins>
        </View>
        <View>
          <Poppins style={styles.vote} align= 'center' size={13} type='Bold' >Vote average: {data.vote_average}  Vote Count: {data.vote_count}</Poppins>
        </View>
        <View>
          <Poppins style={styles.description} align= 'center'>{data.overview}</Poppins>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailMovie;

const styles = StyleSheet.create({
  Title: {
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
  },
  Image: {
    marginTop: moderateScale(3),
    alignItems: 'center',
  },
  description: {
    marginTop: moderateScale(40),
    alignItems: 'stretch',
    paddingHorizontal: moderateScale(8),
  },
  release: {
    marginTop: moderateScale(10),
    alignItems: 'center',
    paddingHorizontal: moderateScale(30),
  },
  vote: {
    marginTop: moderateScale(1),
    alignItems: 'center',
    paddingHorizontal: moderateScale(30),
  },
});
