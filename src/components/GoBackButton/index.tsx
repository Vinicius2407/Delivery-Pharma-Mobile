import { useNavigation } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";

import { BackButton } from "./styles";
import { styles } from "../../globals/styles.global";

export function GoBackButton() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <BackButton onPress={handleGoBack} activeOpacity={0.7}>
      <Icon.CaretLeft color={styles.colors.heading} size={25} />
    </BackButton>
  );
}
