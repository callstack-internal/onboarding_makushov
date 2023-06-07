import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {CityType} from '../api/types';

type DetailsScreenProps = {
  route: {
    params: {
      city: CityType;
    };
  };
};

const Details = ({route}: DetailsScreenProps) => {
  const {city} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        <Text style={styles.cityName}>{city.name}</Text>
        <Text style={styles.temperature}>{city.temperature}°C</Text>
        <View style={styles.weatherDetailsContainer}>
          <View style={styles.weatherDetail}>
            <Text style={styles.detailIcon}>💧</Text>
            <Text style={styles.detailText}>{city.humidity}%</Text>
          </View>
          <View style={styles.weatherDetail}>
            <Text style={styles.detailIcon}>🌡️</Text>
            <Text style={styles.detailText}>{city.pressure} hPa</Text>
          </View>
          <View style={styles.weatherDetail}>
            <Text style={styles.detailIcon}>🌬️</Text>
            <Text style={styles.detailText}>{city.wind} m/s</Text>
          </View>
        </View>
        <Text style={styles.weatherDescription}>{city.weather}</Text>
        <Image
          accessibilityLabel={`Icon of ${city.weather}`}
          accessibilityIgnoresInvertColors
          style={styles.weatherIcon}
          source={{uri: city.iconUrl}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    padding: 16,
  },
  weatherContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  weatherDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 10,
    paddingHorizontal: 40,
  },
  weatherDetail: {
    alignItems: 'center',
  },
  detailIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  detailText: {
    fontSize: 16,
    color: '#333333',
  },
  weatherDescription: {
    fontSize: 20,
    color: '#333333',
    marginBottom: 16,
  },
  weatherIcon: {
    width: 80,
    height: 80,
  },
});

export default Details;
