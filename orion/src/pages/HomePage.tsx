import React, {useState} from 'react';
import axios from 'axios';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const HomePage = () => {
  const [disabledButton, setButton] = useState(false);
  const [message, setMessage] = useState('');

  const feedCat = async () => {
    setButton(true);
    try {
      await axios.post('http://localhost:3000/feed');
      setButton(false);
      setMessage('cat feed');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (err) {
      setMessage('error cat feed');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    }
  };

  return (
    <SafeAreaView style={[styles.background, styles.flex1]}>
      <View>
        <Text style={[styles.title]}> Cat Feeder</Text>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            disabled={disabledButton}
            onPress={feedCat}
            style={styles.button}>
            <Text style={styles.buttonText}>Feed</Text>
          </TouchableOpacity>

          <Text style={styles.title}>{message}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#6D545D',
  },
  flex1: {
    flex: 1,
  },

  title: {
    textAlign: 'center',
    fontSize: 28,
    color: 'white',
  },

  button: {
    backgroundColor: '#BED558',
    width: 100,
    padding: 24,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
});
