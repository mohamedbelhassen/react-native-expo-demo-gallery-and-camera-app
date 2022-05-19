import {SafeAreaView,  StyleSheet, Text, View } from 'react-native';

// In a React Native application
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import keys from './constants/Keys';
//Note: you have to comment out the following line and uncomment the previous line
import keys from './constants/MyKeys';

import UploadImage from './screens/UploadImage';
import Gallery from './screens/Gallery';

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(keys.applicationId, keys.javascriptKey);
Parse.serverURL = keys.serverURL;

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <UploadImage />
      {/* <Gallery /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
