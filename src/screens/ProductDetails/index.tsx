import { useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
// import * as Icon from "phosphor-react-native";
import { Heart, TrashSimple, Plus as PlusP, Minus as MinusP, CameraSlash } from "phosphor-react-native"

import { Wrapper } from "../../components/Wrapper";
import { GoBackButton } from "../../components/GoBackButton";
import { Row, Description, Image, ImageContainer, Title, Box, ProductPrice, Minus, Plus, FavoriteButton, ProductAmount } from "./styles";
import { Highlight, styles } from "../../globals/styles.global";
import { formatCurrency } from "../../utils/format.util";
import { CartProductItem, ProductDataBackend } from "../../utils/interfaces.backend";
import { useCart } from "../../contexts/CartContext";


interface RouteParamsData {
  product: ProductDataBackend
}

export function ProductDetails() {
  const route = useRoute();
  const { product } = route.params as RouteParamsData
  const { productsCart, addProductToCart, removeProductFromCart } = useCart()

  const changeTimer: React.MutableRefObject<any> = useRef(null);
  // const { product } = route.params as RouteParamsData;

  const productCart = productsCart.find((item) => item.id == product.id)
  console.log(productCart)

  // const beforeAddProductToCart = () => {
  //   const newItem = {
  //     id: product.id,
  //     nome: product.nome,
  //     valor_unitario: product.valor_unitario,
  //     imagem: product.imagem,
  //     quantidade: 0
  //   } as CartProductItem

  //   addProductToCart(newItem)
  // }

  return (
    <Wrapper>
      <Row style={{ paddingBottom: 16 }}>
        <GoBackButton />
        <FavoriteButton>
          <Heart color={styles.colors.heading} size={25} />
        </FavoriteButton>
      </Row>
      <ImageContainer>
        {product.imagem ? (
          <Image source={{ uri: product.imagem }} resizeMode="contain" />
        ) : (
          <CameraSlash color={styles.colors.border} size={108} />
        )}
      </ImageContainer>
      <Row>
        <Title numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 22 }}>
          {`${product.nome} - ${product.conteudo}`}
        </Title>
        <Title numberOfLines={2} ellipsizeMode="tail">
          {product.categoria.descricao}
        </Title>
      </Row>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginTop: 20}}>
        <Highlight style={{ fontSize: 18, marginTop: 20 }}>Descrição</Highlight>
        <Description>{`${product.descricao}\n${product.uso}`}</Description>
        <Highlight style={{ fontSize: 18, marginTop: 20 }}>Bula</Highlight>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum nesciunt consectetur perspiciatis nemo vero rem blanditiis mollitia aperiam minima excepturi, possimus culpa voluptate commodi autem numquam explicabo totam iste.</Description>
        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum nesciunt consectetur perspiciatis nemo vero rem blanditiis mollitia aperiam minima excepturi, possimus culpa voluptate commodi autem numquam explicabo totam iste.</Description>
      </ScrollView>

      {
        productCart ? (
          <Row style={{ marginBottom: 16, paddingTop: 16 }}>
            <Box style={{ justifyContent: "space-between" }}>
              <Minus activeOpacity={0.6} onPress={() => removeProductFromCart(product.id)}>
                {!!productCart &&
                  (productCart.quantidade === 1 ? (
                    <TrashSimple size={25} color={styles.colors.red} />
                  ) : (
                    <MinusP size={25} color={styles.colors.red} />
                  ))}
              </Minus>
              <ProductAmount style={{ marginHorizontal: 24 }}>
                {productCart && productCart.quantidade}
              </ProductAmount>
              <Plus activeOpacity={0.6} onPress={() => addProductToCart(product.id)}>
                <PlusP size={25} color={styles.colors.blue} />
              </Plus>
            </Box>
            <Box style={{ justifyContent: "center" }}>
              <ProductPrice>{formatCurrency(product.valor_unitario)}</ProductPrice>
            </Box>
          </Row>
        ) : (
          <Row style={{ marginBottom: 16, paddingTop: 16 }}>
            <Box style={{ justifyContent: "space-between" }}>
              <Minus activeOpacity={0.6} onPress={() => removeProductFromCart(product.id)}>
                  <MinusP size={25} color={styles.colors.red} />
              </Minus>
              <ProductAmount style={{ marginHorizontal: 24 }}>
                0
              </ProductAmount>
              <Plus activeOpacity={0.6} onPress={() => addProductToCart(product.id)}>
                <PlusP size={25} color={styles.colors.blue} />
              </Plus>
            </Box>
            <Box style={{ justifyContent: "center" }}>
              <ProductPrice>{formatCurrency(product.valor_unitario)}</ProductPrice>
            </Box>
          </Row>
        )
      }
    </Wrapper>
  );
}
