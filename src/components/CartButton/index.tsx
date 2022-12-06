import { TouchableOpacityProps } from "react-native";
import { formatCurrency } from "../../utils/format.util";
import { Container, Title } from "./styles";
// import { Input } from "../Input";
// import { Highlight } from "../../globals/styles.global";

interface CartButtonProps extends TouchableOpacityProps {
    quantidade: number;
}

export function CartButton({ quantidade, ...props }: CartButtonProps) {
    return (
        <Container {...props} activeOpacity={0.7}>
            <Title>Carrinho</Title>
            <Title>{quantidade} itens</Title>
            <Title>{formatCurrency(15)}</Title>
        </Container>
    );
}
