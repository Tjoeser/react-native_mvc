// ReadNounView.js
import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import Background from './assets/Background';
import styles from './assets/UpfrontStyles'; // Import the styles module
import { useNounsContext } from '../controller/NounsController';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Snackbar } from 'react-native-paper';
import IconButton from './components/iconbutton';

const ReadNounView = () => {
  const { dispatch, nounsState } = useNounsContext();
  const navigation = useNavigation();
  



  const IconTextButton = ({ text, iconName, onPress }) => {
    return (
      <TouchableOpacity style={[styles.button, styles.flexrow]} onPress={onPress}>
        <Icon name={iconName} style={styles.icon} />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (

    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.cardWrapper}>
        <View style={styles.card}>
          <View style={styles.imageWrapper}>
            <Background
              fromColor="#000000"
              toColor="#FFFFFF00"
              opacityColor1={0}>
              <Image
                style={styles.cardImage}
                source={{ uri: nounsState.noun.photo }}
              />
            </Background>
          </View>
          <View style={styles.cardContent}>
            <View style={[styles.flexrow, styles.spacebetween]}>
              <View style={styles.headWrapper}>
                <Text style={styles.h3}>{nounsState.noun.name}</Text>
              </View>
              <View style={styles.flexrow}>
                <IconButton
                  text="Update"
                  iconName="pencil"
                  onPress={() =>
                    dispatch({ type: 'UPDATENOUN', payload: nounsState.noun })
                  }
                />
                <IconButton text="Delete" iconName="trash" onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</IconButton>
              </View>
            </View>
            <Text>
              {nounsState.noun.bornAt} {nounsState.noun.id}
            </Text>
          </View>
        </View>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{label: 'Yes', onPress: () => {
            dispatch({ type: 'DELETENOUN', payload: nounsState.noun });
            navigation.navigate('ListNounsView');
          },}}>
          Do You Want To Delete This Noun?
        </Snackbar>
      </View>
    </SafeAreaView>
  );
};

export default ReadNounView;
