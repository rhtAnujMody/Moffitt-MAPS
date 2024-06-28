import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Video from 'react-native-video';

const Stack = createNativeStackNavigator();

const WellnessDac = ({ navigation }) => {
  const handleGoalPress = (goal) => {
    navigation.navigate("GoalDetail", { goal });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wellness Plan</Text>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsTitle}>My Goals</Text>
        <Text style={styles.goalsText}>
          The Wellness Plan allows you to define areas that you
          would like to work on. These topics appear below. You
          can come here any time to receive support for your
          chosen topics.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGoalPress("Quitting Smoking")}
        >
          <Text style={styles.buttonText}>
            Explore Cutting Down or Quitting Smoking
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGoalPress("Cut Back on Drinking")}
        >
          <Text style={styles.buttonText}>Cut Back on Drinking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGoalPress("Exercise/Physical Activity")}
        >
          <Text style={styles.buttonText}>
            Exercise/Physical Activity
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGoalPress("Healthy Eating")}
        >
          <Text style={styles.buttonText}>Healthy Eating</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGoalPress("Managing Stress")}
        >
          <Text style={styles.buttonText}>Managing Stress</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGoalPress("Managing Finances")}
        >
          <Text style={styles.buttonText}>Managing Finances</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleGoalPress("Improving Sleep")}
        >
          <Text style={styles.buttonText}>Improving Sleep</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const GoalDetail = ({ route, navigation }) => {
  const { goal } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{goal}</Text>
      <View style = {{marginTop: 20}}>
        <Image
          source={require("/Users/faizan/Documents/Codes/Development/Moffitt/MAPSDemo/Components/Modules/Assets/Rectangle196.png")}
          style={styles.modalImage}
        />
        <Text style={styles.modalText}>
          Lorem ipsum dolor sit amet consectetur. Sed
          ipsum diam sed semper potenti eget quis varius
          dui. Varius vel fringilla purus elit sit ac. Neque p...
        </Text>
        <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate("VideoPlayer", { goal })}>
          <Text style={styles.playButtonText}>Play Video</Text>
        </TouchableOpacity>
      </View>
      <View style = {{marginTop: 20}}>
        <Image
          source={require("/Users/faizan/Documents/Codes/Development/Moffitt/MAPSDemo/Components/Modules/Assets/Rectangle196.png")}
          style={styles.modalImage}
        />
        <Text style={styles.modalText}>
          Lorem ipsum dolor sit amet consectetur. Sed
          ipsum diam sed semper potenti eget quis varius
          dui. Varius vel fringilla purus elit sit ac. Neque p...
        </Text>
        <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate("VideoPlayer", { goal })}>
          <Text style={styles.playButtonText}>Play Video</Text>
        </TouchableOpacity>
      </View>
      <View style = {{marginTop: 20}}>
        <Image
          source={require("/Users/faizan/Documents/Codes/Development/Moffitt/MAPSDemo/Components/Modules/Assets/Rectangle196.png")}
          style={styles.modalImage}
        />
        <Text style={styles.modalText}>
          Lorem ipsum dolor sit amet consectetur. Sed
          ipsum diam sed semper potenti eget quis varius
          dui. Varius vel fringilla purus elit sit ac. Neque p...
        </Text>
        <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate("VideoPlayer", { goal })}>
          <Text style={styles.playButtonText}>Play Video</Text>
        </TouchableOpacity>
      </View>
      <View style = {{marginTop: 20}}>
        <Image
          source={require("/Users/faizan/Documents/Codes/Development/Moffitt/MAPSDemo/Components/Modules/Assets/Rectangle196.png")}
          style={styles.modalImage}
        />
        <Text style={styles.modalText}>
          Lorem ipsum dolor sit amet consectetur. Sed
          ipsum diam sed semper potenti eget quis varius
          dui. Varius vel fringilla purus elit sit ac. Neque p...
        </Text>
        <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate("VideoPlayer", { goal })}>
          <Text style={styles.playButtonText}>Play Video</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const VideoPlayer = ({ route }) => {
  const { goal } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{goal}</Text>
      <View style={{marginTop: 20}}>
      <Video
        source={{ uri: "https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4" }}
        style={styles.video}
        controls={true}
        resizeMode={"cover"}
      />
      <Text style={{backgroundColor: '#fff', borderColor:'#D9D9D9', borderRadius: 4, borderWidth: 1, padding: 20, lineHeight: 16.2}}>{'To help you prepare for your Quit Day, it is important to identify and plan for “high risk” situations. Think about situations that have tripped you up when you have tried to quit previously. When you’re ready, play the video, and then tap the back arrow to return to the previous screen.'}</Text>
      </View>
      <View style={{marginTop: 20}}>
      <Video
        source={{ uri: "https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4" }}
        style={styles.video}
        controls={true}
        resizeMode={"cover"}
      />
      <Text style={{backgroundColor: '#fff', borderColor:'#D9D9D9', borderRadius: 4, borderWidth: 1, padding: 20, lineHeight: 16.2}}>{'To help you prepare for your Quit Day, it is important to identify and plan for “high risk” situations. Think about situations that have tripped you up when you have tried to quit previously. When you’re ready, play the video, and then tap the back arrow to return to the previous screen.'}</Text>
      </View>
      <View style={{marginTop: 20}}>
      <Video
        source={{ uri: "https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4" }}
        style={styles.video}
        controls={true}
        resizeMode={"cover"}
      />
      <Text style={{backgroundColor: '#fff', borderColor:'#D9D9D9', borderRadius: 4, borderWidth: 1, padding: 20, lineHeight: 16.2}}>{'To help you prepare for your Quit Day, it is important to identify and plan for “high risk” situations. Think about situations that have tripped you up when you have tried to quit previously. When you’re ready, play the video, and then tap the back arrow to return to the previous screen.'}</Text>
      </View>
    </ScrollView>
  );
};

const WellnessAc = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="WellnessAc" component={WellnessDac} />
      <Stack.Screen options={{headerShown:false}} name="GoalDetail" component={GoalDetail} />
      <Stack.Screen options={{headerShown:false}} name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  goalsContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f2f2f2",
  },
  goalsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  goalsText: {
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    borderWidth: 4,
    borderColor: "#03588C",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 4,
    height: 60,
    width: 333,
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 10,
  },
  buttonText: {
    color: "#03588C",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
   justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  closeButton: {
    padding: 10,
    alignItems: "flex-end",
  },
  closeButtonText: {
    color: "#03588C",
    fontSize: 16,
  },
  modalImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
  },
  playButton: {
    borderWidth: 4,
    borderColor: "#03588C",
    backgroundColor: "#03588C",
    alignItems: "center",
    borderRadius: 4,
    height: 60,
    width: 333,
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 10,
  },
  playButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  video: {
    width: "100%",
    height: 250,
  },
});

export default WellnessAc;