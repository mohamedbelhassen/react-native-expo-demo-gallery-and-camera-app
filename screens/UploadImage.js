import React, {useState} from 'react';
import {View, Button, Image, StyleSheet, Alert, ActivityIndicator,Text} from 'react-native';
//import {launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { LoadingModalPoup } from './LoadingPopup';

// import { Container } from './styles';
import Parse from 'parse/react-native.js';
const UploadImage = ({onSuccess}) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = React.useState(false);

  async function upload() {
    const {base64} = image;
    //console.log("base64")
    const parseFile = new Parse.File("userImage", {base64});

    try {
      setLoading(true)

      const responseFile = await parseFile.save();
      setLoading(false)

      const Gallery = Parse.Object.extend('Gallery');
      const gallery = new Gallery();
      gallery.set('picture', responseFile);

      await gallery.save();
      Alert.alert('The file has been saved to Back4app.');
    } catch (error) {
      console.log(
        'The file either could not be read, or could not be saved to Back4app.',
      );
    }
  }

  async function pickImage() {
    result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [5, 3],
        quality: 1,
        base64:true,
      });

    //   console.log("result: ")

    //   console.log(result)

    const manipResult = await ImageManipulator.manipulateAsync(
        result.uri,
        [],
        { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG , base64:true}
    );
    //MediaLibrary.saveToLibraryAsync(manipResult.uri);
    // console.log("manipResult: ")
    // console.log(manipResult)
   

    setImage(manipResult);
      /*
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        setImage(response);
      },
    );*/
  }
  return (
    <View>
        <View style={styles.button}>
      <Button
        onPress={pickImage}
        title="Pick an image from camera"
        color="#841584"
        
      />
    </View>
      {image && <Image source={{uri: image.uri}} style={styles.currentImage} />}
      {image && <Button title="Upload" color="green" onPress={upload} />}

        <View>

            <LoadingModalPoup visible={loading}>
            <View style={[styles.actIndicatorContainer, styles.actIndicatorHorizontal]}>
                <ActivityIndicator size={'large'} color="#000"/>
                <Text>Image upload in progress</Text>
            </View>
            </LoadingModalPoup>     

        </View>
        

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentImage: {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    alignSelf: 'center',
  },

  actIndicatorContainer: {
    height: 100,
    justifyContent: "center"
  },
  actIndicatorHorizontal: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignSelf: 'center',
    padding: 10
  },
  button:{padding:20, marginVertical:30},
});
export default UploadImage;
