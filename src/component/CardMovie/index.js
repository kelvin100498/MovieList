import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import Poppins from '../Popins';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {URL} from '../../helpers/url';
import {styles} from './style';

export default function CardMovie({title, data = [], navigation}) {
  //function kirim data lewat navigation
  const onClickMovie = data => {
    console.log(data);
    navigation.navigate('DetailMovie', {
      data,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Poppins>{title}</Poppins>
        <TouchableOpacity style={styles.buttonSeeAll}>
          <Poppins size={12}>See all</Poppins>
          <IonIcons
            name="chevron-forward-outline"
            size={moderateScale(16)}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.content}>
              <TouchableOpacity onPress={() => onClickMovie(item)}>
                <FastImage
                  source={{
                    uri: `${URL.imageUrl.sd}${item.poster_path}`,
                  }}
                  style={{
                    height: moderateScale(120),
                    width: moderateScale(80),
                  }}
                  resizeMode="contain"
                />

                <Poppins
                  size={12}
                  align="center"
                  style={{
                    width: moderateScale(80),
                    marginTop: moderateScale(8),
                  }}>
                  {item.original_title}
                </Poppins>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
