import { Image, View, StyleSheet, Text } from "react-native";
import { CameraSlash, Minus, Plus, TrashSimple } from "phosphor-react-native";
import { Highlight, styles } from "../../globals/styles.global";
import { formatCurrency } from "../../utils/format.util";
import { useCart } from "../../contexts/CartContext";
import styled from "styled-components/native";
import { CartProductItem } from "../../utils/interfaces.backend";

export function CardCartItem({ id, nome, valor_unitario, imagem, quantidade }: CartProductItem) {
    const { addProductToCart, removeProductFromCart } = useCart()

    return (
        <View style={customStyles.row}>
            <View style={{ flexDirection: 'row' }}>
                <View
                    style={[
                        customStyles.imageContainer, {
                        borderWidth: id ? 0 : 1,
                        backgroundColor: imagem ? styles.colors.contrast : styles.colors.background,
                    }]}
                >
                    { imagem ? (
                        <Image source={{ uri: imagem }} style={{ width: 40, height: 40 }} resizeMode="contain" />
                    ) : (
                        <CameraSlash color={styles.colors.border} size={40} />
                    )}
                </View>
                <View>
                    <Highlight>
                        { nome }
                    </Highlight>
                    <Text>
                        { formatCurrency(valor_unitario) }
                    </Text>
                </View>
            </View>
            <Box style={{ justifyContent: "space-between" }}>
                <BoxMinus activeOpacity={0.6} onPress={() => removeProductFromCart(id)}>
                    {!!quantidade && ( quantidade === 1 ? (
                        <TrashSimple size={25} color={styles.colors.red} />
                    ) : (
                        <Minus size={25} color={styles.colors.red} />
                    ))}
                </BoxMinus>
                <ProductQuantity>
                    {quantidade}
                </ProductQuantity>
                <BoxPlus activeOpacity={0.6} onPress={() => addProductToCart(id)}>
                    <Plus size={25} color={styles.colors.blue} />
                </BoxPlus>
            </Box>
        </View>
    )
}

const customStyles = StyleSheet.create({
    row: {
        width: '100%', 
        paddingVertical: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    imageContainer: {
        // marginTop: 14,
        borderColor: `${styles.colors.border}`,
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden"
    }
})

const Box = styled.View`
  height: 50px;
  width: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 10px;
`;

const ProductQuantity = styled.Text`
  font-family: ${styles.fonts.medium};
  font-size: ${styles.sizes.highlight};
  color: ${styles.colors.heading};
  text-align: center;
  max-width: 30px;
  margin-left: 24px;
  margin-right: 24px;
`;

const BoxMinus = styled.TouchableOpacity`
  color: ${styles.colors.red};
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  padding: 10px;
`;

const BoxPlus = styled.TouchableOpacity`
  color: ${styles.colors.blue};
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
  padding: 10px;
`;