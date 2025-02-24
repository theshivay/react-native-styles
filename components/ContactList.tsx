import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';

export default function ContactList() {
    const contacts = [
        {
            uid : 1,
            name : 'Shivam Mishra',
            status : 'I lova to code and cricket',
            profile : 'https://i.pinimg.com/736x/fd/57/e7/fd57e79757d9891641c02d7f5e938b7b.jpg',
        },
        {
            uid : 2,
            name : 'Hitesh Chaudhary',
            status : 'Just an extra - ordinary friend of Shivam',
            profile : 'https://i.pinimg.com/736x/fe/8b/3a/fe8b3a3190d170e022adb368d95bded6.jpg',
        },
        {
            uid : 3,
            name : 'Shashvat Saxena',
            status : 'Just an extra - ordinary friend of Hitesh',
            profile : 'https://i.pinimg.com/736x/86/86/28/8686287cc16b2d964a952b24ceffbe4f.jpg',
        },
        {
            uid : 4,
            name : 'Abhinav Arora',
            status : 'I lova to playing PUBG',
            profile : 'https://i.pinimg.com/736x/2c/71/91/2c7191e6a671055000187d2fd11c523b.jpg',
        },
    ];

  return (
    <View>
      <Text style={style.headingText}>ContactList</Text>
      <ScrollView
        style={style.container}
        scrollEnabled={false}
      >
        {contacts.map(({uid,name, status, profile}) => (
            <View key={uid} style={style.userCard}>
                <Image
                    source={{
                        uri : profile,
                    }}
                    style = {style.userImage}
                    />
                    <View>
                        <Text style={style.userName}>{name}</Text>
                        <Text style={style.userStatus}>{status}</Text>
                    </View>
            </View>
        ))}
      </ScrollView>
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
    container : {
        paddingHorizontal : 16,
        marginBottom : 4,
    },
    userCard : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        marginBottom : 4,
        backgroundColor : '#781387',
        padding : 8,
        borderRadius : 10,
    },
    userImage : {
        width : 80,
        height : 80,
        borderRadius : 80 / 2,
        marginRight : 18,
    },
    userName : {
        fontSize : 16,
        fontWeight : '600',
        color : '#FFF',
    },
    userStatus : {
        fontSize : 12,
    },
});
