import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ProgressBar = ({ percentage, imageSource }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBackground}>
        <View style={[styles.progressForeground, { width: `${percentage}%` }]}>
          {imageSource && percentage > 0 && percentage <= 100 && (
            <Image
              source={imageSource}
              style={styles.image}
              resizeMode="contain"
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  progressBackground: {
    height: 10,
    width: '100%',
    backgroundColor: '#F7C02B',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressForeground: {
    height: '100%',
    backgroundColor: '#EB8F00',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 20,
    height: 20,
    position: 'absolute',
  },
});

export default ProgressBar;
