import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowSquareOut, CheckCircle, MinusCircle } from "phosphor-react-native";
import { SimpleButton } from "../../components/SimpleButton";
import { GoBackButton } from "../../components/GoBackButton";
import { List } from "../../components/List";
import { Wrapper } from "../../components/Wrapper";
import { Box, Highlight, RowJustifyBetween, styles, Text } from "../../globals/styles.global";
import { AdressContainer, Button, Toggle } from "./styles";
import { api } from "../../services/api.service";
import { View } from "react-native";

interface UserAdressesProps {
    enderecos: IAddress[]
}

interface IAddress {
    id: number;
    cep: string;
    descricao: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    principal: boolean;
    observacao: string;
}

interface RenderItemProps {
    item: IAddress;
}

export function Adresses() {
    const navigation = useNavigation()

    const [userAdresses, setUserAdresses] = useState<IAddress[]>([])
    const [toggle, setToggle] = useState(false)

    function handleGoToNewAddress() {
        navigation.navigate("NewAddress" as never)
    }

    function handleGoToEditAddress(address: IAddress) {
        navigation.navigate("EditAddress" as never, { address } as never)
    }

    useEffect(() => {
        async function getUserAdresses() {
            const { data } = await api.get('cliente/2')
            const { enderecos } = data as UserAdressesProps
            setUserAdresses(enderecos)
        }
        getUserAdresses().catch((error) => console.log(error.message))
    }, [])

    return (
        <Wrapper>
            <RowJustifyBetween>
                <GoBackButton />
                <Highlight style={{ fontSize: 18, textTransform: "uppercase" }}>
                    meus endereços
                </Highlight>
                <GoBackButton disabled style={{ opacity: 0 }} />
            </RowJustifyBetween>
            <List
                data={userAdresses}
                numColumns={1}
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
                        <View style={{ flex: 1, padding: 18 }}>
                            <Highlight style={{ fontSize: 18, marginBottom: 4 }}>
                                {item.descricao}
                            </Highlight>
                            <Text>
                                {`${item.logradouro}, ${item.numero} - ${item.bairro}`}
                            </Text>
                            <Text>
                                {`${item.cidade} - ${item.estado}`}
                            </Text>
                        </View>
                        <Button onPress={() => handleGoToEditAddress(item)}>
                            <ArrowSquareOut size={24} color={styles.colors.heading} />
                        </Button>
                    </AdressContainer>
                )}
                style={{ marginBottom: 16 }}
            />
            <SimpleButton 
                title="Cadastrar novo endereço"
                style={{ backgroundColor: styles.colors.contrast, borderColor: styles.colors.border, borderWidth: 1, marginBottom: 24 }}
                textStyles={{ color: styles.colors.heading }}
                onPress={handleGoToNewAddress}
            />
        </Wrapper>
    )
}
