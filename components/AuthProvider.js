import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
//import {getAuth, updateProfile} from 'firebase/auth';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            const response = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
          } catch (error) {
            console.log(error);
          }
        },
        register: async (email, password, fullName) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            await auth().currentUser.updateProfile({
              displayName: fullName,
            });
            setUser(auth().currentUser);
          } catch (error) {
            console.log(error);
          }
        },
        update: async (displayName, email, success) => {
          try {
            const update = {
              displayName: displayName,
            };
            await auth().currentUser.updateProfile(update);
            await auth().currentUser.updateEmail(email);
            setUser(auth().currentUser);
            success();
          } catch (error) {}
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (error) {
            Alert.alert(error);
          }
        },
        googleLogin: async () => {
          try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({
              showPlayServicesUpdateDialog: true,
            });
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.log(error);
          }
        },
        facebookLogin: async () => {
          try {
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential);
          } catch (error) {
            console.log(error);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
