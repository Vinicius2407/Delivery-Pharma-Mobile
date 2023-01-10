import { Highlight, Row, styles } from "../../globals/styles.global";
import * as Icon from 'phosphor-react-native'

interface OrderStatusProps {
    status: string;
}

interface StatusProps {
    icon: keyof typeof Icon;
    color: string;
    title: string;
}

export function OrderStatus({ status }: OrderStatusProps) {
    
    function getStatusProps() {
        switch (status) {
            case 'SOLICITADA': 
                return { icon: 'Hourglass', color: styles.colors.body, title: 'Pedido solicitado' };  break;
            case 'SEPARACAO': return { icon: 'ArchiveBox', color: styles.colors.orange, title: 'Pedido em separação' };  break;
            case 'ENTREGA': return { icon: 'Car', color: styles.colors.blue, title: 'Pedido saiu para entrega' };  break;
            case 'CONCLUIDA': return { icon: 'CircleWavyCheck', color: styles.colors.green, title: 'Pedido concluído' };  break;
            case 'REPROVADA': return { icon: 'XCircle', color: styles.colors.red, title: 'Pedido reprovado' };  break;
        }
    }

    const statusProps = getStatusProps() as StatusProps

    const CustomIcon = Icon[statusProps.icon] as any;
    
    return (
        <Row>
            <Highlight style={{ color: statusProps.color }}>
                { statusProps.title }
            </Highlight>
            <CustomIcon color={statusProps.color} size={25} />
        </Row>
    )
}