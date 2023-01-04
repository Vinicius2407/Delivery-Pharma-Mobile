import { useRef, useState } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useCart } from "../../contexts/CartContext";
import { TrashSimple, Plus as IconPlus, Minus as IconMinus, CameraSlash } from "phosphor-react-native"

import { Wrapper } from "../../components/Wrapper";
import { GoBackButton } from "../../components/GoBackButton";
import { Row, Description, Image, ImageContainer, Title, Box, ProductPrice, Minus, Plus, FavoriteButton, ProductAmount } from "./styles";
import { Highlight, styles } from "../../globals/styles.global";
import { formatCurrency } from "../../utils/format.util";
import { ProductDataBackend } from "../../utils/interfaces.backend";
import { SimpleButton } from "../../components/SimpleButton";

interface RouteParamsData {
    product: ProductDataBackend
}

export function ProductDetails() {
    //const { getProductCountFromCart } = useCart()
    //const changeTimer: React.MutableRefObject<any> = useRef(null);
    const route = useRoute();
    const { product } = route.params as RouteParamsData

    const [productCount, setProductCount] = useState(0)
    
    //const productCountInCart = getProductCountFromCart(product.id)
    
    const handleIncreaseProductCount = () => setProductCount((state) => state + 1)
    const handleDecreaseProductCount = () => {
        if (productCount == 0) return false
        setProductCount((state) => state + 1)
    }
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
        </Row>
        <ImageContainer>
            { product.imagem ? (
                    <Image source={{ uri: product.imagem }} resizeMode="contain" />
                ) : (
                    <CameraSlash color={styles.colors.border} size={108} />
                )
            }
        </ImageContainer>
        <Title numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 22 }}>
            {product.nome}
            {product.conteudo && ` - ${product.conteudo}`}
        </Title>
        <Title numberOfLines={2} ellipsizeMode="tail">
            {product.categoria.descricao}
        </Title>
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            style={{ flex: 1, marginTop: 20 }}
        >
            <Highlight style={{ fontSize: 18, marginTop: 20 }}>
                Descrição
            </Highlight>
            <Description>
                {`${product.descricao}\n${product.uso}`}
            </Description>
            <Highlight style={{ fontSize: 18, marginTop: 20 }}>
                Bula
                </Highlight>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum nesciunt consectetur perspiciatis nemo vero rem blanditiis mollitia aperiam minima excepturi, possimus culpa voluptate commodi autem numquam explicabo totam iste.</Description>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum nesciunt consectetur perspiciatis nemo vero rem blanditiis mollitia aperiam minima excepturi, possimus culpa voluptate commodi autem numquam explicabo totam iste.</Description>
        </ScrollView>

        <Row style={{ marginBottom: 16, paddingTop: 16 }}>
            <Box style={{ justifyContent: "space-between" }}>
                <Minus activeOpacity={0.6} onPress={handleIncreaseProductCount}>
                    <IconMinus size={25} color={styles.colors.red} />
                </Minus>
                <ProductAmount style={{ marginHorizontal: 24 }}>

                </ProductAmount>
                <Plus activeOpacity={0.6} onPress={handleDecreaseProductCount}>
                    <IconPlus size={25} color={styles.colors.blue} />
                </Plus>
            </Box>
            {/* <SimpleButton 
                title={productCount.toString()}
                styles={{ backgroundColor: styles.colors.blue }}
            /> */}
        </Row>
    </Wrapper>
    );
}
