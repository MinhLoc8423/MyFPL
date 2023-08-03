import {Pressable, SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {Colors} from '../../utils/colors';
import {Typography} from '../../utils/typography';

import {getExam} from '../../services/AppService';
import ItemSchedule from '../../components/ItemSchedule';

const ScheduleExam = props => {
  const {navigation} = props;
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);

  const onGetSchedule = async () => {
    const schedule = await getExam();
    console.log(schedule);
    setSchedule(schedule);
  };

  useEffect(() => {
    onGetSchedule();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Header title={'Schedules'} navigation={navigation} />
      <View
        style={{
          backgroundColor: Colors.white,
          height: 50,
          borderRadius: 10,
          marginTop: 17,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('Schedule');
          }}
          style={{
            backgroundColor: Colors.white,
            width: '45%',
            height: '75%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{...Typography.subheadBold, color: Colors.secondary}}>
            Lịch học
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: '45%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FCA34D',
            height: '75%',
            borderRadius: 10,
          }}>
          <Text style={{...Typography.subheadBold, color: Colors.white}}>
            Lịch Thi
          </Text>
        </Pressable>
      </View>
      <FlatList
        style={{marginTop: 23}}
        data={schedule}
        renderItem={ItemSchedule}
        onRefresh={onGetSchedule}
        refreshing={loading}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};

export default ScheduleExam;

const styles = StyleSheet.create({});
