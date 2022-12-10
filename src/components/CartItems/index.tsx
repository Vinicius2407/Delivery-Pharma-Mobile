import { View, Text, TouchableOpacity, FlatList } from "react-native";
import {TrashSimple} from 'phosphor-react-native';
import { Highlight, RowJustifyBetween, styles } from "../../globals/styles.global";
import { formatCurrency } from "../../utils/format.util";
import { useCart } from "../../contexts/CartContext";
import { List } from "../List";
import { CardCartItem } from "../CardCartItem";
import { CartProductItem } from "../../utils/interfaces.backend";

interface RenderItemProps {
    item: CartProductItem;
}

export function CartItems() {
    const { productsCart, getTotalParcial, clearProductsFromCart } = useCart();

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <RowJustifyBetween>
                <Highlight>
                    Seu carrinho
                </Highlight>
                <TouchableOpacity
                    onPress={() => clearProductsFromCart()}
                    style={{ flexDirection: 'row', alignItems: 'center', padding: 4 }}
                >
                    <TrashSimple color={styles.colors.red} size={15} />
                    <Text style={{ color: styles.colors.red, fontFamily: styles.fonts.regular, fontSize: 16 }}>
                        Limpar
                    </Text>
                </TouchableOpacity>
            </RowJustifyBetween>
            <List
                data={productsCart}
                // style={{ paddingTop: 10, marginBottom: -16 }}
                // contentContainerStyle={{ paddingBottom: 32 }}
                renderItem={({ item }: RenderItemProps) => (
                    <CardCartItem 
                        key={item.id}
                        id={item.id}
                        nome={item.nome}
                        imagem={item.imagem}
                        valor_unitario={item.valor_unitario}
                        quantidade={item.quantidade}
                    />
                )}
            />
            <View style={{ width: '100%', flexDirection: 'column' }}>
                <Highlight>Resumo</Highlight>
                <RowJustifyBetween>
                    <Text>Subtotal dos produtos</Text>
                    <Text>{formatCurrency(getTotalParcial())}</Text>
                    
                </RowJustifyBetween>
                <RowJustifyBetween>
                    {/* <Text>Taxa de entrega</Text>
                    <Text>{ formatCurrency(5)}</Text> */}
                </RowJustifyBetween>
                <RowJustifyBetween>
                    {/* <Highlight>Total do pedido</Highlight>
                    <Highlight>{ formatCurrency(115.98)}</Highlight> */}
                </RowJustifyBetween>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ marginTop: 40, paddingVertical: 10, borderRadius: 10, backgroundColor: styles.colors.green, flexDirection: 'row', justifyContent: 'center' }}
                >
                    <Text style={{ color: styles.colors.contrast, fontWeight: "bold", textTransform: 'uppercase' }}>finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
