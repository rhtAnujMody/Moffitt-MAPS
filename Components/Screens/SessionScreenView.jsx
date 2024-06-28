import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Video from 'react-native-video'; // Assuming you use a video library like react-native-video

const processJson = (jsonData) => {
    const completeJson = jsonData;

    function replaceFieldName(jsonData) {
      const newJson = [];
      for (let i = 0; i < jsonData.length; i++) {
        const currentObj = jsonData[i];

        if (currentObj.field_annotation && currentObj.field_annotation.includes("@MEDAL-VIDEO")) {

          const nextObjFieldName = jsonData[i + 1].field_name;
          currentObj.field_name = nextObjFieldName;
          newJson.push(currentObj);
    
          
          i += 1;
        }
        else if(currentObj.field_name.includes("prompt")){
          const nextFieldName = jsonData[i + 1].field_name;
          currentObj.field_name = nextFieldName;
          newJson.push(currentObj);
    
          i += 1;
        }
        else {
          newJson.push(currentObj);
        }
    
      }
    
      return newJson;
    }
    
    jsonData = (replaceFieldName(completeJson));
  return jsonData; 
};

const screenSession = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [skipElement, setSkipElement] = useState(false);

  useEffect(() => {
    // Simulating fetching JSON data
    const completeJson = [
        {
          "field_name": "s1_start_time",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "text",
          "field_label": "Session 1 Start Time",
          "select_choices_or_calculations": "",
          "field_note": "datetime of session engagement",
          "text_validation_type_or_show_slider_number": "datetime_seconds_mdy",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@NOW @HIDDEN-APP"
        },
        {
          "field_name": "s1_v1_getting_started",
          "form_name": "session_1",
          "section_header": "Section 1 | Getting Started",
          "field_type": "descriptive",
          "field_label": "",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@MEDAL-VIDEO('https://youtu.be/Ri8AK15yzMU')"
        },
        {
          "field_name": "s1_video1_desc",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "descriptive",
          "field_label": "In this Session, we'll work to find new strategies and ideas that may help you to achieve your goals. When you're ready, play the video, and then tap 'Next' when you're finished.",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_video1_watched",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "yesno",
          "field_label": "Video 1 Watched",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@HIDDEN-APP @DEFAULT='1'"
        },
        {
          "field_name": "cigarette_urges",
          "form_name": "session_1",
          "section_header": " Question 1 of 4",
          "field_type": "dropdown",
          "field_label": "<p>Choose an answer to the question below.</p> <p>When do you find that you MOST want a cigarette?</p>",
          "select_choices_or_calculations": "1, In the morning | 2, When I'm with friends or family | 3, When I'm relaxing | 4, When I'm having a drink | 5, When I'm feeling sad or stressed",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "autocomplete",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "y",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "importance_quitting",
          "form_name": "session_1",
          "section_header": " Question 2 of 4",
          "field_type": "slider",
          "field_label": "<p>The first thing I would like to do is to get a sense of how important it is for YOU to quit smoking.<br />Drag the slider with your finger to answer the question below. <br />On a scale from 1 to 10, how important is it for you to quit?</p>",
          "select_choices_or_calculations": "Not At All Important |  | Very Important",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "number",
          "text_validation_min": "1",
          "text_validation_max": "10",
          "identifier": "",
          "branching_logic": "",
          "required_field": "y",
          "custom_alignment": "RH",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "confident_to_quit",
          "form_name": "session_1",
          "section_header": " Question 3 of 4",
          "field_type": "slider",
          "field_label": "<p>Drag the slider with your finger to answer the question below. <br />Now, on this same scale from 1 to 10, how confident are you that if you decided to quit, you would be able to succeed? </p>",
          "select_choices_or_calculations": "Not At All Confident |  | Very Confident",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "number",
          "text_validation_min": "1",
          "text_validation_max": "10",
          "identifier": "",
          "branching_logic": "",
          "required_field": "y",
          "custom_alignment": "RH",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "ready_to_quit",
          "form_name": "session_1",
          "section_header": " Question 4 of 4",
          "field_type": "slider",
          "field_label": "<p>Drag the slider with your finger to answer the question below. <br />Now, on this same scale from 1 to 10, how ready are you to quit smoking? </p>",
          "select_choices_or_calculations": "Not At All Ready |  | Completely Ready",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "number",
          "text_validation_min": "1",
          "text_validation_max": "10",
          "identifier": "",
          "branching_logic": "",
          "required_field": "y",
          "custom_alignment": "RH",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_v2_not_ready_to_quit",
          "form_name": "session_1",
          "section_header": " Session 1 | Getting Started",
          "field_type": "descriptive",
          "field_label": "",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]<=5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@MEDAL-VIDEO('https://youtu.be/Ri8AK15yzMU')"
        },
        {
          "field_name": "s1_video2_desc",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "descriptive",
          "field_label": "When you're ready, play the video and then tap 'Next' when you're finished.",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]<=5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_video2_watched",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "yesno",
          "field_label": "Video 2 Watched",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]<=5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@DEFAULT='1' @HIDDEN-APP"
        },
        {
          "field_name": "more_information",
          "form_name": "session_1",
          "section_header": " Question 1 of 1",
          "field_type": "radio",
          "field_label": "<p>Choose an answer to the question below.</p> <p>Would it be okay if I share some information with you about quitting smoking that might improve how your body responds to cancer treatment?</p>",
          "select_choices_or_calculations": "1, Yes, I'd like to learn more | 0, No, I don't want to hear this right now",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]<=5",
          "required_field": "y",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_v3_quitting_and_cancer_treatment",
          "form_name": "session_1",
          "section_header": "Session 1 | Getting Started",
          "field_type": "descriptive",
          "field_label": "",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[more_information]=1",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@MEDAL-VIDEO('https://youtu.be/Ri8AK15yzMU')"
        },
        {
          "field_name": "s1_video3_desc",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "descriptive",
          "field_label": "When you're ready, play the video, and then tap 'Next' when you're finished.",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[more_information]=1",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_video3_watched",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "yesno",
          "field_label": "Video 3 Watched",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[more_information]=1",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@DEFAULT='1' @HIDDEN-APP"
        },
        {
          "field_name": "s1_v4_wellness_plan_introduction",
          "form_name": "session_1",
          "section_header": "Session 1 | Getting Started",
          "field_type": "descriptive",
          "field_label": "",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[more_information] = '0'",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@MEDAL-VIDEO('https://youtu.be/Ri8AK15yzMU')"
        },
        {
          "field_name": "s1_video4_desc",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "descriptive",
          "field_label": "When you're ready, play the video, and then tap 'Next' when you're finished.",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[more_information] = '0'",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_video4_watched",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "yesno",
          "field_label": "Video 4 Watched",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[more_information] = '0'",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@DEFAULT='1' @HIDDEN-APP"
        },
        {
          "field_name": "s1_v5_preparing_to_quit",
          "form_name": "session_1",
          "section_header": "Session 1 | Getting Started",
          "field_type": "descriptive",
          "field_label": "",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]>5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@MEDAL-VIDEO('https://youtu.be/Ri8AK15yzMU')"
        },
        {
          "field_name": "s1_v5_preparing_to_quit_desc",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "descriptive",
          "field_label": "When you're ready, play the video, and then tap 'Next' when you're finished.",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]>5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_video5_watched",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "yesno",
          "field_label": "Video 5 Watched",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]>5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@DEFAULT='1' @HIDDEN-APP"
        },
        {
          "field_name": "wellness_plan_s1",
          "form_name": "session_1",
          "section_header": " Question 1 of 1",
          "field_type": "checkbox",
          "field_label": "<p>Choose an answer to the question below. <br />What topics from the list below should we include in your Wellness Plan?<br />Please select as many topics as you'd like.</p>",
          "select_choices_or_calculations": "1, Explore cutting down or quitting smoking | 2, Cut back on drinking | 3, Exercise/Physical Activity | 4, Healthy Eating | 5, Managing Stress | 6, Managing Finances | 7, Improving Sleep",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "y",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_text5",
          "form_name": "session_1",
          "section_header": " ",
          "field_type": "descriptive",
          "field_label": "<p>Wellness Plan Saved</p> <p>Your selections for the Wellness Plan have been saved. You can access your plan anytime by tapping the Wellness button at the bottom of your screen.</p>",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@MEDAL-POPUP"
        },
        {
          "field_name": "s1_v6a_not_ready_wrapup",
          "form_name": "session_1",
          "section_header": "Session 1 | Getting Started",
          "field_type": "descriptive",
          "field_label": "",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[more_information]='1' or [more_information]='0'",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@MEDAL-VIDEO('https://youtu.be/Ri8AK15yzMU')"
        },
        {
          "field_name": "s1_video6a_desc",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "descriptive",
          "field_label": "When you're ready, play the video, and then tap 'Next' when you're finished.",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[more_information]='1' or [more_information]='0'",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_video6a_watched",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "yesno",
          "field_label": "Video 6a Watched",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[more_information]='1' or [more_information]='0'",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@DEFAULT='1' @HIDDEN-APP"
        },
        {
          "field_name": "s1_v6b_wellness_plan",
          "form_name": "session_1",
          "section_header": " Session 1 | Getting Started",
          "field_type": "descriptive",
          "field_label": "",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]>5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@MEDAL-VIDEO('https://youtu.be/Ri8AK15yzMU')"
        },
        {
          "field_name": "s1_video6b_desc",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "descriptive",
          "field_label": "<p>Personalized Wellness Plan<br />Now, let's review your Wellness Plan topics. <br />When you're ready, play the video, and then tap 'Next' when you're finished.</p>",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]>5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_video6b_watched",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "yesno",
          "field_label": "Video 6b Watched",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]>5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@DEFAULT='1' @HIDDEN-APP"
        },
        {
          "field_name": "s1_v6c_ready_wrapup",
          "form_name": "session_1",
          "section_header": " Session 1 | Getting Started",
          "field_type": "descriptive",
          "field_label": "",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]>5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@MEDAL-VIDEO('https://youtu.be/Ri8AK15yzMU')"
        },
        {
          "field_name": "s1_video6c_desc",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "descriptive",
          "field_label": "<p>Session 1 Wrap-Up<br />When you're ready, play the video, and then tap 'Next' when you're finished.</p>",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]>5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_video6c_watched",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "yesno",
          "field_label": "Video 6c Watched",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "[ready_to_quit]>5",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@DEFAULT='1' @HIDDEN-APP"
        },
        {
          "field_name": "s1_finish_image",
          "form_name": "session_1",
          "section_header": "Session 1 | Getting Started",
          "field_type": "descriptive",
          "field_label": "",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@MEDAL-IMAGE('http://image.com')"
        },
        {
          "field_name": "s1_finish",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "descriptive",
          "field_label": "<p>You've completed your session.</p>",
          "select_choices_or_calculations": "",
          "field_note": "",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": ""
        },
        {
          "field_name": "s1_end_time",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "text",
          "field_label": "Session 1 End Time",
          "select_choices_or_calculations": "",
          "field_note": "datetime of session disengagement",
          "text_validation_type_or_show_slider_number": "datetime_seconds_mdy",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@NOW @HIDDEN-APP"
        },
        {
          "field_name": "s1_time_count",
          "form_name": "session_1",
          "section_header": "",
          "field_type": "calc",
          "field_label": "Session 1 Time Count",
          "select_choices_or_calculations": "datediff([s1_start_time], [s1_end_time], 's')",
          "field_note": "Cumulative seconds in session",
          "text_validation_type_or_show_slider_number": "",
          "text_validation_min": "",
          "text_validation_max": "",
          "identifier": "",
          "branching_logic": "",
          "required_field": "",
          "custom_alignment": "",
          "question_number": "",
          "matrix_group_name": "",
          "matrix_ranking": "",
          "field_annotation": "@HIDDEN-APP"
        }
      ];

    const transformedData = processJson(completeJson);
    setData(transformedData);
  }, []);

  const handleNext = () => {
    setSkipElement(false);
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSkip = () => {
    setSkipElement(true);
    handleNext();
  };

  const renderContent = () => {
    const currentItem = data[currentIndex];
    if (!currentItem) return null;

    if (currentItem.field_annotation && currentItem.field_annotation.includes("@MEDAL-TEXTONLY")) {
      return (
        <View style={styles.card}>
          <Text style={styles.text}>{currentItem.field_name}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Previous" onPress={handlePrevious} />
            <Button title="Next" onPress={handleNext} />
          </View>
        </View>
      );
    } else if (currentItem.section_header && currentItem.section_header.includes("Question")) {
      return (
        <Modal visible={modalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>{currentItem.field_name}</Text>
              {/* Options rendering logic here */}
              <View style={styles.buttonContainer}>
                <Button title="Back" onPress={handlePrevious} />
                <Button title="Next" onPress={handleNext} />
              </View>
            </View>
          </View>
        </Modal>
      );
    } else if (currentItem.field_annotation && currentItem.field_annotation.includes("@MEDAL-VIDEO")) {
      return (
        <View style={styles.card}>
          <Video source={{ uri: currentItem.field_name }} style={styles.video} />
          <Text style={styles.description}>{currentItem.description}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Previous" onPress={handlePrevious} />
            <Button title="Next" onPress={handleNext} />
          </View>
        </View>
      );
    } else if (currentItem.field_annotation && currentItem.field_annotation.includes("@MEDAL-POPUP")) {
      return (
        <Modal visible={modalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Confirmation needed</Text>
              <Button title="OK" onPress={handleNext} />
              <Button title="Back" onPress={handleSkip} />
            </View>
          </View>
        </Modal>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  video: {
    width: '100%',
    height: 200,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default screenSession;
