import { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { GoBackButton } from "../../components/GoBackButton";
import { Wrapper } from "../../components/Wrapper";
import { Box, ColumnJustifyBetween, Highlight, RowJustifyBetween, InputContainer, styles } from "../../globals/styles.global";
import { SimpleButton } from '../../components/SimpleButton';
import { Input } from '../../components/Input';
import { ButtonIsPasswordEditable } from './styles';
import { CaretDown, CaretUp } from 'phosphor-react-native';

export function EditLoginInformations() {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');

    const [senhaAtual, setSenhaAtual] = useState('');
    const [senhaNova, setSenhaNova] = useState('');
    const [confirmarSenhaNova, setConfirmarSenhaNova] = useState('');
    
    const [isPasswordEditable, setIsPasswordEditable] = useState(false)
    
    const handleIsPasswordEditable = () => {
        setSenhaAtual('')
        setSenhaNova('')
        setConfirmarSenhaNova('')
        setIsPasswordEditable(!isPasswordEditable)
    }

    return (
        <Wrapper>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
                <ColumnJustifyBetween>
                    <Box>
                        <RowJustifyBetween>
                            <GoBackButton />
                            <Highlight style={{ fontSize: 16, textTransform: 'uppercase' }}>
                                editar dados de acesso
                            </Highlight>
                            <GoBackButton disabled style={{ opacity: 0 }} />
                        </RowJustifyBetween>

                        <InputContainer>
                            <Input 
                                placeholder='E-mail'
                                keyboardType='email-address'
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input 
                                placeholder='Login'
                                value={login}
                                onChangeText={(text) => setLogin(text)}
                                maxLength={8}
                            />
                        </InputContainer>
                        
                        <ButtonIsPasswordEditable 
                            activeOpacity={0.5}
                            style={{
                                backgroundColor: isPasswordEditable ? styles.colors.blue : styles.colors.contrast, 
                                borderColor: isPasswordEditable ? styles.colors.contrast : styles.colors.border, 
                            }}
                            onPress={handleIsPasswordEditable}
                        >
                            <Highlight 
                                style={{
                                    color: isPasswordEditable ? styles.colors.contrast : styles.colors.heading 
                                }}
                            >
                                Atualizar senha
                            </Highlight>
                            {
                                isPasswordEditable ? (
                                    <CaretDown 
                                        color={styles.colors.contrast} 
                                        size={18} 
                                        style={{ marginLeft: 4 }} 
                                    />
                                ): (
                                    <CaretUp 
                                        color={styles.colors.body} 
                                        size={18} 
                                        style={{ marginLeft: 4 }} 
                                    />
                                )
                            }
                        </ButtonIsPasswordEditable> 

                        {
                            isPasswordEditable && (
                                <>
                                    <InputContainer>
                                        <Input 
                                            placeholder='Senha atual'
                                            type='password'
                                            value={senhaAtual}
                                            onChangeText={(text) => setSenhaAtual(text)}
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <Input 
                                            placeholder='Nova senha'
                                            type='password'
                                            value={senhaNova}
                                            onChangeText={(text) => setSenhaNova(text)}
                                        />
                                    </InputContainer>
                                    <InputContainer>
                                        <Input 
                                            placeholder='Confirmar nova senha'
                                            type='password'
                                            value={confirmarSenhaNova}
                                            onChangeText={(text) => setConfirmarSenhaNova(text)}
                                        />
                                    </InputContainer>
                                </>
                            )
                        }
                        
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