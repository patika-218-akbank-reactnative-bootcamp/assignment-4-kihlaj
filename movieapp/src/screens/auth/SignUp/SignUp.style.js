import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#48D4FF',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  logo: {
    height: height / 2.7,
    width: width / 2.7,
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});

export default styles;
