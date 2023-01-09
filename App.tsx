import 'react-native-gesture-handler';
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "./src/hooks/fonts.hook";

import { AuthenticationProvider } from "./src/contexts/AuthenticationContext";
import { Routes } from "./src/routes";
import { styles } from "./src/globals/styles.global";

export default function App() {
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await useFonts();
      setIsFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
        <AuthenticationProvider>
            <StatusBar style="dark" backgroundColor={styles.colors.background} translucent={false} />
            <Routes />
        </AuthenticationProvider>
    </NavigationContainer>
  );
}
