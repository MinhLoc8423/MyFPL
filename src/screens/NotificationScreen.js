import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ItemNotification from '../components/ItemNotification';

const NotificationScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Header title={'Notification'} />

      {/* list view notification */}
      <FlatList
        style={{ paddingHorizontal: 20, paddingTop: 20, marginBottom: 100 }}
        data={data}
        renderItem={ItemNotification}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});

const data = [
  {id: '1', name: 'Product Designer'},
  {id: '2', name: 'Product Designer'},
  {id: '3', name: 'Product Designer'},
  {id: '4', name: 'Product Designer'},
  {id: '5', name: 'Product Designer'},
  {id: '6', name: 'Product Designer'},
  {id: '11', name: 'Product Designer'},
  {id: '7', name: 'Product Designer'},
  {id: '8', name: 'Product Designer'},
  {id: '9', name: 'Product Designer'},
  {id: '12', name: 'Product Designer'},
  {id: '13', name: 'Product Designer'},
  {id: '14', name: 'Product Designer'},
  {id: '15', name: 'Product Designer'},
  {id: '16', name: 'Product Designer'},
];
