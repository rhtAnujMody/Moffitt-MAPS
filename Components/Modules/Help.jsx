import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Linking, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HelpScreen = () => {
    const navigation = useNavigation();
    const openPhoneDialer = (phoneNumber) => {
        const url = `tel:${phoneNumber}`;
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              console.log("Don't know how to open URI: " + url);
            }
          })
          .catch((err) => console.error('An error occurred', err));
      };
    const openExternalLink = (url) => {
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              console.log("Don't know how to open URI: " + url);
            }
          })
          .catch((err) => console.error('An error occurred', err));
      };
    return(
        <View style={styles.contV}>
            <View style={styles.contFlexRow}>
                <TouchableOpacity onPress={()=>{navigation.navigate('main')}} style={{marginTop:20,}}>
                    <Ionicons name={'chevron-back'} size={40} color={'#101213'} />
                </TouchableOpacity>
                <Text style={styles.contTitle}>
                    {'Settings | Help'}
                </Text>
            </View>
            <View style={styles.helpBackground}>
                <Text>
                    {'Do you have questions or require assistance? Please reach out to us with the resources below:'}
                </Text>
                <Text style={styles.emailText}>
                    {'Email: moffittresearch@moffitt.org'}
                </Text>
                <View style={styles.phoneView}>
                    <Text style={{fontWeight:'600', fontSize:16}}>
                        {'Phone: '}
                    </Text>
                    <TouchableOpacity onPress={()=>{openPhoneDialer('1234567891')}}>
                    <Text style={{textDecorationLine:'underline', color:'#03588C', fontSize:16, fontWeight:'600'}}>
                        {'(123) 456-7891'}
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center', marginTop:40,}}>
                    <TouchableOpacity onPress={()=>{openExternalLink('www.moffit.org')}}>
                        <Text style={{textDecorationLine:'underline', color:'#03588C', fontSize:16, fontWeight:'600'}}>
                            {'Privacy Policy'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    contV:{
        display:'flex',
        marign:20,
        padding:20,
    },
    contFlexRow:{
        flexDirection:'row'
    },
    contTitle:{
        fontSize:32,
        fontWeight:'700',
        lineHeight: 32,
        marginTop:26,
        textAlign: 'left',
        marginLeft: 10,
    },
    helpBackground:{
        backgroundColor:'#FFFFFF',
        borderColor:'#CED4DA',
        borderWidth:1,
        borderRadius:2,
        padding:20,
        marginTop:10,
    },
    emailText:{
        fontWeight:'600',
        fontSize:16,
        lineHeight:24,
        marginTop:40,
    },
    phoneView:{
        flexDirection:'row'
    },
});

export default HelpScreen