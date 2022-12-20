import { useNavigation } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";
import { Wrapper } from "../../components/Wrapper";
import { Divider, styles } from "../../globals/styles.global";
import { Title, Row, LogOutButton, Column, UserAvatar, Button } from "./styles";

export function Account() {
    const navigation = useNavigation()

    function handleGoToAdresses() {
        navigation.navigate("Adresses" as never)
    }
    
    function handleGoToMyPersonalData() {
        navigation.navigate("UserPersonalData" as never)
    }

    return (
        <Wrapper>
            <Row>
                <Title>Meu perfil</Title>
                <LogOutButton>
                    <Icon.SignOut 
                        color={styles.colors.heading}
                        size={25}
                    />
                </LogOutButton>
            </Row>
            <Column>
                <UserAvatar>
                    <Icon.User color={styles.colors.heading} size={100} />
                </UserAvatar>
                <Row style={{ width: '55%' }}>
                    <Button 
                        style={{ backgroundColor: styles.colors.blue, borderRadius: 30, padding: 15 }}
                        onPress={handleGoToMyPersonalData}
                    >
                        <Icon.UserGear size={35} color={styles.colors.contrast}/>
                    </Button>
                    <Button 
                        style={{ backgroundColor: styles.colors.green, borderRadius: 30, padding: 15 }}
                        onPress={handleGoToAdresses}
                    >
                        <Icon.MapPin size={35} color={styles.colors.contrast}/>
                    </Button>
                </Row>
            </Column>
        </Wrapper>
    );
}
