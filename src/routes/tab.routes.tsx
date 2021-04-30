import React from 'react';
import { } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../styles/colors';
import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const tabRoutes = createBottomTabNavigator();

const AuthRoutes = () => (
  <tabRoutes.Navigator
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      labelPosition: 'beside-icon',
      style: {
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        height: 88
      }
    }}
  >
    <tabRoutes.Screen
      name="Nova Planta"
      component={PlantSelect}
      options={{
        tabBarIcon: (({ size, color }) => (
          <MaterialIcons
            name='add-circle-outline'
            size={size}
            color={color} />
        ))
      }}
    />

    <tabRoutes.Screen
      name="Minhas Plantas"
      component={MyPlants}
      options={{
        tabBarIcon: (({ size, color }) => (
          <MaterialIcons
            name='format-list-bulleted'
            size={size}
            color={color} />
        ))
      }}
    />


  </tabRoutes.Navigator>
)

export default AuthRoutes;