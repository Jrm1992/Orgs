import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '../telas/Home';
import {Produtor} from '../telas/Produtor';

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({ComponentePrincipal = Home}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={ComponentePrincipal}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Produtor"
        component={Produtor}
      />
    </Stack.Navigator>
  );
}
