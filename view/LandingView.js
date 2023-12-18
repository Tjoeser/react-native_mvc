// LandingView.js
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useNounsContext } from '../controller/NounsController';

const LandingView = () => {
  const { dispatch } = useNounsContext();
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Go To Nouns"
        onPress={() => navigation.navigate('NounsOverview')}
      />
    </View>
  );
};

export default LandingView;
