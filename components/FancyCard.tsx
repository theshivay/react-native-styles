import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
export default function FancyCard() {
  return (
    <View>
      <Text style={style.headingText}>My Profile</Text>
      <View style={[style.card, style.cardElevated]}>
        <Image source={{
            uri : 'https://i.pinimg.com/736x/b5/78/5a/b5785af39d097409d685d68c242c146a.jpg',
        }}
        style={style.cardImage}
        />
        <View style={style.cardBody}>
          <Text style={style.cardTitle}> SHIVAM MISHRA</Text>
          <Text style={style.cardLabel}> CSE(AI & ML)</Text>
          <Text style={style.cardDes}>With a strong background in software engineering, data analysis,risk management, I am excited about the opportunity to contribute to your team of innovators and problem-solvers.</Text>
          <Text style={style.cardFooter}> Student...:)</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
    // fancyCard : {
    //   width : 600,
    // },
    headingText :{
        color : '#000000',
        fontSize : 24,
        fontWeight : 'bold',
        padding : 8,
    },
    card : {
      width : 350,
      borderRadius : 6,
      marginHorizontal : 100,
      // flex : 1,
      // justifyContent : 'center',
      // alignContent : 'center',

    },
    cardElevated : {
      backgroundColor : '#FFFFFFF',
      elevation : 3,
      shadowOffset :{
        width : 1,
        height : 1,
      },
    },
    cardImage : {
        height : 380,
        marginBottom : 8,
        borderTopLeftRadius : 8,
        borderTopRightRadius : 8,
    },
    cardBody : {
      flex : 1,
      flexGrow : 1,
      paddingHorizontal : 10,
    },
    cardTitle : {
      color : '#000000',
      fontSize : 22,
      fontWeight : 'bold',
      marginBottom : 4,
    },
    cardLabel : {
      color : '#000000',
      fontSize : 14,
      marginBottom : 6,
    },
    cardDes : {
      fontSize : 12,
      color : '#000000',
      marginBottom : 12,
      marginTop : 6,
      flexShrink : 1,
    },
    cardFooter : {
      color : '#000000',
    },
});

