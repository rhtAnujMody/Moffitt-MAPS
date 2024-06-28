import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Achievement from "../Modules/Achievements";
import axios from 'axios';

const BadgesAc = () => {
  const [data, setData] = useState(null);
  const [additionalData, setAdditionalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('https://mocki.io/v1/d393cc34-449f-4b20-a9b4-856bc263f019');
        const response2 = await axios.get('https://mocki.io/v1/74696b29-b1dc-47a2-9b11-708fb7b4c73c');
        
        const updatedData = response1.data.map(item => {
          const badgeNumber = item.badgeid;
          const badgeField = `badge_${badgeNumber}`;
          const badgeStatus = response2.data[0][badgeField];
          return { ...item, badge_configuration_complete: badgeStatus };
        });

        setData(updatedData);
        setAdditionalData(response2.data);

        console.log('Updated data:', updatedData);
        console.log('Fetched data from second API:', response2.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.contV}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.contV}>
        <Text style={styles.nameTitle}>Error: {error.message}</Text>
      </View>
    );
  }

  const badgesJson = JSON.stringify(data, null, 2);
  console.log('First API data in JSON format:', badgesJson);

  const additionalDataJson = JSON.stringify(additionalData, null, 2);
  console.log('Second API data in JSON format:', additionalDataJson);

  return (
    <View style={styles.contV}>
      <Text style={styles.nameTitle}>{'Badges'}</Text>
      <Achievement data={JSON.parse(badgesJson)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  contV: {
    flex: 1,
    margin: 20,
    padding: 20,
  },
  nameTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    marginTop: 20,
    textAlign: 'left',
    marginLeft: 10,
  },
});

export default BadgesAc;
