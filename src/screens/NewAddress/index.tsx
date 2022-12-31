import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SimpleButton } from '../../components/Button';
import { GoBackButton } from "../../components/GoBackButton";
import { Wrapper } from "../../components/Wrapper";
import { Box, ColumnJustifyBetween, Highlight, InputContainer, RowJustifyBetween, styles } from "../../globals/styles.global";
import { Input } from '../../components/Input';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { consultarCEP } from '../../services/api.viacep';
import axios from 'axios';

interface CepDataProps {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
}

export function NewAddress() {
    const navigation = useNavigation()

    const [cep, setCep] = useState('')
    const [descricao, setDescricao] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [numero, setNumero] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [observacao, setObservacao] = useState('')

    //const [isLoadingCep, setIsLoadingCep] = useState(false)

    const handleConsultaCEP = async() => {
        try {
            const cepData = await consultarCEP(cep) as CepDataProps | false
            if (!cepData) {
                Alert.alert('C.E.P inválido', 'C.E.P não é de Foz do Iguaçu ou número de caracteres inválido, por favor, verifique!')
                return false
            }else{
                const { logradouro, bairro, localidade, uf } = cepData
                setLogradouro(logradouro)
                setBairro(bairro)
                setCidade(localidade)
                setEstado(uf)
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleAddNewAddress() {
        axios.put('http://192.168.0.106:8080/cliente/endereco/2', {
            descricao,
            logradouro,
            bairro,
            numero,
            cidade,
            estado,
            cep,
            principal: false
        })
        .then((resp) => {
            console.log(resp.status)
            Alert.alert('Endereço', 'Endereço cadastrado com sucesso!', [], {
                cancelable: true,
                onDismiss: () => navigation.goBack()
            })
        })
        .catch((error) => console.log(error.message))
    }

    return (
        <Wrapper>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
                <ColumnJustifyBetween>
                    <Box>
                        <RowJustifyBetween>
                            <GoBackButton />
                            <Highlight style={{ fontSize: 16, textTransform: 'uppercase' }}>
                                cadastrar novo endereço
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
                                onBlur={handleConsultaCEP}
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
                        title='Salvar'
                        styles={{ backgroundColor: styles.colors.green }}
                        textStyles={{ fontSize: 18 }}
                        activeOpacity={0.8}
                        onPress={handleAddNewAddress}
                    />
                </ColumnJustifyBetween>
            </TouchableWithoutFeedback>
        </Wrapper>
    )
}