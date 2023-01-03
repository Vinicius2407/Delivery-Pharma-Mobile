import { useNavigation } from "@react-navigation/native";
import { ArrowSquareOut } from "phosphor-react-native";
import { GoBackButton } from "../../components/GoBackButton";
import { Wrapper } from "../../components/Wrapper";
import { Column, Divider, Highlight, Row, RowJustifyBetween, styles, Text } from "../../globals/styles.global";
import { BoxContainer, BoxContainerTitle, BoxContainerButton, BoxContainerButtonText, InvisibleBox, BoxContainerLabel, BoxContainerUserInfo } from "./styles";

export function UserPersonalData() {
    const navigation = useNavigation()

    const handleEditUserData = () => navigation.navigate('EditUserData' as  never)
    const handleEditLoginInformations = () => navigation.navigate('EditLoginInformations' as  never)

    return (
        <Wrapper>
            <RowJustifyBetween>
                <GoBackButton />
                <Highlight style={{ fontSize: 18 }}>MEUS DADOS</Highlight>
                <GoBackButton disabled style={{ opacity: 0 }} />
            </RowJustifyBetween>
            <BoxContainer>
                <Row>
                    <BoxContainerTitle>
                        Informações pessoais
                    </BoxContainerTitle>
                </Row>
                <Divider />
                <Row style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
                    <Column>
                        <BoxContainerLabel>Nome</BoxContainerLabel>
                        <BoxContainerUserInfo>Pedro Augusto de Lima</BoxContainerUserInfo>
                    </Column>
                </Row>
                <Divider />
                <Row style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
                    <Column>
                        <BoxContainerLabel>C.P.F</BoxContainerLabel>
                        <BoxContainerUserInfo>000.000.000-00</BoxContainerUserInfo>
                    </Column>
                </Row>
                <Divider />
                <Row style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
                    <Column>
                        <BoxContainerLabel>Telefone</BoxContainerLabel>
                        <BoxContainerUserInfo>+55 45 99999-9999</BoxContainerUserInfo>
                    </Column>
                </Row>
                <Divider />
                <BoxContainerButton onPress={handleEditUserData}>
                    <BoxContainerButtonText>
                        Atualizar informações pessoais
                    </BoxContainerButtonText>
                    <ArrowSquareOut color={styles.colors.blue} size={18} />
                </BoxContainerButton>
            </BoxContainer>

            <BoxContainer>
                <Row>
                    <BoxContainerTitle>
                        Dados de acesso
                    </BoxContainerTitle>
                </Row>
                <Divider />
                <Row style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
                    <Column>
                        <BoxContainerLabel>E-mail</BoxContainerLabel>
                        <BoxContainerUserInfo>pedrolima@gmail.com</BoxContainerUserInfo>
                    </Column>
                </Row>
                <Divider />
                <Row style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
                    <Column>
                        <BoxContainerLabel>Login</BoxContainerLabel>
                        <BoxContainerUserInfo>pedro@lima</BoxContainerUserInfo>
                    </Column>
                </Row>
                <Divider />
                <Row style={{ paddingHorizontal: 10, paddingVertical: 4 }}>
                    <Column>
                        <BoxContainerLabel>Senha</BoxContainerLabel>
                        <BoxContainerUserInfo>******</BoxContainerUserInfo>
                    </Column>
                </Row>
                <Divider />
                <BoxContainerButton onPress={handleEditLoginInformations}>
                    <BoxContainerButtonText>
                        Atualizar dados de acesso
                    </BoxContainerButtonText>
                    <ArrowSquareOut color={styles.colors.blue} size={18} />
                </BoxContainerButton>
            </BoxContainer>
        </Wrapper>
    )
}