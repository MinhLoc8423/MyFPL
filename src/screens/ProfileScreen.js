import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//utils
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';
import images from '../utils/images';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{...Typography.title3Bold, color: Colors.Grey.grey_800}}>Bài tập về nhà</Text>
      <View style={{marginBottom: 10}}></View>
      <View style={styles.card}>
        <Text style={{...Typography.textBold, color: Colors.Grey.grey_800}}>Lab 1: Cài đặt NodeJS, MongoDB</Text>
        <Text style={{...Typography.headlineMedium, color: Colors.Grey.grey_700}}>Mã môn Học: MOB402</Text>
        <Text style={{...Typography.headlineMedium, color: Colors.Grey.grey_700}}>Thời Gian: 01/07 - 21/7</Text>
      </View>
      <View style={styles.card}>
        <Text style={{...Typography.textBold, color: Colors.Grey.grey_800}}>Lab 2: Cấu hình route cho từng api</Text>
        <Text style={{...Typography.headlineMedium, color: Colors.Grey.grey_700}}>Mã môn Học: MOB402</Text>
        <Text style={{...Typography.headlineMedium, color: Colors.Grey.grey_700}}>Thời Gian: 01/07 - 21/7</Text>
      </View>
      <View style={styles.card}>
        <Text style={{...Typography.textBold, color: Colors.Grey.grey_800}}>Lab 3: Xây dựng API truy vấn (get - select)</Text>
        <Text style={{...Typography.headlineMedium, color: Colors.Grey.grey_700}}>Mã môn Học: MOB402</Text>
        <Text style={{...Typography.headlineMedium, color: Colors.Grey.grey_700}}>Thời Gian: 01/07 - 21/7</Text>
      </View>
      <View style={styles.card}>
        <Text style={{...Typography.textBold, color: Colors.Grey.grey_800}}>Lab 4: Xây dựng API thêm/xóa/sửa (post - cud)</Text>
        <Text style={{...Typography.headlineMedium, color: Colors.Grey.grey_700}}>Mã môn Học: MOB402</Text>
        <Text style={{...Typography.headlineMedium, color: Colors.Grey.grey_700}}>Thời Gian: 01/07 - 21/7</Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  card:{
    padding: 10,
    backgroundColor: Colors.Error.error_200,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
})