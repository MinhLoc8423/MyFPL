import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
   }}>
      <Header title={"Profile"} />
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})