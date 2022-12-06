import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";
import axios from "axios";
import { List } from "../List";
import { Divider, styles } from "../../globals/styles.global";
import { Image, ImageContainer, Item, Price, Row, Title } from "./styles";
import { formatCurrency } from "../../utils/format.util";
import { ProductDataBackend } from '../../utils/interfaces.backend'

interface ProductsListProps {
  categoryId?: number;
}

interface RenderItemBackendProps {
  item: ProductDataBackend;
  index: number;
}

export function ProductsList({ categoryId }: ProductsListProps) {
  const [products, setProducts] = useState<ProductDataBackend[]>([]);

  const navigation = useNavigation();

  function handleProductDetails(product: ProductDataBackend) {
    navigation.navigate("ProductDetails" as never, { product } as never);
  }

  // useEffect(() => {
  //   const getProductsFromDB = async () => {
  //     const url = categoryId ? `http://192.168.42.133:8080/produto/categoria/${categoryId}` : "http://192.168.42.133:8080/produto"; 
  //     const { data } = await axios.get<ProductDataBackend[]>(url)
  //     setProducts(data)
  //   }
  //   getProductsFromDB().catch((error) => console.log(error));
  // }, []);

  return (
    <List
      data={products}
      numColumns={2}
      style={{ paddingTop: 10, marginBottom: -16 }}
      contentContainerStyle={{ paddingBottom: 32 }}
      renderItem={({ item, index }: RenderItemBackendProps) => (
        <Item
          style={{
            marginLeft: index % 2 ? 8 : 0,
            marginTop: index > 1 ? 8 : 0,
          }}
          onPress={() => handleProductDetails(item)}
          activeOpacity={0.6}
        >
          <Row>
            <ImageContainer
              style={{
                borderWidth: item ? 0 : 1,
                backgroundColor: item.imagem ? styles.colors.contrast : styles.colors.background,
              }}
            >
              {item.imagem ? (
                <Image source={{ uri: item.imagem }} resizeMode="contain" />
              ) : (
                <Icon.CameraSlash color={styles.colors.border} size={30} />
              )}
            </ImageContainer>
            <Icon.ArrowSquareOut style={{ alignSelf: "flex-start" }} color={styles.colors.blue} size={15} weight="fill" />
          </Row>
          <Title numberOfLines={2}>{item.nome}</Title>
          <Divider />
          <Price>{formatCurrency(item.valor_unitario)}</Price>
        </Item>
      )}
    />
  );
}
