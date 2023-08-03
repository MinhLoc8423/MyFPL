import {View, Text, SafeAreaView, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {Typography} from '../../utils/typography';
import Button from '../../components/Button';

import {getOneJob} from '../../services/AppService';
import {displayPostedTime} from '../../utils/time';

const DescriptionScreen = props => {
  const {navigation, route} = props;
  const {id} = route.params;
  const [jobDetail, setJobDetail] = useState(null);

  const onGetJob = async () => {
    try {
      const jobDetail = await getOneJob(id);
      if (jobDetail) {
        setJobDetail(jobDetail);
      }
    } catch (error) {
      console.error('Lỗi khi lấy thông tin công việc:', error);
    }
  };

  useEffect(() => {
    onGetJob();
  }, [id]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 45,
        paddingHorizontal: 20,
        backgroundColor: '#F9F9F9',
      }}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={images.icon_back} />
      </Pressable>
      <View
        style={{
          backgroundColor: '#f3f2f2',
          marginHorizontal: -30,
          paddingVertical: 20,
          marginTop: 70,
        }}>
        <Text
          style={{
            ...Typography.headlineBold,
            color: Colors.secondary,
            textAlign: 'center',
            marginTop: 10,
          }}>
          {jobDetail ? jobDetail.title : 'Loading...'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text style={{...Typography.subheadRegular, color: Colors.secondary}}>
            {jobDetail ? jobDetail.nameCompany : 'Loading...'}
          </Text>
          <Text style={{...Typography.subheadRegular, color: Colors.secondary}}>
            {jobDetail ? jobDetail.location : 'Loading...'}
          </Text>
          <Text style={{...Typography.subheadRegular, color: Colors.secondary}}>
            {jobDetail ? displayPostedTime(jobDetail.date) : 'Loading...'}
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -175,
        }}>
        <View
          style={{
            width: 84,
            height: 84,
          }}>
          <Image
            source={images.icon_company}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </View>
      </View>
      <Text
        style={{
          ...Typography.subheadBold,
          color: Colors.secondary,
          marginTop: 160,
          marginBottom: 10,
        }}>
        Job Description
      </Text>
      <Text style={{...Typography.textRegular, color: '#524B6B'}}>
        {jobDetail ? jobDetail.description : 'Loading...'}
      </Text>
      <Text
        style={{
          ...Typography.subheadBold,
          color: Colors.secondary,
          marginTop: 20,
          marginBottom: 10,
        }}>
        Requirements
      </Text>
      <Text style={{...Typography.textRegular, color: '#524B6B'}}>
        {jobDetail ? jobDetail.requirements : 'Loading...'}
      </Text>
      <View style={{marginBottom: 30}}></View>
      <Button title={'APPLY NOW'} backgroundColor={'#FF9228'} />
    </SafeAreaView>
  );
};

export default DescriptionScreen;
