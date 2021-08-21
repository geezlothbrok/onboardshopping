import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'


const OnlineShopping = ({navigation}) => {
    const handleOnPress =() => {
            navigation.navigate('Cart')
    };

    const handleOnSkip = () => {
        navigation.navigate('Payment')
    };
    return (
        <View style = {styles.container}>
                
                <View style = {styles.textContainer}>
                    <Text style = {styles.heading}>ONLINE SHOPPING</Text>
                    <Text style = {styles.textInfo}>
                    
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                        dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                        
                        
                    </Text>
                </View>

                <View style = {styles.imageContainer}>
                    <Image style = {styles.image} source = {require('../../assets/shop-online.png')}></Image>
                </View>

                <View style = {styles.buttonContainer}>
                   <TouchableOpacity style = {styles.button} onPress ={handleOnPress}>
                       <Text style = {styles.buttonText}>Next</Text>
                   </TouchableOpacity>
                </View>

                <View style = {styles.navContainer}>

                    <Text style = {styles.roundDeep}></Text>
                    <Text style = {styles.round}></Text>
                    <Text style = {styles.rounds}></Text>

                    <TouchableOpacity style = {styles.navSkip} onPress = {handleOnSkip}>
                        <Text style = {styles.navPrevious}>Skip</Text>
                    </TouchableOpacity>
                </View>

            </View>
    );
};

export default OnlineShopping;




const styles = StyleSheet.create ({
        container : {
            flex : 1,
            marginHorizontal : 40,
            marginTop : 40
        },
        textContainer : {
            flex : 0.3,
        },
        heading : {
            fontWeight : 'bold',
            fontSize : 20
        },
        textInfo : {
            color : '#838383',
            paddingTop : 15
        },
        imageContainer : {
            flex : 0.4,
            justifyContent : 'center',
            alignItems : 'center',
            paddingTop : 120
        },
        image : {
            width : 250,
            height : 230,
        },
        buttonContainer : {
            flex : 0.2,
            justifyContent : 'center',
            alignItems : 'center',
            paddingTop : 50,
            marginHorizontal : 20
        },
        button : {
            height : 50,
            width : '80%',
            backgroundColor : '#7A65C6',
            justifyContent : 'center',
            alignItems : 'center',
            borderRadius : 50,
        },
        buttonText : {
            color : 'white',
            fontWeight : 'bold',
            fontSize : 20, 
        },
        navContainer : {
            flexDirection : 'row',
            flex : 0.1,
            marginLeft : 70
        },
        round : {
            height : 10, 
            width : 10,
            backgroundColor : '#D0CAEB',
            borderRadius : 5,
            marginTop : 5,
            marginHorizontal : 10
        },
        rounds : {
            height : 10, 
            width : 10,
            backgroundColor : '#D0CAEB',
            borderRadius : 5,
            marginTop : 5,
            marginRight : 68
        },
        roundDeep : {
            height : 10,
            width : 25,
            backgroundColor : '#7A65C6',
            //marginLeft : 10,
            borderRadius : 10,
            marginTop : 5,
            marginLeft : 50
        },
        navPrevious : { 
            marginRight : 55
        },
        
        navPrevious : {
            color : '#BFB4B5',
            marginRight : 40
        },
       

})