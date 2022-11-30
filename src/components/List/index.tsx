import { useCallback } from "react";
import { View, Text } from 'react-native';
import { FlatList, FlatListProps, ListRenderItemInfo } from "react-native";
import { Highlight } from "../../globals/styles.global";

interface ListProps extends FlatListProps<any> {
  data: any;
}

const EmptyList = () => { // --code
  return (
    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      <Highlight>Nenhum resultado encontrado</Highlight>
    </View>
  )
}

export function List({ data, ...props }: ListProps) {
  const keyExtractor = useCallback((item: { id: any }) => String(item.id), []);
  return (
    <FlatList
      {...props}
      data={data}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyList />} // --code
    />
  );
}
