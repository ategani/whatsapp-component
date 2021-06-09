import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';

import WhatsApp from '../components/WhatsApp';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <WhatsApp />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
});

export default HomeScreen;
