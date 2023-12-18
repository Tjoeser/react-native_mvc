// MainController.js
import { NavigationContainer } from '@react-navigation/native';
import Router from './Router';
import { NounsController } from './NounsController';

const MainController = () => {
  // Zet controllers in NavigationContainer om views navigeerbaar te maken
  return (
    <NavigationContainer>
      <NounsController>
              <Router />
      </NounsController>
    </NavigationContainer>
  );
};

export default MainController;
