import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

const Flatbox = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatBox</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText :{
    color : '#000000',
    fontSize : 24,
    fontWeight : 'bold',
    paddingHorizontal : 8,
  },

  container : {
    flex : 1,
    flexDirection : 'row',
    padding : 8,
  },
  card : {
    flex :1,
    justifyContent : 'center',
    alignItems : 'center',
    width : 100,
    height : 100,
    borderRadius : 4,
    margin : 8,
  },
  cardOne : {
    backgroundColor : '#dc143c',
  },
  cardTwo : {
    backgroundColor : '#0000ff',
  },
  cardThree :{
    backgroundColor : '#006400',
  },

});

export default Flatbox;
