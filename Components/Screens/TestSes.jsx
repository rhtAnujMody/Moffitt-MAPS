import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import data from './Assets/Se.json';
import SliderQuestion from '../Modules/SurveyComponent/SliderQestion';

const jsonData = data;

const MyComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < jsonData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); 
    }
  };

  const questionHandleNext = () => {
    if (questionIndex < jsonData.length - 1) {
      setCurrentQuestionIndex(questionIndex + 1);
    } else {
      setCurrentQuestionIndex(0); 
    }
  }

  const renderContent = () => {
    const currentItem = jsonData[currentIndex];
    switch (currentItem.contentType) {
      case 'video':
        return (
          <Video source={{uri: currentItem.url, type: 'mp4'}} 
                ref={(ref) => {this.player = ref}}                
                controls={true}
                onBuffer={this.onBuffer}
                onError={this.videoError}
                style={styles.backgroundVideo} />
        );
      case 'text':
        return <Text style={styles.text}>{currentItem.content}</Text>;
      case 'question':
          switch (currentQuestion.type) {
          case 'radio':
            return (
              <RadioQuestionComponent
                index={currentIndex}
                questions={currentQuestion.question}
                options={currentQuestion.options}
                selectedOption={answers[currentIndex]}
                onSelectOption={option => handleAnswerChange(option)}
              />
            );
          case 'checkbox':
            return (
              <CheckboxQuestionComponent
                index={currentIndex}
                questions={currentQuestion.question}
                options={currentQuestion.options}
                selectedOptions={answers[currentIndex] || []}
                onSelectOption={option => handleAnswerChange(option)}
                
              />
            );
          case 'slider':
            return (
              <SliderQuestion
                question="Now, on this same scale from 1 to 10, how confident are you that if you decided to quit, you would be able to succeed?"
                min={1}
                max={10}
                initialValue={4}
                onChange={handleConfidenceChange}
                labels={['Not At All Confident', 'Very Confident']}
              />
              );
            default:
            return null;
        }
      default:
        return <Text style={styles.text}>Unknown content type</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  backgroundVideo: {
    width:350,
    height:350,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default MyComponent;
