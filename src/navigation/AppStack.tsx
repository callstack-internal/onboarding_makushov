import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {Details, Weather} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Weather" component={Weather} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default AppStack;
