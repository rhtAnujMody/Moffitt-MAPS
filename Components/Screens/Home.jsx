import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, ActivityIndicator  } from "react-native";
import ProgressBar from "../Modules/Progress";
import Achievement from "../Modules/Achievements";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';


const HomeAc = () => {
    const [data, setData] = useState(null);
const [additionalData, setAdditionalData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const navigation = useNavigation();

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
            <View>
                <Text style={styles.nameTitle}>{'Hi, Amanda'}</Text>
                <Text style={styles.welcome}>{'Welcome!'}</Text>
            </View>
            <View style={styles.containerWht}>
                <Text style={{textAlign:'justify', padding: 10}}>{'It’s your first day! Check back here to track your progress as you complete sessions and reach your goals.'}</Text>
            </View>
            <View style={styles.autoDriveProgress}>
                <Text style={styles.subTitle}>{"Let's do this!"}</Text>
                <Text style={{textAlign: 'left',marginTop:5,marginLeft:10,}}>{'You have 3 sessions to work toward quitting smoking.'}</Text>
                <ProgressBar percentage={20} imagePath={require('./Assets/heroiconstrophy20solid.png')}/>
                <Text style={{textAlign: 'left',marginTop:5,marginLeft:10,}}>{'Complete your next session to unlock more.'}</Text>
            </View>
            <View>
                <Text style={styles.subTitleCen}>{'Ready to start your first session?'}</Text>
            </View>
            <View style={styles.sessionButtonAlign}>
                <TouchableOpacity style={styles.sessionButton} onPress={()=> {navigation.navigate('session')}}>
                    <Text style={styles.sessionButtonText}>{'Start a Session Now'}</Text>
                </TouchableOpacity>
            </View>
            <Achievement data={JSON.parse(badgesJson)}></Achievement>
        </View>
    );
};

const styles = StyleSheet.create({
    contV:{
        flex:1,
        marign:20,
        padding:20,
    },
    nameTitle:{
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
        marginTop:20,
        textAlign: 'left',
        marginLeft: 10,
    },
    welcome:{
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 32,
        textAlign: 'left',
        marginTop:10,
        marginLeft:10,
    },
    containerWht:{
        backgroundColor:'#ffffff',
        borderColor:'#CED4DA',
        borderWidth:1,
        padding:8,
        borderRadius:5,
        marginLeft:10,
        marginRight:10,
        textAlign:'left',
        marginTop:20,
    },
    autoDriveProgress:{
        backgroundColor:'#FEF2D0',
        padding:8,
        borderRadius:5,
        marginLeft:10,
        marginRight:10,
        textAlign:'left',
        marginTop:20,
    },
    subTitle:{
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'left',
        marginTop:5,
        marginLeft:10,
    },
    subTitleCen:{
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        marginTop:10,
    },
    sessionButtonAlign:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        marginBottom:10,
    },
    sessionButton:{
        width: 327,
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop:10,
        paddingBottom:10,
        borderRadius: 4,
        backgroundColor: '#03588C',
    },
    sessionButtonText:{
        color: '#ffffff',
        textAlign:'center',
        fontWeight:'500',
        fontSize:16,
        justifyContent:'center',
    },
});

export default HomeAc;