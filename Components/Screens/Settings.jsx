import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import HelpScreen from "../Modules/Help";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Modal } from "react-native";
import { Calendar, Agenda } from "react-native-calendars";

const SettingsMain = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [quitDate, setQuitDate] = useState(null);
  
    const onDayPress = (day) => {
      setSelectedDate(day.dateString);
    };

    const items = {
        '2024-06-19': [{ name: 'item 1 - any js object' }],
      };

    const handleOpenModal = () => {
      setIsModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setIsModalVisible(false);
    };

    const handleSetQuitDate = () => {
        if (selectedDate) {
          setQuitDate(selectedDate);
          Alert.alert('Quit date',`Quit date set to ${selectedDate}`);
          handleCloseModal();
        } else {
          Alert.alert('Warning','Please select a date');
        }
      };
    
    const navigation = useNavigation();
    return (
        <View style={styles.contV}>
            <Text style={styles.title}>
                {'Settings'}
            </Text>
            
        <View style={styles.alignSettings}>
            <TouchableOpacity style={styles.helpButton} onPress={()=>{navigation.navigate('help')}}>
                <Ionicons name={'person'} size={100} color={'#03588C'} />
                <Text style={styles.helpText}>
                    {'Help'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quitDateButton} onPress={handleOpenModal}>
                <Text style={styles.helpText}>
                    {'Set Quit Date'}
                </Text>
            </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Set New Quit Date</Text>
            <Calendar onDayPress={onDayPress} markedDates={{
                [selectedDate]: { selected: true, selectedColor: '#03588C'},
                [quitDate]: { selected: true, marked: true, selectedColor: '#03588C' }, }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={handleCloseModal} style={styles.cancleButton}>
                    <Text style={{color: '#03588C', textAlign: 'center'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSetQuitDate} style={styles.setQuitDateButton}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Set Date</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
        </View>
    </View>
);};

const SettingsAC = () => {
    const Stack = createNativeStackNavigator();
    return(
        <Stack.Navigator>
                <Stack.Screen options={{headerShown:false}} name="main" component={SettingsMain}/>
                <Stack.Screen options={{headerShown:false}} name="help" component={HelpScreen}/>
            </Stack.Navigator>
    );
};

const styles= StyleSheet.create({
    contV:{
        flex:1,
        marign:20,
        padding:20,
    },
    title:{
        fontSize:32,
        fontWeight:'700',
        lineHeight: 32,
        marginTop:20,
        textAlign: 'left',
        marginLeft: 10,
    },
    alignSettings:{
        alignItems:'center'
    },
    cancleButton:{
        backgroundColor:'#fff',
        alignItems:'center',
        borderRadius:4,
        height: 48,
        width:131,
        paddingTop:14,
        paddingBottom:14,
        marginTop:20,
    },
    setQuitDateButton:{
        borderWidth:1,
        borderColor:'#03588C',
        backgroundColor:'#03588C',
        alignItems:'center',
        borderRadius:4,
        height: 48,
        width:131,
        paddingTop:14,
        paddingBottom:14,
        marginTop:20,
    },
    helpText:{
        fontWeight:'600',
        color:'#03588C',
        textAlign:'center',
        fontSize:16,
    },
    helpButton:{
        borderWidth:1,
        borderColor:'#03588C',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        width:150,
        height:150,
        borderRadius:4,
        paddingTop:17,
        paddingBottom:17,
        marginTop:40,
    },
    quitDateButton:{
        borderWidth:1,
        borderColor:'#03588C',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        borderRadius:4,
        height: 52,
        width:333,
        paddingTop:14,
        paddingBottom:14,
        marginTop:20,
    }
});
export default SettingsAC;