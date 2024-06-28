import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import Video from 'react-native-video';

const SessionInfoCard = () => {
    return(
        <View style={styles.viewer}>
            <View style={styles.imageContainer}>
            <Video source={{uri: 'https://cdn.coverr.co/videos/coverr-stream-next-to-the-road-4482/1080p.mp4', type: 'mp4'}} 
                ref={(ref) => {this.player = ref}}                
                controls={true}
                onBuffer={this.onBuffer}
                onError={this.videoError}
                style={styles.backgroundVideo}/>
            </View>
            <Text style={styles.title}>
                {'Getting Started'}
            </Text>
            <Text>
                {'5 minutes'}
            </Text>
            <Text>
                {'Let’s explore your interest in setting a quit date. It’s normal to worry about problems or barriers that might keep you from quitting.'}
            </Text>
            <TouchableOpacity onPress={()=>{}} style={styles.startSessionButton}>
                <Text style={styles.startSessionButtonText}>
                    {'Continue Session'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
viewer:{
    backgroundColor: '#FFFFFF',
    padding:20,
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
flexCss:{
    width:200,
    justifyContent: 'flex-end',
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
}
);

export default SessionInfoCard;