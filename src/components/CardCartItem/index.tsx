import { Image } from "react-native";
import { CameraSlash, Minus, Plus, Trash } from "phosphor-react-native";
import { Text, Column, Highlight, Row, RowJustifyBetween, styles } from "../../globals/styles.global";
import { formatCurrency } from "../../utils/format.util";
import { useCart } from "../../contexts/CartContext";
import { CartProductItem } from "../../utils/interfaces.backend";
import { BoxMinus, BoxPlus, ContainerQuantity, ImageContainer } from "./styles";

export function CardCartItem({ id, nome, valor_unitario, imagem, quantidade }: CartProductItem) {
    const { addProductToCart, removeProductFromCart } = useCart()

    return (
        <RowJustifyBetween style={{ marginVertical: 4 }}>
            <Row>
                <ImageContainer>
                    { imagem ? (
                        <Image source={{ uri: imagem }} style={{ width: 40, height: 35 }} resizeMode="contain" />
                    ) : (
                        <CameraSlash color={styles.colors.border} size={35} />
                    )}
                </ImageContainer>
                <Column>
                    <Highlight style={{ fontSize: 16 }}>
                        { nome }
                    </Highlight>
                    <Text style={{ fontSize: 14, marginTop: 4 }}>
                        { formatCurrency(valor_unitario) }
                    </Text>
                </Column>
            </Row>
            <ContainerQuantity style={{ elevation: 2 }}>
                <BoxMinus
                    onPress={() => removeProductFromCart(id) } 
                    activeOpacity={0.6}
                >
                    {!!quantidade && ( quantidade === 1 ? (
                        <Trash size={16} color={styles.colors.red} />
                    ) : (
                        <Minus size={16} color={styles.colors.red} />
                    ))}
                </BoxMinus>
                <Highlight style={{ padding: 6 }}>
                    {quantidade}
                </Highlight>
                <BoxPlus 
                    activeOpacity={0.6}
                >
                    <Plus size={16} color={styles.colors.blue} />
                </BoxPlus>
            </ContainerQuantity>
        </RowJustifyBetween>
    )
}