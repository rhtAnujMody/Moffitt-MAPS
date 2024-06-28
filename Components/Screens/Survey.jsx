import React, {useEffect, useState} from 'react';
import {
  Animated,
  Button,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import CheckboxQuestionComponent from './components/SurveyComponent/CheckboxQuestionComponent';
import RadioQuestionComponent from './components/SurveyComponent/RadioQuestionComponent';


const Survey = ({navigation, route}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const progressAnimation = new Animated.Value(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const {surveyData} = route.params;
  console.log(surveyData);

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: currentIndex / surveyData.length,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex === surveyData.length - 1) {
      checkEligibility();
      setShowSuccessMessage(true);
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleBack = () => {
    setCurrentIndex(prevIndex => prevIndex - 1);
  };


  const handleAnswerChange = option => {
    const currentQuestion = surveyData[currentIndex];
    let newAnswers = answers && answers.length > 0 ? [...answers] : [];

    if (currentQuestion.type === 'checkbox') {
      if (newAnswers[currentIndex]?.includes(option)) {
        newAnswers[currentIndex] = newAnswers[currentIndex].filter(
          item => item !== option,
        );
      } else {
        if (newAnswers[currentIndex]) {
          newAnswers[currentIndex].push(option);
        } else {
          newAnswers[currentIndex] = [option];
        }
      }
    } else if (currentQuestion.type === 'radio') {
      newAnswers[currentIndex] = option;
    }

    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    surveyData.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) {
        score++;
      }
    });
    return score;
  };

  const isNextButtonDisabled = () => {
    const currentQuestion = surveyData[currentIndex];
    if (currentQuestion.type === 'checkbox') {
      return !answers[currentIndex] || answers[currentIndex].length === 0;
    }
    return !answers[currentIndex];
  };

  const renderQuestion = () => {
    const currentQuestion = surveyData[currentIndex];
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
      default:
        return null;
    }
  };
  console.log('length', surveyData.length);
  console.log('current index', currentIndex);
  return (
    <ScrollView style={styles.container}>

      {!showSuccessMessage && (
        <>
        <View style={styles.imageCent}>
        <Image        
        source={require('./AAC_ResLOGOMOFFITT.png')}
        style={styles.image}></Image>
        </View>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBarText}>
              <Text>{`Progress ${currentIndex + 1}/${surveyData.length}`}</Text>
              <Text>{currentIndex!=0?(((currentIndex + 1)/surveyData.length)*100).toFixed(0)+' %':'0 %'}</Text>
            </View>
            <Animated.View
              style={[
                styles.progressBar,
                {
                  width: progressAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </View>
          {renderQuestion()}
          <View style={styles.buttonContainer}>
            {currentIndex !== 0 && (
              <TouchableOpacity
                style={[styles.button2]}
                onPress={handleBack}
              >
              <Text style = {{color:'#19b5fe'}}>{"Back"}</Text>
              </TouchableOpacity>
            )}
            <View style={{marginHorizontal: 10}} />
            <TouchableOpacity
              style={styles.buttonCs}
              onPress={handleNext}
              disabled={isNextButtonDisabled()}
            >
              <Text>
                {currentIndex === surveyData.length - 1 ? 'Submit' : 'Next'}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
    height: '100%',
  },
  imageCent:{
    alignItems:'center',
    marginBottom:40,
  },
  radioButon:{
    backgroundColor: 'blue'
  },
  buttonCs: {
    marginTop: 40,
    backgroundColor: '#f9cb42',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
    width:112,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  progressBarContainer: {
    flexDirection: 'column',
    alignItems: 'left',
    marginBottom: 16,
  },
  progressBarText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#39C0E0',
    borderRadius: 5,
    marginTop: 4,
    color: 'red',
  },
  progressText: {
    marginBottom: 8,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  button2: {
    marginTop: 40,
    width:112,
    borderRadius: '10px',
    marginRight: '10px',
    color: '#ffffff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#19b5fe',
    height: 34,
  },
  completionMessage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
});

export default Survey;
