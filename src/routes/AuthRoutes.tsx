import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return ( 
    <Stack.Navigator 
      initialRouteName="SignIn" 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
      />
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
    </Stack.Navigator>
  );
}
