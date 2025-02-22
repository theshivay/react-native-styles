import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Elevated() {
  return (
        <View>
            <Text style={styles.headingText}>Elevated Box</Text>
            <ScrollView horizontal = {true} style={styles.container}>
                <View style={[styles.card, styles.cardElevate]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevate]}>
                    <Text>me</Text>
                </View>
                <View style={[styles.card, styles.cardElevate]}>
                    <Text>to</Text>
                </View>
                <View style={[styles.card, styles.cardElevate]}>
                    <Text>scroll</Text>
                </View>
                <View style={[styles.card, styles.cardElevate]}>
                    <Text>More....</Text>
                </View>
                <View style={[styles.card, styles.cardElevate]}>
                    <Text>😄</Text>
                </View>
                <View style={[styles.card, styles.cardElevate]}>
                    <Text>😂</Text>
                </View>
                <View style={[styles.card, styles.cardElevate]}>
                    <Text>😜</Text>
                </View>
            </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
    headingText :{
        color : '#000000',
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
      },
      container : {
        padding : 8,
      },
      card : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        width : 100,
        height : 100,
        borderRadius : 4,
        margin : 8,
      },
      cardElevate : {
        backgroundColor : '#a9a9a9',
        elevation : 4,
        shadowOffset : {
            height : 1,
            width : 1,
        },
        shadowColor : '#333',
        shadowOpacity : 0.5,
        shadowRadius : 5,
      },
});
