import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SessionInfoCard from "../Modules/SessionInfoCard";

const SessionView = () => {
return (
<View style={styles.contV}>
    <View>
        <Text style={styles.nameTitle}>{'Sessions'}</Text>
        <View style={styles.sessionCard}>
            <SessionInfoCard></SessionInfoCard>
        </View>
    </View>

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
    sessionCard:{
        marginTop:20,
        marginLeft:15,
        marginRight:15,
    }
});

export default SessionView;