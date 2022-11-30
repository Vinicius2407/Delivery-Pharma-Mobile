import { useEffect, useRef } from "react";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";

import { Wrapper } from "../../components/Wrapper";
import { Input } from "../../components/Input";
import { styles } from "../../globals/styles.global";
import { BackButton, InputContainer, Row } from "./styles";

export function Search() {
  const inputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Wrapper>
      <Row>
        <BackButton onPress={handleGoBack} activeOpacity={0.7}>
          <Icon.CaretLeft color={styles.colors.heading} size={25} />
        </BackButton>
        <InputContainer>
          <Input inputRef={inputRef} icon="MagnifyingGlass" placeholder="Pesquisar produto"  />
        </InputContainer>
      </Row>
    </Wrapper>
  );
}