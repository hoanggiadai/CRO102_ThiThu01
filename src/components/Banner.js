import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>Banner Quảng Cáo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#f8d7da',
    padding: 10,
    alignItems: 'center',
    height: 250,
    justifyContent: 'center',
    marginBottom: 20
  },
  bannerText: {
    color: '#721c24',
    fontSize: 18,
  },
});

export default Banner;