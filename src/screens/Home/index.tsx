import { useNavigation } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";

import { Wrapper } from "../../components/Wrapper";
import { SearchInput } from "../../components/SearchInput";
import { HorizontalCategories } from "../../components/HorizontalCategories";
import { ProductsList } from "../../components/ProductsList";
import { Divider, Highlight, styles } from "../../globals/styles.global";
import { Header, ProfileButton, Subtitle, Title, Username } from "./styles";

export function Home() {
  const navigation = useNavigation();

  function handleGoToAccountScreen() {
    navigation.navigate("Account" as never);
  }

  return (
    <Wrapper>
      <Header>
        <Username>
          <Title>
            Hey, <Highlight>Usuário</Highlight>
          </Title>
          <Subtitle>O que vai pedir hoje?</Subtitle>
        </Username>
        <ProfileButton activeOpacity={0.6} onPress={handleGoToAccountScreen}>
          <Icon.User color={styles.colors.heading} size={30} weight="duotone" />
        </ProfileButton>
      </Header>

      <SearchInput style={{ marginBottom: 20 }} />

      <HorizontalCategories />

      <Subtitle style={{ marginTop: 20 }}>
        <Highlight>Populares</Highlight>
      </Subtitle>

      <Divider style={{ marginBottom: 0 }} />

      <ProductsList />
    </Wrapper>
  );
}
