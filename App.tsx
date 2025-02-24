// import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import React from 'react';
import Flatbox from './components/Flatbox';
import Elevated from './components/Elevated';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export default function App() {
// const isDark = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <ScrollView>
        <View style = {styles.container}>
          {/* <Text style={isDark ? styles.whiteText : styles.darkText} >App</Text> */}
          <Flatbox/>
          <Elevated/>
          <FancyCard/>
          <ContactList/>
          <ActionCard/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container : {
    paddingVertical: 10,
    backgroundColor : '#2f4f4f',
  },

//   whiteText : {
//     color : '#FFFFFF',
//     fontSize : 34,
//     fontWeight : 'bold',
//     paddingHorizontal : 8,
//   },
//   darkText : {
//     color : '#000000',
//     fontSize : 34,
//     fontWeight : 'bold',
//     paddingHorizontal : 8,
//   },

});


