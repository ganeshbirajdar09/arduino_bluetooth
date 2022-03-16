import React from 'react';
import {
  Text,
  View,
  ScrollView,
  // Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

// const images = [require('./assests/open.png'), require('./assests/close2.png')];

const App = () => {
  const buttonPressed = () => {
    return Snackbar.show({
      text: `Can't connect`,
      backgroundColor: '#EA7773',
      textColor: '#000000',
    });
  };
  const openPressed = () => {
    return Snackbar.show({
      text: 'Door Open !',
      backgroundColor: '#6AC47E',
      textColor: '#000000',
    });
  };
  const closePressed = () => {
    return Snackbar.show({
      text: 'Door Closed ! ',
      backgroundColor: '#FF6263',
      textColor: '#000000',
    });
  };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={buttonPressed}>
        <Text style={styles.gamePlayButton}>Connect</Text>
      </TouchableOpacity>

      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.box} onPress={openPressed}>
          <Text style={styles.optext}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={closePressed}>
          <Text style={styles.optext}>Close</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity style={styles.gridContainer}>
        <Text style={styles.box}>Open</Text>
        <Text style={styles.gamePlayButton}>Close</Text>
      </TouchableOpacity> */}
      {/* <View style={styles.gridContainer}>
        <TouchableOpacity>
          <Text> Open </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text> Close </Text>
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },

  imggrid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  gamePlayButton: {
    fontSize: 30,
    marginTop: 30,
    color: '#F2A365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  box: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    marginVertical: 10,
    backgroundColor: '#0f4c75',
    borderRadius: 50,
    shadowColor: '#393e46',
    fontSize: 50,
    shadowRadius: 4,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  },
  optext: {
    fontSize: 18,
  },
});
