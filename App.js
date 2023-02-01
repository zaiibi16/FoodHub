import "react-native-gesture-handler";
import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Dimensions, SafeAreaView } from "react-native";
import normalized from "rn-normalized";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import persistStore from "redux-persist/es/persistStore";

import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import VerificationCodeScreen from "./screens/VerificationCodeScreen";
import PhoneRegistrationScreen from "./screens/PhoneRegistrationScreen";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FoodDetailScreen from "./screens/FoodDetailScreen";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";
import CheckoutScreen from "./screens/CheckoutScreen";

import { WEB_CLIENT_ID } from "@env";

import { store } from "./store/store";
let persistor = persistStore(store);

import { AuthContext, AuthProvider } from "./components/AuthProvider";

import HomeDrawer from "./components/DrawerNavigator";

import { headerTextButton, HeaderLeftButton } from "./components/ui/Buttons";
import { PersistGate } from "redux-persist/integration/react";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const Stack = createStackNavigator();

const Root = () => {
	const [initializing, setInitializing] = useState(true);
	const { user, setUser } = useContext(AuthContext);

	function onAuthStateChanged(user) {
		setUser(user);
		if (initializing) {
			setInitializing(false);
		}
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		GoogleSignin.configure({
			webClientId: WEB_CLIENT_ID,
		});
		return subscriber; // unsubscribe on unmount
	}, []);

	if (initializing) {
		return null;
	}

	let routeName;

	if (user) {
		routeName = "Home";
	} else {
		routeName = "Welcome";
	}

	return <Navigation />;
};

const Navigation = () => {
	const { user } = useContext(AuthContext);
	SplashScreen.hide(); //hides the splash screen on app load.
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<NavigationContainer>
					<Stack.Navigator>
						{user == null ? (
							<>
								<Stack.Screen
									name="Welcome"
									component={WelcomeScreen}
									options={{
										headerTransparent: true,
										headerRight: () => headerTextButton({ text: "Skip" }),
										title: false,
										headerRightContainerStyle: {
											paddingRight: normalized(20),
										},
									}}
								/>
								<Stack.Screen
									name="SignUp"
									component={SignUpScreen}
									options={{
										headerShown: false,
									}}
								/>
								<Stack.Screen
									name="Login"
									component={LoginScreen}
									options={{
										headerStyle: {
											height: deviceHeight / 8,
										},
										headerTransparent: true,
										headerLeft: () => {
											return <HeaderLeftButton />;
										},
										title: false,
										headerLeftContainerStyle: {
											paddingLeft: normalized(20),
											justifyContent: "center",
										},
									}}
								/>
								<Stack.Screen
									name="PhoneRegistration"
									component={PhoneRegistrationScreen}
									options={{
										headerStyle: {
											height: deviceHeight / 8,
										},
										headerTransparent: true,
										headerLeft: () => {
											return <HeaderLeftButton />;
										},
										title: false,
										headerLeftContainerStyle: {
											paddingLeft: normalized(20),
											justifyContent: "center",
										},
									}}
								/>
								<Stack.Screen
									name="ResetPassword"
									component={ResetPasswordScreen}
									options={{
										headerStyle: {
											height: deviceHeight / 8,
										},
										headerTransparent: true,
										headerLeft: () => {
											return <HeaderLeftButton />;
										},
										title: false,
										headerLeftContainerStyle: {
											paddingLeft: normalized(20),
											justifyContent: "center",
										},
									}}
								/>
								<Stack.Screen
									name="VerificationCode"
									component={VerificationCodeScreen}
									options={{
										headerStyle: {
											height: deviceHeight / 8,
										},
										headerTransparent: true,
										headerLeft: () => {
											return <HeaderLeftButton />;
										},
										title: false,
										headerLeftContainerStyle: {
											paddingLeft: normalized(20),
											justifyContent: "center",
										},
									}}
								/>
							</>
						) : (
							<>
								<Stack.Screen
									name="Home"
									component={HomeDrawer}
									options={{
										headerStyle: {
											height: deviceHeight / 8,
										},
										headerTransparent: true,
										headerBackTitleVisible: false,
										headerLeft: () => null,
										title: false,
										headerLeftContainerStyle: {
											paddingLeft: normalized(20),
											justifyContent: "center",
										},
									}}
								/>
								<Stack.Screen
									name="FoodDetail"
									component={FoodDetailScreen}
									options={{
										headerStyle: {
											height: deviceHeight / 8,
										},
										headerTransparent: true,
										headerLeft: () => {
											return <HeaderLeftButton />;
										},
										title: false,
										headerLeftContainerStyle: {
											paddingLeft: normalized(40),
											justifyContent: "center",
										},
									}}
								/>
								<Stack.Screen
									name="RestaurantDetail"
									component={RestaurantDetailScreen}
									options={{
										headerStyle: {
											height: deviceHeight / 8,
										},
										headerTransparent: true,
										headerLeft: () => {
											return <HeaderLeftButton />;
										},
										title: false,
										headerLeftContainerStyle: {
											paddingLeft: normalized(40),
											justifyContent: "center",
										},
									}}
								/>
								<Stack.Screen
									name="Checkout"
									component={CheckoutScreen}
									options={{
										headerShown: false,
									}}
								/>
							</>
						)}
					</Stack.Navigator>
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
};

const App = () => {
	return (
		<AuthProvider>
			<Root />
		</AuthProvider>
	);
};

const styles = StyleSheet.create({});

export default App;
