import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { BottomNavigation, Button, Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, Image, View } from 'react-native';


export default function App() {

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Image 
          style={styles.tinyLogo}
          source={require('./assets/darcilogo.png')}/>
          <Button icon="camera">
            Press me
          </Button>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },

});
