import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import styles from './assets/UpfrontStyles'; // Import the styles module
import * as ImagePicker from 'expo-image-picker';
import { useNounsContext } from '../controller/NounsController';

const CreateNounView = () => {
  const { nounsState, dispatch } = useNounsContext();
  const [name, setName] = useState('');
  const [bornAt, setBornAt] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    // Toestemming vragen indien nodig voor toegang tot de image gallery van het apparaat
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission required',
          'Please grant permission to access the image gallery.'
        );
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const saveNoun = () => {
    // Op basis van de Nouns data structuur
    const newNoun = {
      id: nounsState.nouns.length + 1,
      name,
      bornAt,
      photo: image,
    };

    // Dispatch de actie om de global nounsState te wijzigen
    dispatch({ type: 'CREATENEWNOUN', payload: newNoun });
  };

  return (
    <View>
      <Text>Create Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Born At"
        value={bornAt}
        onChangeText={(text) => setBornAt(text)}
      />
      <Button title="Pick an image from gallery" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Save" onPress={saveNoun} />
    </View>
  );
};

export default CreateNounView;
