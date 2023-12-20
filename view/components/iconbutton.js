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
import styles from '../assets/UpfrontStyles'; // Import the styles module
import Icon from 'react-native-vector-icons/FontAwesome';

export default IconButton = ({ text, iconName, onPress, style}) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name={iconName} style={styles.icon} />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  