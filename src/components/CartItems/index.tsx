import { View, Text, TouchableOpacity, FlatList } from "react-native";
import {TrashSimple} from 'phosphor-react-native';
import { Highlight, styles } from "../../globals/styles.global";
import { formatCurrency } from "../../utils/format.util";
import { useCart } from "../../contexts/CartContext";
import { List } from "../List";
import { CardCartItem } from "../CardCartItem";
import { CartProductItem } from "../../utils/interfaces.backend";

interface RenderItemProps {
    item: CartProductItem;
}

export function CartItems() {
    const { productsCart } = useCart();

    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Highlight>
                    Seu carrinho
                </Highlight>
                <TouchableOpacity
                    onPress={() => console.log('Limpar tudo')}
                    style={{ flexDirection: 'row', alignItems: 'center', padding: 4 }}
                >
                    <TrashSimple color={styles.colors.red} size={15} />
                    <Text style={{ color: styles.colors.red, fontFamily: styles.fonts.regular, fontSize: 16 }}>
                        Limpar
                    </Text>
                </TouchableOpacity>
            </View>
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
                <View 
                    style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Text>Subtotal dos produtos</Text>
                    <Text>{ formatCurrency(110.98)}</Text>
                </View>
                <View 
                    style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Text>Taxa de entrega</Text>
                    <Text>{ formatCurrency(5)}</Text>
                </View>
                <View 
                    style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Highlight>Total do pedido</Highlight>
                    <Highlight>{ formatCurrency(115.98)}</Highlight>
                </View>
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
