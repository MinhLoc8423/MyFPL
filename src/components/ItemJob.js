import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import images from '../utils/images';
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';

const renderItem = ({item}) => (
  <View style={styles.item}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderRadius: 200,
            overflow: 'hidden',
            marginRight: 10,
            width: 40,
            height: 40,
          }}>
          <Image
            source={images.icon_company}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View>
          <Text style={{...Typography.subheadBold, color: Colors.secondary}}>
            {item.name}
          </Text>
          <Text style={{...Typography.textRegular, color: '#524b6b'}}>
            Google inc . California, USA
          </Text>
        </View>
      </View>

      <View>
        <Image source={images.icon_save} style={{width: 24, height: 24}} />
      </View>
    </View>
    <Text
      style={{
        ...Typography.subheadRegular,
        color: Colors.secondary,
        marginTop: 20,
        marginBottom: 20,
      }}>
      $15K/Mo
    </Text>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 26,
      }}>
      <View
        style={{
          backgroundColor: '#cbc9d4',
          height: 30,
          borderRadius: 8,
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 12,
            color: Colors.secondary,
            marginHorizontal: 17,
            marginVertical: 6,
          }}>
          Senior designer
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#cbc9d4',
          height: 30,
          borderRadius: 8,
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 12,
            color: Colors.secondary,
            marginHorizontal: 17,
            marginVertical: 6,
          }}>
          Full time
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#FF9228',
          height: 30,
          borderRadius: 8,
          opacity: 0.7,
        }}>
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 12,
            color: Colors.secondary,
            marginHorizontal: 17,
            marginVertical: 6,
          }}>
          Apply
        </Text>
      </View>
    </View>
  </View>
);

export default renderItem;

const styles = StyleSheet.create({
  item: {
    position: 'relative',
    width: '100%',
    height: 159,
    borderRadius: 20,
    backgroundColor: Colors.white,
    marginBottom: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});