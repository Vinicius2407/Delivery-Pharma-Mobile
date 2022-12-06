import { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";
import axios from 'axios';
import { Card, Container, ScrollView, Title } from "./styles";
import { styles } from "../../globals/styles.global";
import { CategoryDataBackend } from "../HorizontalCategories";

export function VerticalCategories() {
  const navigation = useNavigation();

  const [categories, setCategories] = useState<CategoryDataBackend[]>([]) // --code
  function handleGoToCategory(category: CategoryDataBackend) { // --code
    navigation.navigate("CategoryProducts" as never, { category } as never);
  }
  useEffect(() => { // --code
    const getCategoriesFromBackend = async () => {
      const { data } = await axios.get<CategoryDataBackend[]>("http://192.168.42.133:8080/categoria")
      setCategories(data)
    }
    getCategoriesFromBackend().catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 0 }}
      >
        {categories.map((category, index) => {
          // const CustomIcon = Icon[category.icon] as any;
          const CustomIcon = category.icon ? Icon[category.icon] as any : Icon["FirstAidKit"]; // --code
          return (
            <Card
              key={category.id}
              style={{ marginTop: index ? 8 : 0 }}
              activeOpacity={0.6}
              onPress={() => handleGoToCategory(category)}
            >
              <CustomIcon color={styles.colors.body} size={30} />
              <Title>{category.descricao}</Title>
            </Card>
          );
        })}
      </ScrollView>
    </Container>
  );
}
