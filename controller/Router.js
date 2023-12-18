// Router.js
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import LandingView from '../view/LandingView';
import NounsOverview from '../view/NounsOverview';
import CreateNounView from '../view/CreateNounView';
import ReadNounView from '../view/ReadNounView';
import UpdateNounView from '../view/UpdateNounView';
import ListNounsView from '../view/ListNounsView';

const Stack = createStackNavigator();

// Quickie opzet viewa
// const CreateNounView = () => <Text>Create View</Text>;
// const UpdateNounView = () => <Text>Update View</Text>;
const DeleteNounView = () => <Text>Delete View</Text>;
const ModalScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="LandingView">
      <Stack.Screen name="LandingView" component={LandingView} />
      <Stack.Screen name="NounsOverview" component={NounsOverview} />
      <Stack.Screen name="CreateNounView" component={CreateNounView} />
      <Stack.Screen
        name="ReadNounView"
        component={ReadNounView}
        options={{ headerTintColor: 'white', headerTransparent: 'true' }}
      />
      <Stack.Screen name="UpdateNounView" component={UpdateNounView} />
      <Stack.Screen name="DeleteNounView" component={DeleteNounView} />
      <Stack.Screen name="ListNounsView" component={ListNounsView} />
    </Stack.Navigator>
  );
};

export default Router;
