import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ProgressBar from "../Modules/Progress";
import SessionMainCard from "../Modules/SessionMainCard";

const SessionAc = () => {
return (
    <ScrollView>
<View style={styles.contV}>
    <View>
        <Text style={styles.nameTitle}>{'Sessions'}</Text>
        <View style={styles.autoDriveProgress}>
                <Text style={styles.subTitle}>{"Nice Work!"}</Text>
                <Text style={{textAlign: 'left',marginTop:5,marginLeft:10,}}>{'You’ve completed 2 out of 3 scheduled sessions.'}</Text>
                <ProgressBar percentage={20} imagePath={require('./Assets/heroiconstrophy20solid.png')}/>
                <Text style={{textAlign: 'left',marginTop:5,marginLeft:10,}}>{'Complete more sessions to move forward in your progress.'}</Text>
        </View>
        <View style={styles.sessionCard}>
        <SessionMainCard 
  status="In Progress" 
  title="Getting Started"
  time="5 minutes"
  description="Let’s explore your interest in setting a quit date. It’s normal to worry about problems or barriers that might keep you from quitting." 
/>
<SessionMainCard 
  status="Not Started" 
  title="Maintaining Your Progress"
  time="5 minutes"
  description="Quitting smoking is difficult and setback are often a part of the process. If you slip up and have a cigarette, think of it as a learning experience - NOT a failure! The most important thing is to quit again." 
/>
<SessionMainCard 
  status="Not Started" 
  title="Continuing Your Journey"
  time="5 minutes"
  description="Your quit day is here! You have put a lot of energy into preparing for this day. Remember to avoid high risk situations and to use your coping strategies - you can do this!" 
/>
        </View>
    </View>

</View>
</ScrollView>
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
    sessionCard:{
        marginTop:20,
        marginLeft:15,
        marginRight:15,
    }
});

export default SessionAc;