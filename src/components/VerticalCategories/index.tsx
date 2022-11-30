import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import * as Icon from "phosphor-react-native";
import { Card, Container, ScrollView, Title } from "./styles";
import { styles } from "../../globals/styles.global";
import { CategoryDataBackend } from "../HorizontalCategories";

// interface CategoryData {
//   id: string;
//   name: string;
//   icon: keyof typeof Icon;
// }

// const categories: CategoryData[] = [
//   {
//     id: "1",
//     name: "Antibióticos",
//     icon: "Pill",
//   },
//   {
//     id: "2",
//     name: "Vitaminas",
//     icon: "FirstAidKit",
//   },
//   {
//     id: "3",
//     name: "Injetáveis",
//     icon: "Syringe",
//   },
//   {
//     id: "4",
//     name: "Higiene",
//     icon: "HandSoap",
//   },
//   {
//     id: "5",
//     name: "Genéricos",
//     icon: "Bandaids",
//   },
//   {
//     id: "6",
//     name: "Testes",
//     icon: "TestTube",
//   },
//   {
//     id: "7",
//     name: "Outros",
//     icon: "ToiletPaper",
//   },
// ];

export function VerticalCategories() {
  const navigation = useNavigation();

  /*function handleGoToCategory(category: CategoryData) {
    navigation.navigate("CategoryProducts" as never, { category } as never);
  }*/

  const [categories, setCategories] = useState<CategoryDataBackend[]>([]) // --code
  function handleGoToCategory(category: CategoryDataBackend) { // --code
    navigation.navigate("CategoryProducts" as never, { category } as never);
  }
  useEffect(() => { // --code
    const getCategoriesFromBackend = async () => {
      const { data } = await axios.get<CategoryDataBackend[]>("http://localhost:8080/categoria")
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
