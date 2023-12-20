import {
  View,
  Image,
  // Een FlatList component rendert alleen items op het scherm, waardoor de app beter presteert bij lange lijsten.
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ListStyle'; // Import the styles module
import { useNounsContext } from '../../controller/NounsController';

const NounsList = () => {
  // Onttrek nounsState en dispatch uit de NounsContext met behulp van de useNounsContext hook
  const { nounsState, dispatch } = useNounsContext();

  // Functional component to represent each item in the FlatList
  const Item = (item) => {
    const { id, name, bornAt, photo } = item;
    return (
      <View>
      <View style={styles.listcontainer}>
        <Image style={styles.listlead} source={{ uri: photo }} />
          <View style={styles.listtextcontainer}>
            <Text style={styles.listhead}>{name}</Text>
            <Text style={styles.listtext}>
            {bornAt} {id}
            </Text>
          </View>
        </View>
        <IconButton style={styles.rightButton} text="READ" iconName="search" onPress={() => dispatch({ type: 'READNOUN', id: id })}></IconButton>
        </View>
    );
  };

  return (
    <FlatList
      // sorteeer op non-ASCII naam
      data={nounsState.nouns.sort((a, b) => a.name.localeCompare(b.name))}
      renderItem={({ item }) => (
        <Item
          id={item.id}
          name={item.name}
          bornAt={item.bornAt}
          photo={item.photo}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NounsList;
