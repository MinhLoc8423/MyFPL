import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ScrollView} from 'react-native-virtualized-view';

import {Typography} from '../../utils/typography';
import {Colors} from '../../utils/colors';
import images from '../../utils/images';
import ItemJob from '../../components/ItemJob';

import {getJob} from '../../services/AppService';
import {UserContext} from '../../Context/UserContext';
import renderItem from '../../components/ItemJob';

const HomeScreen = (props) => {
  const {navigation} = props;
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(false);
  const {user} = useContext(UserContext);

  const onGetJob = async () => {
    const job = await getJob("");
    console.log(job);
    setJob(job);
  };

  useEffect(() => {
    onGetJob();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 50,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              maxWidth: '45.33%',
              textAlign: 'left',
              ...Typography.title2,
              color: Colors.secondary,
            }}>
            Hello {user}.
          </Text>
          <View
            style={{
              borderRadius: 200,
              overflow: 'hidden',
              width: 36,
              height: 36,
            }}>
            <Image
              source={images.avata}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>

        {/* Banner */}
        <View
          style={{
            overflow: 'hidden',
            width: '100%',
            maxHeight: 143,
            marginBottom: 30,
            marginTop: 30,
            borderBottomWidth: 5,
            borderColor: '#f7941d',
            backgroundColor: 'red',
          }}>
          <Image
            source={images.banner}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
        </View>

        {/* find intership */}
        <Text
          style={{
            ...Typography.headlineBold,
            color: Colors.secondary,
            marginBottom: 31,
          }}>
          Find Internship{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            height: 170,
            marginBottom: 19,
          }}>
          <Pressable
            onPress={() => {
              navigation.navigate('Job',{ queryParam: "" });
            }}
            style={{
              backgroundColor: '#afecfe',
              width: '45%',
              height: '100%',
              maxHeight: 170,
              borderRadius: 6,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={images.icon_headhunting} />
            <Text
              style={{
                ...Typography.headlineBold,
                color: Colors.secondary,
                marginTop: 14,
              }}>
              44.5k
            </Text>
            <Text
              style={{
                ...Typography.subheadRegular,
                color: Colors.secondary,
                marginTop: 4,
              }}>
              Total
            </Text>
          </Pressable>
          <View
            style={{
              flex: 1,
              marginLeft: 20,
              flexDirection: 'column',
            }}>
            <Pressable
              onPress={() => {
                navigation.navigate('Job',{ queryParam: "Full Time" });
              }}
              style={{
                backgroundColor: '#beaffe',
                marginBottom: 20,
                width: '100%',
                height: '43.5%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}>
              <Text
                style={{
                  ...Typography.headlineBold,
                  color: Colors.secondary,
                }}>
                66.8k
              </Text>
              <Text
                style={{
                  ...Typography.subheadRegular,
                  color: Colors.secondary,
                }}>
                Full Time
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Job',{ queryParam: "Part Time" });
              }}
              style={{
                backgroundColor: '#ffd6ad',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: '43.5%',
                borderRadius: 6,
              }}>
              <Text
                style={{
                  ...Typography.headlineBold,
                  color: Colors.secondary,
                }}>
                38.9k
              </Text>
              <Text
                style={{
                  ...Typography.subheadRegular,
                  color: Colors.secondary,
                }}>
                Part Time
              </Text>
            </Pressable>
          </View>
        </View>

        {/* Recent Internship List */}
        <Text
          style={{
            ...Typography.headlineBold,
            color: Colors.secondary,
            marginBottom: 16,
          }}>
          Recent Internship List
        </Text>

        {/* render Item */}
        <FlatList
          style={{marginBottom: 70}}
          data={job}
          renderItem={({ item }) => renderItem({ item, navigation })}
          keyExtractor={item => item._id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
