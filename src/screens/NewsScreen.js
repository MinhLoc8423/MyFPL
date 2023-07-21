import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

//utils
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';
import images from '../utils/images';
import {InputFilled} from '../components/InputFilled';

const NewsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop: 30}}></View>
      <InputFilled width={'100%'} />
      <View style={{marginTop: 22}}></View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{...Typography.headlineNormal, color: Colors.Grey.grey_600}}>
          Kết quả tìm kiếm của bạn
        </Text>
        <Pressable>
          <Image source={images.icon_filter} />
        </Pressable>
      </View>
      <View style={{marginTop: 30}}></View>
      <View style={styles.card_search}>
        <View style={{width: '100%'}}>
          <Text
            style={{...Typography.headlineBold, color: Colors.Grey.grey_600}}>
            THÔNG BÁO V/v TRIỂN KHAI KẾ HOẠCH THỰC TẬP VÀ HỖ TRỢ THỰC TẬP HỌC KỲ
            FALL 2023
          </Text>
          <Text style={{...Typography.caption2, color: Colors.Grey.grey_600}}>
            Người đăng: nhuntq20
          </Text>
          <Text style={{...Typography.caption2, color: Colors.Grey.grey_600}}>
            Thời gian: 11:45:44 - 20/07/2023
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  card_search: {
    flexDirection: 'row',
    backgroundColor: Colors.Primary.primary_50,
    borderRadius: 15,
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
});
