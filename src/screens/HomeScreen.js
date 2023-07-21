import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

//utils
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';
import images from '../utils/images';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={{
                ...Typography.title1,
                color: Colors.Grey.grey_900,
                marginTop: 10,
              }}>
              Chào, Minh Lộc!
            </Text>
            <Text
              style={{
                ...Typography.subheadNormal,
                color: Colors.Grey.grey_500,
              }}>
              Hãy kiểm tra kĩ lịch học để nhé
            </Text>
          </View>
          <Image source={images.avata} style={{width: 44, height: 44}} />
        </View>
        <View
          style={{
            marginTop: 30,
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...Typography.title2,
              color: Colors.Grey.grey_800,
            }}>
            Lịch học
          </Text>
          <Text
            style={{
              ...Typography.subheadNormal,
              color: Colors.Primary.primary_500,
            }}>
            nhiều hơn
          </Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text
              style={{
                ...Typography.textBold,
                color: Colors.Grey.grey_700,
                marginBottom: 10,
              }}>
              Lập trình game 2D nâng cao
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Giảng đường: CVPMQT
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Thời gian: 15:15 - 17:15
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Phòng: T311 (Nha T)
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Giảng viên: channn3
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text
              style={{
                ...Typography.textBold,
                color: Colors.Grey.grey_700,
                marginBottom: 10,
              }}>
              Lập trình game 2D nâng cao
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Giảng đường: CVPMQT
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Thời gian: 15:15 - 17:15
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Phòng: T311 (Nha T)
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Giảng viên: channn3
            </Text>
          </View>
        </View>
        <View
          style={{
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...Typography.title2,
              color: Colors.Grey.grey_800,
            }}>
            Lịch Thi
          </Text>
          <Text
            style={{
              ...Typography.subheadNormal,
              color: Colors.Primary.primary_500,
            }}>
            nhiều hơn
          </Text>
        </View>
        <View style={styles.card}>
          <View>
            <Text
              style={{
                ...Typography.textBold,
                color: Colors.Grey.grey_700,
                marginBottom: 10,
              }}>
              Lập trình game 2D nâng cao
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Giảng đường: CVPMQT
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Thời gian: 15:15 - 17:15
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Phòng: T311 (Nha T)
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Giảng viên: channn3
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text
              style={{
                ...Typography.textBold,
                color: Colors.Grey.grey_700,
                marginBottom: 10,
              }}>
              Lập trình game 2D nâng cao
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Giảng đường: CVPMQT
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Thời gian: 15:15 - 17:15
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Phòng: T311 (Nha T)
            </Text>
            <Text
              style={{
                ...Typography.caption1,
                color: Colors.Grey.grey_700,
                marginBottom: 5,
              }}>
              Giảng viên: channn3
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 30}}></View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.Grey.grey_50,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    padding: 15,
    borderColor: Colors.Primary.primary_300,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
});
