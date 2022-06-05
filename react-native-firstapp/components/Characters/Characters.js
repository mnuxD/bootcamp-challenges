import { View, Text, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./Style";
const { container, item } = styles;
import { Card } from "./Card";
import { getCharactersAsync } from "../api/characters";

const Characters = () => {
  const [data, setData] = useState({
    characters: [],
    currentPage: 0,
  });
  const getCharacters = async () => {
    let page = data.currentPage;
    page = page + 1;
    if (page <= 42) {
      const dataCharacters = await getCharactersAsync(page);
      // setCharacters(data.results);
      setData((state) => ({
        characters: [...state.characters, ...dataCharacters.results],
        currentPage: page,
      }));
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);

  const { characters } = data;
  return (
    <View style={container}>
      {characters !== [] && (
        <FlatList
          numColumns="2"
          ListFooterComponent={() => (
            <Text style={{ fontSize: 30 }}>Cargando...</Text>
          )}
          data={characters}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card name={item.name} image={item.image} />
          )}
          onEndReached={() => {
            getCharacters(3);
          }}
          onEndReachedThreshold={0.5}
        />
      )}
    </View>
  );
};

export default Characters;
