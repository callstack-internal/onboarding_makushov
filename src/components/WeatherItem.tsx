import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CityType} from '../api/types';
import {getBackgroundColor} from '../utils/helpers';
import {RootStackParamList} from '../navigation/types';

const WeatherItem = ({data}: {data: CityType}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={[styles.item, {backgroundColor: getBackgroundColor(data.weather)}]}
      onPress={() => navigate('Details', {city: data})}>
      <View style={styles.leftContainer}>
        <Text style={styles.countryName}>{data.name}</Text>
        <Text style={styles.weatherDescription}>{data.weather}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.temperature}>{data.temperature}°C</Text>
        <Text style={styles.navigateIcon}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  countryName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFFFFF',
  },
  weatherDescription: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  temperature: {
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  navigateIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default WeatherItem;
