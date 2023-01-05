import { useCallback, useRef, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useCart } from "../../contexts/CartContext";
import { TrashSimple, Plus as IconPlus, Minus as IconMinus, CameraSlash, ShoppingCartSimple } from "phosphor-react-native"

import { Wrapper } from "../../components/Wrapper";
import { GoBackButton } from "../../components/GoBackButton";
import { Row, Description, Image, ImageContainer, Title, Box, Minus, Plus, ProductAmount, ProductPrice, Price, ButtonAddProductToCart, ProductInCart } from "./styles";
import { Highlight, styles } from "../../globals/styles.global";
import { formatCurrency } from "../../utils/format.util";
import { CartProductItem, ProductDataBackend } from "../../utils/interfaces.backend";
import { SimpleButton } from "../../components/SimpleButton";

interface RouteParamsData {
    product: ProductDataBackend
}

export function ProductDetails() {
    const { getProductCountFromCart, addProductToCart } = useCart()
    //const changeTimer: React.MutableRefObject<any> = useRef(null);
    const route = useRoute();
    const { product } = route.params as RouteParamsData

    const [productCount, setProductCount] = useState(0)
    
    const productCountInCart = getProductCountFromCart(product.id)

    const handleIncreaseProductCount = () => setProductCount((state) => state + 1)
    const handleDecreaseProductCount = () => {
        if (productCount == 0) return false
        setProductCount((state) => state - 1)
    }

    function confirmAddProductToCart() {
        Alert.alert(`Adicionar ${product.nome} ao carrinho?`, `Quantidade: ${productCount}`, [
            {
                text: 'confirmar',
                onPress: handleAddProductToCart
            },
            {
                text: 'cancelar',
                onPress: () => { return false }
            },
        ])
    }

    const handleAddProductToCart = () => {
        const item = {
            id: product.id,
            nome: product.nome,
            valor_unitario: product.valor_unitario,
            imagem: product.imagem,
            quantidade: productCount
        } as CartProductItem

        addProductToCart(item)
    }

    function showQuantityOfProductInCart() {
        Alert.alert('Carrinho', `Você já possui ${productCountInCart} unidade(s) deste produto em seu carrinho`)
    }

    return (
    <Wrapper>
        <Row style={{ paddingBottom: 16 }}>
            <GoBackButton />
            {
                productCountInCart > 0 && (
                    <ProductInCart onPress={showQuantityOfProductInCart}>
                        <ShoppingCartSimple color={styles.colors.contrast}  size={25} />
                    </ProductInCart>
                )
            }
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
            style={{ flex: 1, marginVertical: 20 }}
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

        <Row style={{ justifyContent: 'flex-end'}}>
            <ProductPrice>
                <Price>{ formatCurrency(product.valor_unitario) }</Price>
            </ProductPrice>
        </Row>

        <Row style={{ marginBottom: 16, paddingTop: 16 }}>
            <Box style={{ justifyContent: "space-between" }}>
                <Minus activeOpacity={0.6} onPress={handleDecreaseProductCount}>
                    <IconMinus size={25} color={styles.colors.red} />
                </Minus>
                <ProductAmount style={{ marginHorizontal: 24 }}>
                    {productCount}
                </ProductAmount>
                <Plus activeOpacity={0.6} onPress={handleIncreaseProductCount}>
                    <IconPlus size={25} color={styles.colors.blue} />
                </Plus>
            </Box>
            { 
                productCount > 0 && (
                    <ButtonAddProductToCart onPress={confirmAddProductToCart}>
                        <Highlight style={{ color: styles.colors.contrast }}>
                            { `Adicionar ${formatCurrency( productCount * product.valor_unitario )}` }
                        </Highlight>
                    </ButtonAddProductToCart>
                )
            }
        </Row>
    </Wrapper>
    );
}
