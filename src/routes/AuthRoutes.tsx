import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return ( 
    <Stack.Navigator initialRouteName="SignIn">
      {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
    </Stack.Navigator>
  );
}
