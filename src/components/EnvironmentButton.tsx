import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors'
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string,
  action?: boolean
}

export function EnvironmentButton({ title, action = false, ...rest }: EnvironmentButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        action && styles.containerActive
      ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={[
        styles.text,
        action && styles.textActive
        ]}>
        {title}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 5

  },
  containerActive: {
    backgroundColor: colors.green_light
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.heading
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark
  }
})