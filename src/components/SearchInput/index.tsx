import { useNavigation } from "@react-navigation/native";
import { TouchableOpacityProps } from "react-native";
import { Input } from "../Input";
import { Container } from "./styles";

interface SearchInputProps extends TouchableOpacityProps {}

export function SearchInput({ ...props }: SearchInputProps) {
  const navigation = useNavigation();

  function handleGoToSearchScreen() {
    navigation.navigate("Search" as never);
  }

  return (
    <Container {...props} activeOpacity={0.7} onPress={handleGoToSearchScreen}>
      <Input
        editable={false}
        icon="MagnifyingGlass"
        placeholder="Pesquisar produto"
      />
    </Container>
  );
}
