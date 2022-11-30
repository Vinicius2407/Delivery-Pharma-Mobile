import { useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";

import { Wrapper } from "../../components/Wrapper";
import { GoBackButton } from "../../components/GoBackButton";
import { Row, Description, Image, ImageContainer, Title, Box, ProductPrice, Minus, Plus, FavoriteButton, ProductAmount } from "./styles";
import { Highlight, styles } from "../../globals/styles.global";
import { formatCurrency } from "../../utils/format.util";
import { ProductDataBackend } from "../../components/ProductsList";


interface RouteParamsData {
  product: ProductDataBackend
}

export function ProductDetails() {
  const route = useRoute();
  const { product } = route.params as RouteParamsData
  
  const changeTimer: React.MutableRefObject<any> = useRef(null);
  // const { product } = route.params as RouteParamsData;

  const [amountToBuy, setAmountToBuy] = useState(0);

  function handleIncreaseAmount() {
    setAmountToBuy((prev) => prev + 1);
  }

  function handleDecreaseAmount() {
    setAmountToBuy((prev) => (prev > 1 ? prev - 1 : 0));
  }

  // const handleIncreaseAmount = () => setAmountToBuy((prev) => prev + 1);
  // const handleDecreaseAmount = () => setAmountToBuy((prev) => prev - 1);

  return (
    <Wrapper>
      <Row style={{ paddingBottom: 16 }}>
        <GoBackButton />
        <FavoriteButton>
          <Icon.Heart color={styles.colors.heading} size={25} />
        </FavoriteButton>
      </Row>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <ImageContainer>
          {product.imagem ? (
            <Image source={{ uri: product.imagem }} resizeMode="contain" />
          ) : (
            <Icon.CameraSlash color={styles.colors.border} size={108} />
          )}
        </ImageContainer>
        <Title numberOfLines={2} ellipsizeMode="tail">
          {product.nome}
        </Title>
        <Highlight style={{ fontSize: 18, marginTop: 20 }}>Descrição</Highlight>
        <Description>{product.descricao}</Description>
        <Highlight style={{ fontSize: 18, marginTop: 20 }}>Bula</Highlight>
        <Description>{product.bula}</Description>
      </ScrollView>

      <Row style={{ marginBottom: 16, paddingTop: 16 }}>
        <Box style={{ justifyContent: "space-between" }}>
          <Minus activeOpacity={0.6} onPress={handleDecreaseAmount}>
            {!!amountToBuy &&
              (amountToBuy === 1 ? (
                <Icon.TrashSimple size={25} color={styles.colors.red} />
              ) : (
                <Icon.Minus size={25} color={styles.colors.red} />
              ))}
          </Minus>
          <ProductAmount onChangeText={(text) => setAmountToBuy(Number(text))} style={{ marginHorizontal: 24 }}>
            {amountToBuy}
          </ProductAmount>
          <Plus activeOpacity={0.6} onPress={handleIncreaseAmount}>
            <Icon.Plus size={25} color={styles.colors.blue} />
          </Plus>
        </Box>
        <Box style={{ justifyContent: "center" }}>
          <ProductPrice>{formatCurrency(product.valor_unitario)}</ProductPrice>
        </Box>
      </Row>
    </Wrapper>
  );
}
