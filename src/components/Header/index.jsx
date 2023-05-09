import { View, Text } from 'react-native'
import styles from './styles'
import React from 'react'


const Header = ({title, newStyles}) => {
  return (
    <View style={styles.header}>
      <Text style={{...styles.title, ...newStyles}} >{title}</Text>
    </View>
  )
}

export default Header