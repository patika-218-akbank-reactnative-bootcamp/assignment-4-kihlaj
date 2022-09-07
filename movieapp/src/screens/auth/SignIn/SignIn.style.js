import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#48D4FF' },
  logo: {
    height: height / 2.5,
    width: width / 2.5,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});

export default styles;
