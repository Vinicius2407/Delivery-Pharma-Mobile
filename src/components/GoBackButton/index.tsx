import { useNavigation } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";

import { BackButton } from "./styles";
import { styles } from "../../globals/styles.global";
import { TouchableOpacityProps } from "react-native";

interface GoBackButtonProps extends TouchableOpacityProps {}

export function GoBackButton(props: GoBackButtonProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <BackButton onPress={handleGoBack} activeOpacity={0.7} { ...props } >
      <Icon.CaretLeft color={styles.colors.heading} size={25} />
    </BackButton>
  );
}
