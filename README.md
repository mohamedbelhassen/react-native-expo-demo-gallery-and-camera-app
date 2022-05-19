# react-native-expo-demo-gallery-and-camera-app

#install the app

    yarn install

#start app 

    yarn android
    
    
#app config

You have to put your parse server credentials in the following file:
    constants/Keys.js
    
then, in App.js file of the root directory, you have to comment out the line (import keys from './constants/MyKeys';) 
then uncomment the previous line (import keys from './constants/Keys';)
