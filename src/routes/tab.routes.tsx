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

const tabRoutes = createBottomTabNavigator();

const AuthRoutes = () => (
  <tabRoutes.Navigator
    tabBarOptions={{
      activeTintColor: colors.green,
      inactiveTintColor: colors.heading,
      labelPosition: 'beside-icon',
      // style: {
      //   paddingVertical: 20,
      //   height: 88
      // }
    }}
  >
    <tabRoutes.Screen
      name="PlantSelect"
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
      name="MyPlants"
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