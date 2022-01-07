import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Poppins from '../../component/Popins';
import {SafeAreaView} from 'react-native-safe-area-context';

const play = () => {
  return (
    <SafeAreaView>
      <Poppins size={24} color="red">
        ini Play
      </Poppins>
    </SafeAreaView>
  );
};

export default play;

const styles = StyleSheet.create({});
