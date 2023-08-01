import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ScheduleScreen = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
   }}>
      <Header title={"Schedules"} />
    </SafeAreaView>
  )
}

export default ScheduleScreen

const styles = StyleSheet.create({})