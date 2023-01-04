import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SimpleButton } from '../../components/SimpleButton';
import { GoBackButton } from "../../components/GoBackButton";
import { Wrapper } from "../../components/Wrapper";
import { Box, ColumnJustifyBetween, Highlight, InputContainer, RowJustifyBetween, styles } from "../../globals/styles.global";
import { Input } from '../../components/Input';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { consultarCEP } from '../../services/api.viacep';
import axios from 'axios';
import { updateAddress } from '../../services/api.address.service';
import { useAuthentication } from '../../contexts/AuthenticationContext';

interface CepDataProps {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

interface IAddress {
    id: string;
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

interface RouteParams {
    address: IAddress;
}

export function EditAddress() {
    const { user } = useAuthentication()
    const navigation = useNavigation()

    const route = useRoute()
    const { address } = route.params as RouteParams

    const [cep, setCep] = useState(address.cep)
    const [descricao, setDescricao] = useState(address.descricao)
    const [logradouro, setLogradouro] = useState(address.logradouro)
    const [bairro, setBairro] = useState(address.bairro)
    const [numero, setNumero] = useState(address.numero)
    const [cidade, setCidade] = useState(address.cidade)
    const [estado, setEstado] = useState(address.estado)
    const [observacao, setObservacao] = useState(address.observacao)

    

    // const handleConsultaCEP = async() => {
    //     try {
    //         const cepData = await consultarCEP(cep) as CepDataProps | false
    //         if (!cepData) {
    //             Alert.alert('C.E.P inválido', 'C.E.P não é de Foz do Iguaçu ou número de caracteres inválido, por favor, verifique!')
    //             return false
    //         }else{
    //             const { logradouro, bairro, localidade, uf } = cepData
    //             setLogradouro(logradouro)
    //             setBairro(bairro)
    //             setCidade(localidade)
    //             setEstado(uf)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    async function handleUpdateAddress() {
        if (user) { //so para tirar o erro, remover  esta linha futuramente
            const message = await updateAddress({ id: address.id, cep, descricao, logradouro, bairro, numero, cidade, estado, observacao, principal: false }, user?.id)
            
            Alert.alert('Endereço', message , [], {
                cancelable: true,
                onDismiss: () => navigation.goBack()
            })
        }
    }

    return (
        <Wrapper>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
                <ColumnJustifyBetween>
                    <Box>
                        <RowJustifyBetween>
                            <GoBackButton />
                            <Highlight style={{ fontSize: 16, textTransform: 'uppercase' }}>
                                editar endereço
                            </Highlight>
                            <GoBackButton disabled style={{ opacity: 0 }} />
                        </RowJustifyBetween>

                        <InputContainer>
                            <Input 
                                placeholder='Descrição'
                                value={descricao}
                                onChangeText={(text) => setDescricao(text)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input 
                                placeholder='C.E.P - Somente números'
                                keyboardType='numeric'
                                value={cep}
                                onChangeText={(text) => setCep(text)}
                                //onBlur={handleConsultaCEP}
                                maxLength={8}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input 
                                placeholder='Logradouro'
                                value={logradouro}
                                onChangeText={(text) => setLogradouro(text)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input 
                                placeholder='Bairro'
                                value={bairro}
                                onChangeText={(text) => setBairro(text)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <RowJustifyBetween>
                                <Box style={{ width: '20%' }}>
                                    <Input 
                                        placeholder='N°'
                                        keyboardType='numeric'
                                        value={numero}
                                        onChangeText={(text) => setNumero(text)}
                                        maxLength={4}
                                    />
                                </Box>
                                <Box style={{ width: '55%' }}>
                                    <Input 
                                        placeholder='Cidade'
                                        value={cidade}
                                        editable={false}
                                    />
                                </Box>
                                <Box style={{ width: '20%' }}>
                                    <Input 
                                        placeholder='U.F'
                                        value={estado}
                                        maxLength={2}
                                        editable={false}
                                    />
                                </Box>
                            </RowJustifyBetween>
                        </InputContainer>
                        <InputContainer>
                            <Input
                                placeholder='Observação...'
                                value={observacao}
                                onChangeText={(text) => setObservacao(text)}
                            />
                        </InputContainer>
                    </Box>

                    <SimpleButton 
                        title='Atualizar'
                        styles={{ backgroundColor: styles.colors.green }}
                        textStyles={{ fontSize: 18 }}
                        activeOpacity={0.8}
                        //onPress={handleUpdateAddress}
                    />
                </ColumnJustifyBetween>
            </TouchableWithoutFeedback>
        </Wrapper>
    )
}