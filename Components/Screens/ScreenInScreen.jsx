import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyComponent from "./TestSes";

const data = [
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

const jsonData = data.filter(item => !item.field_annotation.includes('@HIDDEN-APP'));

const screenInScreen = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isQuestion, setIsQuestion] = useState(false);
    const [isVideo, setIsVideo] = useState(false);
    const [isText, setIsText] = useState(false);
    const [isPopUp, setIsPopUp] = useState(false);
    const [isEndCard, setIsEndCard] = useState(false);
  
    useEffect(() => {
      if (jsonData[currentIndex]) {
        setIsQuestion(false);
        setIsVideo(jsonData[currentIndex].field_annotation.includes('@MEDAL-VIDEO')|| false);
        setIsText(false);
        setIsPopUp(false);
        setIsEndCard(false);
      }
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jsonData.length);
    };
    
    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + jsonData.length) % jsonData.length);
    };
  
const dataProcessing = (jsonData) => {
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
    outjson = replaceFieldName(completeJson);
    return outjson
};


return (
    <View style={styles.contV}>
        <MyComponent></MyComponent>
        <View></View>
        <Text style={styles.nameTitle}>
            {'Title'}
        </Text>
        {isVideo?
        (<View style={styles.cent}>
        <View style={styles.viewer}>
            <Video source={{uri: 'https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4', type: 'mp4'}} 
                ref={(ref) => {this.player = ref}}                
                controls={true}
                onBuffer={this.onBuffer}
                onError={this.videoError}
                style={styles.backgroundVideo} />
            <Text>
                {'Description, this is an example dss'}
            </Text>
        </View>
        </View>):
        (<View></View>)}
            <View style={styles.buttonSide}>
            <View style={styles.backButton}>
            <TouchableOpacity onPress={handleBack} disabled={currentIndex === 0} style={styles.iconAlign}>
            <Ionicons name={'chevron-back'} size={18} color={'#484848'} />
                <Text style={styles.backButtonText}>
                    {'Back'}
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.nextButton}>
            <TouchableOpacity onPress={handleNext} disabled={currentIndex === jsonData.length - 1} style={styles.iconAlign}>
                <Text style={styles.nextButtonText}>
                    {'Next'}
                </Text>
                <Ionicons name={'chevron-forward-outline'} size={18} color={'#03588C'} />
            </TouchableOpacity>
            </View>
        </View> 
    </View>
);
};

const styles = StyleSheet.create({
    iconAlign:{
        flexDirection:'row',

    },
    nextButtonText:{
        fontSize: 16,
        fontWeight:'700',
        lineHeight: 18,
        textAlign: 'left',
        color:'#03588C'
    },
    backButtonText:{
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 18,
        textAlign:'left', 
        color:'#484848',       
    },
    backButton:{
        textAlign:'left',
        width:'50%'
    },
    nextButton:{
        textAlign:'right',
        alignItems:'flex-end',
        width:"47%",
    },
    viewer:{
        backgroundColor: '#FFFFFF',
        justifyContent:'center',
        padding:20,
        height:'auto',
        width:'auto',
    },
    contV:{
        flex:1,
        padding:20, 
        alignContent:'center',
    },
    image:{
        resizeMode:'cover',
    },
    imageContainer: {
        display:'flex',
        justifyContent:'flex-end'
      },
    title:{
        fontSize: 22,
        fontWeight: '600',
        lineHeight: 25.78,
        textAlign: 'left',
        color: '#03588C',
    },
    buttonSide:{
        flexDirection:'row',
        marginTop:20,
    },
    nameTitle:{
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
        marginTop:20,
        textAlign: 'left',
    },
    startSessionButton:{
        backgroundColor:'#03588C',
        borderRadius:4,
        height:48,
        marginTop: 20,
        paddingLeft:16,
        paddingRight:16,
        paddingTop:10,
        paddingBottom:10,
        alignItems:'center'
    },
    startSessionButtonText:
    {
        fontWeight:'500',
        lineHeight:24,
        fontSize:16,
        color:'#FFFFFF'
    },
    backgroundVideo: {
        width:350,
        height:350,
        alignItems:'center',
        justifyContent:'center'
      },
    cent:{
        justifyContent:'center',
        padding:20,
    },
    }
    );
export default screenInScreen;