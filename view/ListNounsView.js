// ListNounsView.js
import { View, Text } from 'react-native';
import { useNounsContext } from '../controller/NounsController';
import {NounsList} from './List';

const ListNounsView = () => {
  const { nounsState } = useNounsContext();
  // console.log("ListsNounsView: nounsState: ", nounsState);
  return (
    <View>
      <Text>List Nouns</Text>
      <Text>{nounsState.message}</Text>
      <NounsList action='READNOUN' />
    </View>
  );
};

export default ListNounsView;
