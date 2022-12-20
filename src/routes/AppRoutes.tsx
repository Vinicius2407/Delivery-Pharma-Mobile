import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Icon from "phosphor-react-native";

import { Home } from "../screens/Home";
import { Products } from "../screens/Products";
import { Orders } from "../screens/Orders";
import { Account } from "../screens/Account";
import { Search } from "../screens/Search";
import { CategoryProducts } from "../screens/CategoryProducts";

import { styles } from "../globals/styles.global";
import { ProductDetails } from "../screens/ProductDetails";
import { UserPersonalData } from "../screens/MyPersonalData";
import { EditUserInformations } from "../screens/EditUserInformations";
import { EditLoginInformations } from "../screens/EditUserLoginInformations";
import { Adresses } from "../screens/Adresses";
import { EditAddress } from "../screens/EditAddress";

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: styles.colors.contrast,
          elevation: 0,
          borderTopWidth: 1,
          borderColor: styles.colors.border,
          height: 70,
        },
        tabBarItemStyle: {
          padding: 12,
        },
        tabBarIconStyle: {
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontFamily: styles.fonts.medium,
          fontSize: 14,
        },
        tabBarActiveTintColor: styles.colors.blue,
      }}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          title: "Início",
          tabBarIcon: ({ focused, ...props }) => (
            <Icon.House weight={focused ? "duotone" : "regular"} {...props} />
          ),
        }}
      />
      <Tab.Screen
        component={Products}
        name="Products"
        options={{
          title: "Produtos",
          tabBarIcon: ({ focused, ...props }) => (
            <Icon.Package weight={focused ? "duotone" : "regular"} {...props} />
          ),
        }}
      />
      <Tab.Screen
        component={Orders}
        name="Orders"
        options={{
          title: "Pedidos",
          tabBarIcon: ({ focused, ...props }) => (
            <Icon.ShoppingCartSimple
              weight={focused ? "duotone" : "regular"}
              {...props}
            />
          ),
        }}
      />
      <Tab.Screen
        component={Account}
        name="Account"
        options={{
          title: "Conta",
          tabBarIcon: ({ focused, ...props }) => (
            <Icon.User weight={focused ? "duotone" : "regular"} {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={TabRoutes} name="TabRoutes" />
      <Stack.Screen
        component={Search}
        name="Search"
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        component={CategoryProducts}
        name="CategoryProducts"
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        component={ProductDetails}
        name="ProductDetails"
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        component={UserPersonalData}
        name="MyPersonalData"
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        component={UserPersonalData}
        name="UserPersonalData"
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        component={EditUserInformations}
        name="EditUserInformations"
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        component={EditLoginInformations}
        name="EditLoginInformations"
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        component={Adresses}
        name="Adresses"
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        component={EditAddress}
        name="EditAddress"
        options={{ animation: "fade" }}
      />
    </Stack.Navigator>
  );
}
