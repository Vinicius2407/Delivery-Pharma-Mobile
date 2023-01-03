import { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SimpleButton } from '../../components/Button';
import { GoBackButton } from "../../components/GoBackButton";
import { Wrapper } from "../../components/Wrapper";
import { Box, ColumnJustifyBetween, Highlight, RowJustifyBetween, InputContainer, styles } from "../../globals/styles.global";
import { Input } from '../../components/Input';
import { useAuthentication } from '../../contexts/AuthenticationContext';
//import { api } from '../../services/api.service';

export function EditUserData() {
    const { user } = useAuthentication()

    const [nome, setNome] = useState(user?.nome);
    const [cpf, setCpf] = useState(user?.cpf);
    const [telefone, setTelefone] = useState(user?.telefone);

    async function handleUpdateUserData() {
        /*api.put('cliente/edit/2', {
            nome,
            cpf,
            telefone
        })
        .then((resp) => console.log(resp.status))
        .catch((error) => console.log(error.message))*/
    }

    return (
        <Wrapper>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
                <ColumnJustifyBetween>
                    <Box>
                        <RowJustifyBetween>
                            <GoBackButton />
                            <Highlight style={{ fontSize: 16, textTransform: 'uppercase' }}>
                                editar informações pessoais
                            </Highlight>
                            <GoBackButton disabled style={{ opacity: 0 }} />
                        </RowJustifyBetween>

                        <InputContainer>
                            <Input 
                                placeholder='Nome completo'
                                value={nome}
                                onChangeText={(text) => setNome(text)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input 
                                placeholder='C.P.F - Somente números'
                                keyboardType='numeric'
                                value={cpf}
                                onChangeText={(text) => setCpf(text)}
                                maxLength={8}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input 
                                placeholder='Telefone celular'
                                value={telefone}
                                onChangeText={(text) => setTelefone(text)}
                            />
                        </InputContainer>
                    </Box>

                    <SimpleButton 
                        title='Atualizar'
                        styles={{ backgroundColor: styles.colors.green }}
                        textStyles={{ fontSize: 18 }}
                        activeOpacity={0.8}
                        //onPress={handleUpdateUserData}
                    />
                </ColumnJustifyBetween>
            </TouchableWithoutFeedback>
        </Wrapper>
    )
}