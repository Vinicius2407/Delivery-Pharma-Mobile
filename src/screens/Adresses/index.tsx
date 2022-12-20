import { useNavigation } from "@react-navigation/native";
import { ArrowSquareOut, CheckCircle, MinusCircle } from "phosphor-react-native";
import { useState } from "react";
import { SimpleButton } from "../../components/Button";
import { GoBackButton } from "../../components/GoBackButton";
import { List } from "../../components/List";
import { Wrapper } from "../../components/Wrapper";
import { Box, Highlight, RowJustifyBetween, styles, Text } from "../../globals/styles.global";
import { AdressContainer, Button, Toggle } from "./styles";

interface IAdresses {
    id: number;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    apelido: string;
}
const myAdresses = [{
    id: 1,
    rua: 'Av. Araucária',
    numero: 780,
    bairro: 'Vila A',
    cidade: 'Foz do Iguaçu',
    estado: 'PR',
    apelido: 'IFPR'
}] as IAdresses[]

interface RenderItemProps {
    item: IAdresses;
}

export function Adresses() {
    const navigation = useNavigation()

    const [toggle, setToggle] = useState(false)

    function handleGoToEditAddress() {
        navigation.navigate("EditAddress" as never)
    }

    return (
        <Wrapper>
            <RowJustifyBetween>
                <GoBackButton />
                <Highlight style={{ fontSize: 18 }}>MEUS ENDEREÇOS</Highlight>
                <GoBackButton disabled style={{ opacity: 0 }} />
            </RowJustifyBetween>
            <List 
                data={myAdresses}
                renderItem={({ item }: RenderItemProps) => (
                    <AdressContainer style={{ borderColor: toggle ? styles.colors.green : styles.colors.border }}>
                        <Toggle activeOpacity={0.5} onPress={() => setToggle(!toggle)}>
                            {
                                toggle ? (
                                    <CheckCircle size={24} weight="fill" color={styles.colors.green} />
                                ) : (
                                    <MinusCircle size={24} weight="fill" color={styles.colors.border} />
                                )
                            }
                        </Toggle>
                        <Box style={{ flex: 1, padding: 18 }}>
                            <Highlight style={{ fontSize: 18, marginBottom: 4 }}>
                                {item.apelido}
                            </Highlight>
                            <Text>
                                {`${item.rua}, ${item.numero} - ${item.bairro}`}
                            </Text>
                            <Text>
                                {`${item.cidade} - ${item.estado}`}
                            </Text>
                        </Box>
                        <Button>
                            <ArrowSquareOut size={24} color={styles.colors.heading} />
                        </Button>
                    </AdressContainer>
                )}
            />
            <SimpleButton 
                title="Cadastrar novo endereço"
                style={{ backgroundColor: styles.colors.contrast, borderColor: styles.colors.border, borderWidth: 1, marginBottom: 24 }}
                textStyles={{ color: styles.colors.heading }}
                onPress={handleGoToEditAddress}
            />
        </Wrapper>
    )
}
