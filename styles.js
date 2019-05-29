import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
    arrowText: { fontSize: 20, fontWeight: 'bold' },
    buttonStyle: {
      color: 'black',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 5
    },
    navContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 20,
      width: '100%'
    },
    container: {
      flex: 1,
      backgroundColor: '#d8d8ff',
      justifyContent: 'center',
    },
    pageContentContainer:{
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center'
      }
  });
