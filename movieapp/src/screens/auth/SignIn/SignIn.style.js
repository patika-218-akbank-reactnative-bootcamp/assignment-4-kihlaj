import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  logo: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});

export default styles;
