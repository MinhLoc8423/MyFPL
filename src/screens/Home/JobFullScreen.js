import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import renderItem from '../../components/ItemJob';

import {getJob} from '../../services/AppService';

const JobScreen = (props) => {
  const {navigation, route} = props;
  const { queryParam } = route.params;
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(false);

  const onGetJob = async () => {
    const job = await getJob(queryParam);
    console.log(job);
    setJob(job);
  };

  useEffect(() => {
    onGetJob();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1,}}>
      <Header title={queryParam ? queryParam : "Total" } />
      <FlatList
          style={{marginBottom: 70, marginTop: 20, paddingHorizontal: 20,}}
          data={job}
          renderItem={({ item }) => renderItem({ item, navigation })}
          keyExtractor={item => item._id}
          refreshing={loading}
          onRefresh={onGetJob}
        />
    </SafeAreaView>
  )
}

export default JobScreen