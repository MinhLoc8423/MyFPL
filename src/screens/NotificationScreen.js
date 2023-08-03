import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import ItemNotification from '../components/ItemNotification';

import {getNews} from '../services/AppService';

const NotificationScreen = props => {
  const {navigation} = props;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false)

  const onGetNews = async () => {
    const news = await getNews();
    console.log(news)
    setNews(news);
  };

  useEffect(() => {
    onGetNews()
  }, [])

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Header title={'Notification'} />

      {/* list view notification */}
      <FlatList
        style={{paddingHorizontal: 20, paddingTop: 20, marginBottom: 100}}
        data={news}
        renderItem={ItemNotification}
        onRefresh={onGetNews}
        refreshing={loading}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
