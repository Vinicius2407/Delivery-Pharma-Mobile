import { useState, useEffect } from 'react';
import axios from 'axios';
import { FirstAidKit } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, CardCategory, Container, ScrollView, Title } from "./styles";
import { styles } from "../../globals/styles.global";
import { CategoryDataBackend } from '../../utils/interfaces.backend'

interface HorizontalCategoriesProps {
  showOnlyFavorites?: boolean;
} // Not used yet

export function HorizontalCategories({ showOnlyFavorites }: HorizontalCategoriesProps) {
  const navigation = useNavigation();
      
  const [categories, setCategories] = useState<CategoryDataBackend[]>([]) 
  
  function handleGoToCategory(category: CategoryDataBackend) { 
    navigation.navigate("CategoryProducts" as never, { category } as never);
  }

  // useEffect(() => {
  //   const getCategoriesFromBackend = async () => {
  //     const { data } = await axios.get<CategoryDataBackend[]>("http://192.168.42.133:8080/categoria")
  //     setCategories(data)
  //   }
  //   getCategoriesFromBackend().catch((error) => console.log(error));
  // }, []);

  return (
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {categories.map((category, index) => {
          // const CustomIcon = category.icon ? Icon[category.icon] as any : Icon["FirstAidKit"];
          return (
            <CardCategory
              key={category.id}
              style={{ marginLeft: index ? 5 : 0 }}
              activeOpacity={0.6}
              onPress={() => handleGoToCategory(category)}
            >
              <FirstAidKit color={styles.colors.body} size={30} />
              <Title>{category.descricao}</Title>
            </CardCategory>
          );
        })}
      </ScrollView>
    </Container>
  );
}
