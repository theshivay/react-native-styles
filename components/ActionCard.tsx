import { View, Text, Linking, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={style.headingText}>Blog Card</Text>
      <View  style={[style.card, style.cardElevated]}>
        <View style={style.headingContainer}>
            <Text style={style.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <Image
            source={{
                uri : 'https://i.pinimg.com/736x/9f/65/57/9f6557137206d0fcfa7800361a36620e.jpg',
            }}
            style={style.cardImage}
        />
        <View style={style.bodyContainer}>
            <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={style.footerContainer}>
            <TouchableOpacity
                onPress={()=>openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}
            >
                <Text>Read more...</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>openWebsite('https://github.com/theshivay')}
            >
                <Text style={style.socialLink}>Follow Me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
    headingText :{
        color : '#000000',
        fontSize : 24,
        fontWeight : 'bold',
        padding : 8,
    },

    card : {
        width : 350,
        height : 350,
        borderRadius : 6,
        marginHorizontal : 100,
        marginVertical : 12,
    },
    cardElevated : {
        backgroundColor : '#E07C24',
        elevation : 3,
        shadowOffset : {
            width : 1,
            height : 1,
        },
        shadowColor : '#333',
        shadowOpacity : 0.4,
    },
    headingContainer : {
        height : 40,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
    },
    headerText : {
        color : '#000',
        fontSize : 16,
        fontWeight : '600',
    },
    cardImage : {
        height : 190,
    },
    bodyContainer : {
        padding : 10,
    },
    footerContainer : {
        padding : 8,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
    },
    socialLink : {
        fontSize : 16,
        color : '#000000',
        backgroundColor : '#fff',
        paddingHorizontal : 20,
        paddingVertical : 6,
        borderRadius : 6,
    },
});

