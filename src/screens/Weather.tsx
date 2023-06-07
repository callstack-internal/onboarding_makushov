import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

type WeatherProps = NativeStackScreenProps<RootStackParamList, 'Weather'>;

const Weather = ({navigation}: WeatherProps) => {
  return (
    <SafeAreaView>
      {/* <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => <Text>Weather</Text>}
      /> */}
    </SafeAreaView>
  );
};

export default Weather;
