import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors'
import fonts from '../styles/fonts';

import photo from '../assets/icon.jpg'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header() {

  const[username,setUsername] = useState<string>();
  
  useEffect(() => {
    async function loadStorageUsername(){
      const user = await AsyncStorage.getItem('@plantmanager:user');

      setUsername(user || '')
    }

    loadStorageUsername()

  },[username])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá</Text>
        <Text style={styles.username}>{username}</Text>
      </View>

      <Image source={photo} style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight()
  },
  greeting:{
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading
  },
  username:{
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading
  },
  image:{
    width: 70,
    height: 70,
    borderRadius: 40
  },
})