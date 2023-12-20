// DeleteUserView.js
import { View ,Text } from 'react-native';
// import { useUsersContext } from '../controller/UsersController';

const DeleteUserView = () => {
  const ModalScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};
  const { state } = useUsersContext();
  // console.log(state);
  return (
    <View>
      <Text>Delete User</Text>
      <Text>{state.message}</Text>
    </View>
  );
};

export default DeleteUserView;