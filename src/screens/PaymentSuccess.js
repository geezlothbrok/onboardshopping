import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const PaymentSuccess = ({navigation}) => {
    handleOnPress = () => {
        navigation.navigate('Online')
    };

    const handleOnPrevious = () => {
        navigation.navigate('Cart')
    };
    return (
        <View style = {styles.container}>
                
        <View style = {styles.textContainer}>
            <Text style = {styles.heading}>PAYMENT SUCCESSFUL</Text>
            <Text style = {styles.textInfo}>
            
                Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            </Text>
        </View>

        <View style = {styles.imageContainer}>
            <Image style = {styles.image} source = {require('../../assets/payment-successful.png')}></Image>
        </View>

        <View style = {styles.buttonContainer}>
           <TouchableOpacity style = {styles.button} onPress = {handleOnPress} >
               <Text style = {styles.buttonText}>Get Started</Text>
           </TouchableOpacity>
        </View>

        <View style = {styles.navContainer}>
            <TouchableOpacity onPress = {handleOnPrevious}>
                <Text style = {styles.navPrevious}>Previous</Text>
            </TouchableOpacity>

            <Text style = {styles.round}></Text>
            <Text style = {styles.rounds}></Text>
            <Text style = {styles.roundDeep}></Text>

            
        </View>

    </View>
    );
};

export default PaymentSuccess;




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
        },
        round : {
            height : 10, 
            width : 10,
            backgroundColor : '#D0CAEB',
            borderRadius : 5,
            marginTop : 5,
            marginLeft : 35
        },
        rounds : {
            height : 10, 
            width : 10,
            backgroundColor : '#D0CAEB',
            borderRadius : 5,
            marginTop : 5,
            marginLeft : 10
        },
        roundDeep : {
            height : 10,
            width : 25,
            backgroundColor : '#7A65C6',
            marginLeft : 10,
            borderRadius : 10,
            marginTop : 5
        },
        navPrevious : { 
            marginRight : 55
        },
        navSkip : {
            marginLeft : 82,
            
        },
        navPrevious : {
            color : '#BFB4B5',
            marginRight : 40
        }

})