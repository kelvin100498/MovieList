import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters'

export default function Poppins({
  children,
  type = 'Reguler',
  size = 16,
  color = 'white',
  fontName = 'Poppins',
  align = 'left',
  style ={} ,
}) {
  const styles = StyleSheet.create({
    text: {
      fontFamily: `${fontName}-${type}`,
      fontSize: moderateScale(size),
      color,
      textAlign: align,
      ...style,
    },
  });
  return <Text style={styles.text}>{children}</Text>;
}
