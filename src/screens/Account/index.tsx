import { useNavigation } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";
import { Wrapper } from "../../components/Wrapper";
import { Divider, styles } from "../../globals/styles.global";
import { Title, Row, LogOutButton, Column, UserAvatar, Button } from "./styles";

export function Account() {
    const navigation = useNavigation()

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
                    <Button style={{ backgroundColor: styles.colors.green, borderRadius: 25 }}>
                        <Icon.MapPin size={30} color={styles.colors.contrast}/>
                    </Button>
                    <Button style={{ backgroundColor: styles.colors.red, borderRadius: 25 }}>
                        <Icon.HeartStraight size={30} color={styles.colors.contrast}/>
                    </Button>
                </Row>
                <Row style={{ marginTop: -25, width: '50%', justifyContent: 'center', backgroundColor: 'transparent' }}>
                    <Button 
                        style={{ backgroundColor: styles.colors.blue, borderRadius: 30, padding: 15 }}
                        onPress={handleGoToMyPersonalData}
                    >
                        <Icon.UserGear size={35} color={styles.colors.contrast}/>
                    </Button>
                </Row>
                <Divider />
            </Column>
        </Wrapper>
    );
}
