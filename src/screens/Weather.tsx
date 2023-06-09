import React from 'react';
import {FlatList, Text, StyleSheet, View} from 'react-native';
import {useWeather} from '../hooks/useWeather';
import {WeatherItem} from '../components';
import {CITIES_LIST} from '../constants';

const Weather = () => {
  const {data, isLoading, isError} = useWeather(CITIES_LIST);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error...</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({item, index}) => <WeatherItem key={index} data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    padding: 16,
  },
  listContainer: {
    flexGrow: 1,
  },
});

export default Weather;
