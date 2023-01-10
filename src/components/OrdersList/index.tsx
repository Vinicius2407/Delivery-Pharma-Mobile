import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "../List";
import { Divider, RowJustifyBetween, styles } from "../../globals/styles.global";
import { Item, Price, Title } from "./styles";
import { formatCurrency } from "../../utils/format.util";
import { api } from "../../services/api.service";
import { Row, Highlight } from "../../globals/styles.global";
import { OrderStatus } from "../OrderStatus";
import { ArrowSquareOut } from "phosphor-react-native";

interface OrderProps {
    id: string;
    dh_registro: Date;
    valor_total: number;
    status: string;
    endereco: {
        id: string
    };
    farmaceutico: {
        id: string;
    };
}

interface RenderItemProps {
    item: OrderProps;
}

export function OrdersList() {
    return (
        <List
            data={[]}
            style={{ paddingTop: 10 }}
            contentContainerStyle={{ paddingBottom: 32 }}
            renderItem={({ item }: RenderItemProps) => (
                <Item
                    style={{ borderRadius: 6 }}
                    onPress={() => console.log('clique')}
                    activeOpacity={0.6}
                >
                    <Row style={{ justifyContent: 'space-between', padding: 6 }}>
                        <Highlight>
                            { item.dh_registro.toISOString() }
                        </Highlight>
                        <OrderStatus key={item.id} status={item.status} />
                    </Row>
                    <Row style={{ justifyContent: 'space-between', padding: 6 }}>
                        <Highlight>
                            { `pedido#${item.id}` }
                        </Highlight>
                        <Row>
                            <Highlight>
                                Ir para os detalhes do pedido
                            </Highlight>
                            <ArrowSquareOut color={styles.colors.blue} size={15} />
                        </Row>
                    </Row>
                </Item>
            )}
        />
    );
}
