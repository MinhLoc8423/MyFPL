import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//utils
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';
import images from '../utils/images';

const Transcripts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{...Typography.title1, color: Colors.Grey.grey_900}}>Bảng điểm</Text>
    </SafeAreaView>
  )
}

export default Transcripts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
})