import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image, Alert, ScrollView } from "react-native";
import { Modal } from "react-native";
import { Calendar, Agenda } from "react-native-calendars";

const SessionMainCard = ({ status, title, time, description }) => {
  const [isSessionStarted, setIsSessionStarted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [quitDate, setQuitDate] = useState(null);
  const sessionStart = () => {
    setIsSessionStarted(true);
    Alert.alert('Session Start Logic', 'Implement session logic in this block!');
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
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
      Alert.alert('Session schedule',`Session scheduled at ${selectedDate}`);
      handleCloseModal();
    } else {
      Alert.alert('Warning','Please select a date');
    }
  };

  const getStatusStyle = () => {
    switch (status) {
      case "In Progress":
        return styles.inProgress;
      case "Not Started":
        return styles.notStarted;
      case "Unlocked":
        return styles.notStartedUnlock;
      case "Complete":
        return styles.complete;
      default:
        return styles.inProgress;
    }
  };

  return (
    <View style={styles.viewer}>
      <View style={styles.imageContainer}>
        <Image source={require('../Modules/Assets/Rectangle196.png')} style={styles.image} />
        <View style={styles.inProgressContainer}>
          <Text style={getStatusStyle()}>
            {status}
          </Text>
        </View>
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text>
        {time}
      </Text>
      <Text>
        {description}
      </Text>
      {isSessionStarted ? (
        <Text>Session Started</Text>
      ) : (<View>
        {status === "Not Started"? (
            <TouchableOpacity onPress={handleOpenModal} style={styles.startSessionButton}>
              <Text style={styles.startSessionButtonText}>
                Schedule Session
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={sessionStart} style={styles.startSessionButton}>
              <Text style={styles.startSessionButtonText}>
                Continue Session
              </Text>
            </TouchableOpacity>
          )}
        <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: '#fff', margin: 20, padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Schedule session</Text>
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 25.78,
    textAlign: 'left',
    color: '#03588C',
  },
  inProgressContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  notStarted: {
    backgroundColor: '#EB8F00',
    borderRadius: 16,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    textAlign: 'center',
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
  notStartedUnlock: {
    backgroundColor: '#CCD5E5',
    borderRadius: 16,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    textAlign: 'center',
  },
  inProgress: {
    backgroundColor: '#BADEA1',
    borderRadius: 16,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    textAlign: 'center',
  },
  complete: {
    backgroundColor: '#CCD5E5',
    borderRadius: 16,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    textAlign: 'center',
  },
  startSessionButton: {
    backgroundColor: '#03588C',
    borderRadius: 4,
    height: 48,
    marginTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center'
  },
  startSessionButtonText: {
    fontWeight: '500',
    lineHeight: 24,
    fontSize: 16,
    color: '#FFFFFF'
  },
});

export default SessionMainCard;
