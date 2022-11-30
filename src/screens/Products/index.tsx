import { HorizontalCategories } from "../../components/HorizontalCategories";
import { SearchInput } from "../../components/SearchInput";
import { VerticalCategories } from "../../components/VerticalCategories";
import { Wrapper } from "../../components/Wrapper";
import { Highlight } from "../../globals/styles.global";
import { Subtitle } from "./styles";

export function Products() {
  return (
    <Wrapper>
      <SearchInput />

      <Subtitle>
        <Highlight>Favoritos</Highlight>
      </Subtitle>

      <HorizontalCategories showOnlyFavorites />

      <Subtitle>
        <Highlight>Categorias</Highlight>
      </Subtitle>

      <VerticalCategories />
    </Wrapper>
  );
}
