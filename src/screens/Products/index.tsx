import { useMemo, useRef } from 'react'
import { ScrollView, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { X } from 'phosphor-react-native';
import { CartButton } from "../../components/CartButton";
// import { HorizontalCategories } from "../../components/HorizontalCategories";
import { SearchInput } from "../../components/SearchInput";
import { VerticalCategories } from "../../components/VerticalCategories";
import { Wrapper } from "../../components/Wrapper";
import { Highlight, styles } from "../../globals/styles.global";
import { Subtitle } from "./styles";
import { IconContainer } from '../../components/Input/styles';
import { CartItems } from '../../components/CartItems';
import { useCart } from '../../contexts/CartContext';

export function Products() {
    const { productsCart } = useCart()
    const bottomSheetRef = useRef<BottomSheet>(null)
    
    const snapPoints = useMemo(() => [1, '75%'], []);

    const bottomSheetExpand = () => bottomSheetRef.current?.expand();
    const bottomSheetClose = () => bottomSheetRef.current?.close()

    return (
        <Wrapper>
            <SearchInput />

            {/* <Subtitle>
            <Highlight>Favoritos</Highlight>
            </Subtitle> */}

            {/* <HorizontalCategories showOnlyFavorites /> */}

            <Subtitle>
                <Highlight>Categorias</Highlight>
            </Subtitle>

            <ScrollView>
                <VerticalCategories />
            </ScrollView>

            { productsCart && productsCart.length > 0 && (
                <CartButton
                    quantidade={productsCart.length}
                    onPress={bottomSheetExpand}
                />
            )}

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                handleIndicatorStyle={{
                    backgroundColor: styles.colors.border,
                    width: '15%'
                }}
                enablePanDownToClose
                handleStyle={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }}
                backgroundStyle={{
                    backgroundColor: styles.colors.background,
                }}
                backdropComponent={(backdropProps) => (
                    <BottomSheetBackdrop {...backdropProps} enableTouchThrough={true} />
                )}
                style={{
                    paddingHorizontal: 16
                }}
            >
                <TouchableOpacity onPress={bottomSheetClose}>
                    <X size={25} color={styles.colors.heading}/>
                </TouchableOpacity>
                <CartItems />
            </BottomSheet>
        </Wrapper>
    );
}
