import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApiHosterIPConfig } from "../screens/ApiHosterIPConfig";

const Stack = createNativeStackNavigator();

export function IPConfigRoute() {
  return ( 
    <Stack.Navigator 
      initialRouteName="ApiHosterIPConfig" 
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen 
        name="ApiHosterIPConfig" 
        component={ApiHosterIPConfig} 
      />
    </Stack.Navigator>
  );
}
