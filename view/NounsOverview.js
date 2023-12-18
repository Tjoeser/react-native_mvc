// NounsOverview.js
import { SafeAreaView, View, Text, Button, TouchableOpacity } from 'react-native';
import { useNounsContext } from '../controller/NounsController';

const NounsOverview = () => {
  const {  dispatch } = useNounsContext();

  const handleNavigate = (action, payload) => {
    // Dispatch een actie en indien nodig een payload
    dispatch({ type: action, id:payload });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 9 }}>
      {/*<Button
        title="Test"
        onPress={() => handleNavigate('CREATENOUN','new')}
      />*/}
      <Button
        title="Create"
        onPress={() => handleNavigate('CREATENOUN','new')}
      />
      {/* <Button
        title="Read"
        onPress={() => handleNavigate('READNOUN', 5)}
      />
      <Button
        title="Update"
        onPress={() => handleNavigate('UPDATENOUN', 5)}
      />
      <Button
        title="Delete"
        onPress={() => handleNavigate('DELETENOUN', 5)}
      /> */}
      <Button
        title="List"
        onPress={() => handleNavigate('LISTNOUNS', 'all')}
      />
      </View>
{/* 
      <View
        style={{
          flex: 1,
          backgroundColor: "yellow",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

         <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <View>
              <Text>...Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <View>
              <Text>...Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
*/}      
    </SafeAreaView>
  );
};

export default NounsOverview;
