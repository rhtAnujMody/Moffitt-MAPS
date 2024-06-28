import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

const Achievement = ({ data }) => {
  // Filter the badges that are completed
  const completedBadges = data ? data.filter(item => item.badge_configuration_complete === "1") : [];

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>{'Recent Achievements'}</Text>
      <ScrollView horizontal>
        {completedBadges.map((item, index) => (
          <View key={index} style={styles.badgeContainer}>
            <Image 
              source={item.image ? { uri: item.image } : require('/Users/faizan/Documents/Codes/Development/Moffitt/MAPSDemo/Components/Modules/Assets/Group44.png')} 
              style={styles.badgeImage} 
              onError={(error) => console.warn("Image Error:", error)}
            />
            <Text style={styles.badgeTitle}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
      {completedBadges.length === 0 && (
        <Text style={styles.subTitleTex}>{'All badges you earn will appear here.'}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#ffffff',
    height: 148,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 15,
  },
  subTitleTex: {
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 15,
    fontWeight: '500',
  },
  badgeContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  badgeImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  badgeTitle: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Achievement;
