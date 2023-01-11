import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "../List";
import { Divider, Column, Text, styles } from "../../globals/styles.global";
import { BoxQuantity, Item, Price, Title } from "./styles";
import { formatCurrency } from "../../utils/format.util";
import { api } from "../../services/api.service";
import { Row, Highlight } from "../../globals/styles.global";
import { OrderStatus } from "../OrderStatus";
import { ArrowSquareOut } from "phosphor-react-native";

interface ItensProps {
    id: string;
    descricao: string;
    quantidade: number;
}

interface OrderProps {
    id: string;
    dh_registro: Date;
    valor_total: number;
    status: string;
    endereco: {
        id: string;
    };
    farmaceutico: {
        id: string;
    };
    itens: ItensProps[]
}

interface RenderItemProps {
    item: OrderProps;
}

const orders = [{
    id: '1521',
    dh_registro: new Date(),
    valor_total: 150,
    status: 'SOLICITADA',
    endereco: {
        id: '1'
    },
    farmaceutico: {
        id: '1'
    },
    itens: [
        { id: '1', descricao: 'Neosoro', quantidade: 2 },
        { id: '2', descricao: 'Aspirina', quantidade: 5 },
        { id: '3', descricao: 'Dorflex', quantidade: 3 },
    ]
}] as OrderProps[]

export function OrdersList() {
    return (
        <List
            data={orders}
            initialNumToRender={3}
            style={{ paddingTop: 10 }}
            contentContainerStyle={{ paddingBottom: 32 }}
            renderItem={({ item }: RenderItemProps) => (
                <Item
                    style={{ borderRadius: 6, elevation: 3 }}
                    onPress={() => console.log('clique')}
                    activeOpacity={0.6}
                >
                    <Row style={{ justifyContent: 'space-between', paddingVertical: 4 }}>
                        <Highlight>
                            { item.dh_registro.toUTCString() }
                        </Highlight>
                        <OrderStatus key={item.id} status={item.status} />
                    </Row>
                    <Row style={{ justifyContent: 'space-between' }}>
                        <Column>
                            {item.itens.map(({ id, quantidade, descricao }) => (
                                <Row key={id} style={{ marginVertical: 1 }}>
                                    <BoxQuantity style={{ marginRight: 6 }}>
                                        <Text>
                                            { quantidade.toString() }
                                        </Text>
                                    </BoxQuantity>
                                    <Highlight>
                                        { descricao }
                                    </Highlight>
                                </Row>
                            ))}
                        </Column>
                        <Price>
                            { formatCurrency(item.valor_total)}
                        </Price>
                    </Row>
                    <Divider />
                    <Row style={{ justifyContent: 'space-between', paddingTop: 4 }}>
                        <Highlight>
                            { `pedido#${item.id}` }
                        </Highlight>
                        <Row>
                            <Text style={{ color: styles.colors.blue, fontSize: 14, marginRight: 6 }}>
                                Ir para os detalhes do pedido
                            </Text>
                            <ArrowSquareOut color={styles.colors.blue} size={15} />
                        </Row>
                    </Row>
                </Item>
            )}
        />
    );
}
