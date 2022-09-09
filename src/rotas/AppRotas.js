import React from 'react';
import {House, Heart} from 'phosphor-react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import ProdutorRotas from './ProdutorRotas';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => {
            if (route.name === 'Home') {
              return <House size={32} color={color} weight="fill" />;
            }
            if (route.name === 'Melhores Produtores') {
              return <Heart size={32} color={color} weight="fill" />;
            }
          },
          tabBarActiveTintColor: '#2a9f85',
          tabBarInactiveTintColor: '#c6c6c6',
        })}>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRotas}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
