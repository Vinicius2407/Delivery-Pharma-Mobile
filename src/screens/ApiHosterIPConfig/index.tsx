import { SimpleButton } from "../../components/SimpleButton";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Wrapper";
import { styles } from "../../globals/styles.global";
import { InputContainer } from "../../globals/styles.global";
import { useAuthentication } from "../../contexts/AuthenticationContext";
import { useState } from "react";
import { Alert } from "react-native";

export function ApiHosterIPConfig() {
    const { updateApiHosterIPConfig } = useAuthentication()

    const [hostIP, setHostIP] = useState('')

    function handleApiHosterIPConfig() {
        if(hostIP.length < 10) {
            Alert.alert('Configurar IP', 'IP inválido, verifique.')
            return false
        }

        updateApiHosterIPConfig(hostIP)
    }

    return (
        <Wrapper>
            <InputContainer>
                <Input 
                    label="IP"
                    placeholder="192.168.0.200"
                    icon="ComputerTower"
                    keyboardType="numbers-and-punctuation"
                    maxLength={15}
                    value={hostIP}
                    onChangeText={(text) => setHostIP(text)}
                />
            </InputContainer>

            <SimpleButton 
                title="Configurar IP" 
                style={{
                    backgroundColor: styles.colors.blue, 
                    marginTop: 16
                }}
                //onPress={() => console.log('clique')} 
                onPress={handleApiHosterIPConfig} 
            />
        </Wrapper>
    )
}