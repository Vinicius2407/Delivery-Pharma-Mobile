import { useCallback, useMemo, useRef } from 'react'
import { ScrollView, TouchableOpacity,View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { X } from 'phosphor-react-native';
import { CartButton } from "../../components/CartButton";
// import { HorizontalCategories } from "../../components/HorizontalCategories";
import { SearchInput } from "../../components/SearchInput";
import { VerticalCategories } from "../../components/VerticalCategories";
import { Wrapper } from "../../components/Wrapper";
import { Highlight, styles } from "../../globals/styles.global";
import { Subtitle } from "./styles";
import { CartItems } from '../../components/CartItems';
import { useCart } from '../../contexts/CartContext';
import { ProductsList } from '../../components/ProductsList';

export function Products() {
    const { productsCart } = useCart()
    const bottomSheetRef = useRef<BottomSheet>(null)
    
    const snapPoints = useMemo(() => [1, '100%'], []);

    const handleBottomSheetExpand = useCallback(() => {
        bottomSheetRef.current?.expand()
    }, [])

    const handleBottomSheetClose = useCallback(() => {
        bottomSheetRef.current?.close()
    }, [])

    return (
        <Wrapper>
            <SearchInput />

            {/* <Subtitle>
            <Highlight>Favoritos</Highlight>
            </Subtitle> */}

            {/* <HorizontalCategories showOnlyFavorites /> */}

            {/* <Subtitle>
                <Highlight>Categorias</Highlight>
            </Subtitle> */}

            {/* <ScrollView>
                <VerticalCategories />
            </ScrollView> */}
            <View style={{ flex: 1, marginBottom: 16 }}>
                {/* <ProductsList /> */}
            </View>

            { productsCart && productsCart.length > 0 && (
                <CartButton
                    quantidade={productsCart.length}
                    onPress={handleBottomSheetExpand}
                />
            )}

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                handleIndicatorStyle={{
                    backgroundColor: 'transparent',
                    width: '15%'
                }}
                
                enablePanDownToClose
                handleStyle={{
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                }}
                backgroundStyle={{
                    backgroundColor: styles.colors.contrast,
                    borderRadius: 0
                    
                }}
                backdropComponent={(backdropProps) => (
                    <BottomSheetBackdrop {...backdropProps} enableTouchThrough={true} />
                )}
                style={{
                    paddingHorizontal: 16,
                }}
            >
                <TouchableOpacity onPress={handleBottomSheetClose}>
                    <X size={25} color={styles.colors.heading}/>
                </TouchableOpacity>
                <CartItems />
            </BottomSheet>
        </Wrapper>
    );
}
